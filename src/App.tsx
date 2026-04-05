import { useState, useEffect } from "react";
import Splash from "./components/Splash";
import MainMenu from "./components/MainMenu";
import Instructions from "./components/Instructions";
import Game from "./components/Game";
import { AnimatePresence, motion } from "motion/react";
import { AdService } from "./services/AdService";

type AppState = "SPLASH" | "MAIN_MENU" | "INSTRUCTIONS" | "GAME";

export default function App() {
  const [appState, setAppState] = useState<AppState>("SPLASH");
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  useEffect(() => {
    // If splash is finished, move to main menu
    if (isSplashFinished && appState === "SPLASH") {
      setAppState("MAIN_MENU");
    }
  }, [isSplashFinished, appState]);

  const handleSplashFinish = () => {
    setIsSplashFinished(true);
  };

  const handleGoToInstructions = () => {
    // Show interstitial before going to instructions
    AdService.showInterstitial();
    setAppState("INSTRUCTIONS");
  };

  const handleStartGame = () => {
    setAppState("GAME");
  };

  const handleBackToMenu = () => {
    // Show interstitial when coming back to menu
    AdService.showInterstitial();
    setAppState("MAIN_MENU");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased overflow-hidden">
      <AnimatePresence mode="wait">
        {appState === "SPLASH" && (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Splash onFinish={handleSplashFinish} />
          </motion.div>
        )}

        {appState === "MAIN_MENU" && (
          <motion.div
            key="main_menu"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <MainMenu onPlay={handleGoToInstructions} />
          </motion.div>
        )}

        {appState === "INSTRUCTIONS" && (
          <motion.div
            key="instructions"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Instructions onStart={handleStartGame} />
          </motion.div>
        )}

        {appState === "GAME" && (
          <motion.div
            key="game"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6, type: "spring", damping: 25, stiffness: 120 }}
          >
            <Game onBack={handleBackToMenu} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
