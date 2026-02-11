import { createContext, useContext, useState, type ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
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

  const showLoading = () => {
    setIsLoading(true);
  };

  const hideLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
