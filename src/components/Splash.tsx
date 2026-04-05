import { motion } from "motion/react";
import { Toilet } from "lucide-react";

interface SplashProps {
  onFinish: () => void;
}

export default function Splash({ onFinish }: SplashProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-600 text-white"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1.2, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
        className="mb-4"
      >
        <div className="rounded-full bg-white p-8 shadow-2xl">
          <Toilet size={80} className="text-blue-600" />
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-4xl font-black tracking-tighter uppercase"
      >
        Toilet Run
      </motion.h1>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ delay: 1, duration: 1.5 }}
        className="mt-8 h-2 rounded-full bg-white/30 overflow-hidden"
      >
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ delay: 1, duration: 1.5 }}
          className="h-full w-full bg-white"
        />
      </motion.div>
      
      <p className="mt-4 text-sm font-medium opacity-80">Loading Fun...</p>
    </motion.div>
  );
}
