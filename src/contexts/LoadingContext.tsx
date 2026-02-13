import { createContext, useContext, useState, type ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  loadingProgress: number;
  loadingMessage: string;
  startTime: number | null;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  updateProgress: (progress: number, message?: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("Loading assets...");
  const [startTime, setStartTime] = useState<number | null>(null);

  const showLoading = (message = "Loading assets...") => {
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingMessage(message);
    setStartTime(Date.now());
  };

  const hideLoading = () => {
    setIsLoading(false);
    setLoadingProgress(100);
    setStartTime(null);
  };

  const updateProgress = (progress: number, message?: string) => {
    setLoadingProgress(Math.min(100, Math.max(0, progress)));
    if (message) {
      setLoadingMessage(message);
    }
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingProgress,
        loadingMessage,
        startTime,
        showLoading,
        hideLoading,
        updateProgress,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
