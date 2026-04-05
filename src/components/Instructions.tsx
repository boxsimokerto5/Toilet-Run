import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ChevronRight, ChevronLeft, MousePointer2, Move, Star, CheckCircle2, Toilet } from "lucide-react";

interface InstructionsProps {
  onStart: () => void;
}

export default function Instructions({ onStart }: InstructionsProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: <MousePointer2 size={48} className="text-blue-500" />,
      title: "PILIH KARAKTER",
      desc: "Klik atau sentuh karakter yang ingin kamu gerakkan ke toilet.",
      color: "bg-blue-500",
      animation: (
        <div className="relative w-full h-48 bg-slate-100 rounded-3xl flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <span className="font-black text-2xl">BOY</span>
          </motion.div>
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, 10, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute text-slate-800"
          >
            <MousePointer2 size={32} fill="currentColor" />
          </motion.div>
        </div>
      ),
    },
    {
      icon: <Move size={48} className="text-green-500" />,
      title: "GAMBAR JALUR",
      desc: "Tarik garis dari karakter menuju toilet yang warnanya sama.",
      color: "bg-green-500",
      animation: (
        <div className="relative w-full h-48 bg-slate-100 rounded-3xl flex items-center justify-between px-12 overflow-hidden">
          <div className="w-12 h-12 bg-green-500 rounded-full" />
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.path
              d="M 60 96 Q 150 50 240 96"
              fill="transparent"
              stroke="#22c55e"
              strokeWidth="4"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </svg>
          <div className="w-12 h-12 bg-white border-4 border-green-500 rounded-lg flex items-center justify-center">
             <Toilet size={24} className="text-green-500" />
          </div>
        </div>
      ),
    },
    {
      icon: <Star size={48} className="text-yellow-500" />,
      title: "HINDARI TABRAKAN",
      desc: "Jangan sampai jalur karakter saling bersilangan atau bertabrakan!",
      color: "bg-yellow-500",
      animation: (
        <div className="relative w-full h-48 bg-slate-100 rounded-3xl flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{ x: [-80, -20, -80] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-10 h-10 bg-blue-500 rounded-full absolute"
          />
          <motion.div
            animate={{ x: [80, 20, 80] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-10 h-10 bg-red-500 rounded-full absolute"
          />
          <motion.div
            animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-red-600 font-black text-4xl"
          >
            !
          </motion.div>
        </div>
      ),
    },
    {
      icon: <CheckCircle2 size={48} className="text-purple-500" />,
      title: "MENANGKAN LEVEL",
      desc: "Bantu semua orang sampai ke toilet dengan selamat untuk menang.",
      color: "bg-purple-500",
      animation: (
        <div className="relative w-full h-48 bg-slate-100 rounded-3xl flex flex-col items-center justify-center overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-yellow-500"
          >
            <Star size={64} fill="currentColor" />
          </motion.div>
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="font-black text-purple-600 mt-2"
          >
            LEVEL CLEAR!
          </motion.p>
        </div>
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onStart();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
      {/* Background Glow */}
      <div className={`absolute inset-0 opacity-20 blur-[120px] transition-colors duration-700 ${steps[currentStep].color}`} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Progress Bar */}
        <div className="flex h-2 bg-slate-100">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`flex-1 transition-all duration-500 ${
                i <= currentStep ? steps[currentStep].color : "bg-slate-200"
              }`}
            />
          ))}
        </div>

        <div className="p-8 flex-1 flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-full shadow-inner">
                {steps[currentStep].icon}
              </div>

              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-3">
                {steps[currentStep].title}
              </h2>

              <p className="text-slate-500 font-medium leading-relaxed mb-8 px-4">
                {steps[currentStep].desc}
              </p>

              {/* Dynamic Animation Area */}
              <div className="w-full mb-8">
                {steps[currentStep].animation}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Footer */}
        <div className="p-8 bg-slate-50 flex items-center justify-between gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`p-4 rounded-2xl transition-all ${
              currentStep === 0 ? "opacity-0 pointer-events-none" : "bg-white text-slate-400 shadow-sm hover:text-slate-600"
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentStep ? "w-6 " + steps[currentStep].color : "bg-slate-300"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextStep}
            className={`px-8 py-4 rounded-2xl font-black text-white shadow-lg flex items-center gap-2 transition-colors ${
              steps[currentStep].color
            }`}
          >
            {currentStep === steps.length - 1 ? (
              <>
                MAIN <Play size={20} fill="currentColor" />
              </>
            ) : (
              <>
                LANJUT <ChevronRight size={20} />
              </>
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Skip Button */}
      <button
        onClick={onStart}
        className="mt-8 text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors"
      >
        Lewati Instruksi
      </button>
    </div>
  );
}
