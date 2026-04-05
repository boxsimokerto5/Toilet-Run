import { motion } from "motion/react";
import { ArrowLeft, RefreshCcw } from "lucide-react";

interface GameProps {
  onBack: () => void;
}

export default function Game({ onBack }: GameProps) {
  const handleRefresh = () => {
    const iframe = document.getElementById("game-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black flex flex-col"
    >
      {/* Header Controls */}
      <div className="h-14 bg-slate-900 flex items-center justify-between px-4 z-10 shadow-lg border-b border-slate-800">
        <button
          onClick={onBack}
          className="p-2 text-white hover:bg-slate-800 rounded-full transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-bold uppercase tracking-tighter">Keluar</span>
        </button>
        
        <h2 className="text-white font-black uppercase tracking-widest text-sm">
          Toilet Run
        </h2>
        
        <button
          onClick={handleRefresh}
          className="p-2 text-white hover:bg-slate-800 rounded-full transition-colors flex items-center gap-2"
        >
          <RefreshCcw size={20} />
          <span className="text-sm font-bold uppercase tracking-tighter">Muat Ulang</span>
        </button>
      </div>

      {/* Game Iframe */}
      <div className="flex-1 relative bg-slate-900">
        <iframe
          id="game-iframe"
          src="https://play.famobi.com/toilet-run"
          className="w-full h-full border-none"
          title="Toilet Run Game"
          allow="autoplay; fullscreen; pointer-lock"
          referrerPolicy="no-referrer"
        />
      </div>
      
      {/* Footer Info */}
      <div className="h-10 bg-slate-950 flex items-center justify-center px-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
        Powered by Famobi &bull; Toilet Run Mobile
      </div>
    </motion.div>
  );
}
