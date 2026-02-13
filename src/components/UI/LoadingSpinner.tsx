import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "../../contexts/LoadingContext";
import { useEffect, useState } from "react";

const LoadingSpinner = () => {
  const { isLoading, loadingProgress, loadingMessage, startTime } =
    useLoading();
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pulseIntensity, setPulseIntensity] = useState(1);

  // Update elapsed time
  useEffect(() => {
    let interval: number;
    if (isLoading && startTime) {
      interval = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isLoading, startTime]);

  // Dynamic pulse based on progress
  useEffect(() => {
    setPulseIntensity(0.5 + (loadingProgress / 100) * 1.5);
  }, [loadingProgress]);

  // Format time display
  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  // Dynamic rotation speed based on progress
  const rotationDuration = Math.max(0.5, 2 - (loadingProgress / 100) * 1.5);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative">
        {/* Progress ring background */}
        <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-gray-800"></div>

        {/* Progress ring */}
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-800"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="56"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 56}`}
            strokeDashoffset={`${2 * Math.PI * 56 * (1 - loadingProgress / 100)}`}
            className="text-[#e99b63]"
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </svg>

        {/* Outer spinning ring */}
        <motion.div
          className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-[#e99b63] border-r-[#e99b63] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: rotationDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner spinning ring */}
        <motion.div
          className="absolute top-4 left-4 w-24 h-24 border-4 border-transparent border-b-[#656565] border-l-[#656565] rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: rotationDuration * 0.7,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.div
            className="text-2xl font-bold text-white mb-1"
            animate={{ scale: [1, pulseIntensity, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            {Math.round(loadingProgress)}%
          </motion.div>
          <div className="text-xs text-gray-400">{formatTime(elapsedTime)}</div>
        </div>
      </div>

      {/* Loading messages */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={loadingMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-2"
          >
            <p className="text-white text-lg font-medium tracking-wider">
              {loadingMessage}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Asset loading indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {["Models", "Textures", "Shaders", "Audio"].map((asset, index) => (
            <motion.div
              key={asset}
              className="w-2 h-2 bg-gray-600 rounded-full"
              animate={{
                backgroundColor:
                  loadingProgress > (index + 1) * 25 ? "#e99b63" : "#4b5563",
                scale: loadingProgress > (index + 1) * 25 ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <motion.p
          className="text-gray-400 text-sm mt-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading assets... {Math.round(loadingProgress)}%
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
