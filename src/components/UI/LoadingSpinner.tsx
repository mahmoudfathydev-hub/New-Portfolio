import { motion } from "framer-motion";
import { useLoading } from "../../contexts/LoadingContext";

const LoadingSpinner = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="relative">
        {/* Outer spinning ring */}
        <motion.div
          className="w-24 h-24 border-4 border-transparent border-t-[#e99b63] border-r-[#e99b63] rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner spinning ring */}
        <motion.div
          className="absolute top-2 left-2 w-20 h-20 border-4 border-transparent border-b-[#656565] border-l-[#656565] rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-4 h-4 bg-[#e99b63] rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-white text-lg font-medium tracking-wider">
          LOADING PROJECT...
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
