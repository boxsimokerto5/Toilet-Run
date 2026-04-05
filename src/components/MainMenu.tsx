import { motion } from "motion/react";
import { Play, ShieldCheck } from "lucide-react";

interface MainMenuProps {
  onPlay: () => void;
}

export default function MainMenu({ onPlay }: MainMenuProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-slate-100">
      {/* Blurred Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-yellow-200/50 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-200/50 blur-[80px]" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-200/50 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Game Logo Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-64 h-64 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/50 bg-blue-500 relative"
        >
          {/* Mocking the game art with CSS/Icons since I don't have the exact asset */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col items-center justify-center p-4">
             <img 
               src="https://play-lh.googleusercontent.com/8-v_Hh_H_fE_6_f_H_fE_6_f_H_fE_6_f_H_fE_6_f_H_fE_6_f_H_fE_6_f_H_fE_6=w240-h480-rw" 
               alt="Toilet Run" 
               className="w-full h-full object-cover rounded-3xl"
               referrerPolicy="no-referrer"
               onError={(e) => {
                 // Fallback if image fails
                 e.currentTarget.src = "https://picsum.photos/seed/toilet/300/300";
               }}
             />
             <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                <span className="text-white font-black text-3xl uppercase tracking-tighter drop-shadow-lg text-center leading-none">
                  TOILET<br/>RUN
                </span>
             </div>
          </div>
        </motion.div>

        {/* Play Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPlay}
          className="w-48 h-16 bg-green-500 rounded-2xl shadow-[0_8px_0_rgb(22,163,74)] flex items-center justify-center transition-all hover:translate-y-[-2px] active:translate-y-[4px] active:shadow-none"
        >
          <Play fill="white" size={32} className="text-white ml-1" />
        </motion.button>
      </div>

      {/* Bottom Left Shield Icon */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-8"
      >
        <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
          <ShieldCheck size={32} className="text-white" />
        </div>
      </motion.div>
    </div>
  );
}
