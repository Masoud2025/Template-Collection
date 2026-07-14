"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, Ghost, Volume2, VolumeX, Skull } from "lucide-react";

interface JumpScareProps {
  triggerDelay?: number;
  autoTrigger?: boolean;
}

export default function JumpScare({ triggerDelay = 5000, autoTrigger = true }: JumpScareProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load sound file
  useEffect(() => {
    const audio = new Audio("/sounds/jumpscare.mp3");
    audio.preload = "auto";
    audio.volume = 0.8;
    audioRef.current = audio;
    console.log("🔊 Sound file loaded:", audio.src);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Detect user interaction
  useEffect(() => {
    const handleInteraction = () => {
      console.log("👆 User interacted with page!");
      setHasUserInteracted(true);
      
      // Resume audio context if needed
      if (audioRef.current) {
        try {
          const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
          const ctx = new AudioContextClass();
          if (ctx.state === "suspended") {
            ctx.resume();
          }
        } catch (e) {}
      }
      
      // Remove listeners after first interaction
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  // Play scare sound from file
  const playSound = useCallback(() => {
    if (isMuted) {
      console.log("🔇 Sound is muted");
      return;
    }
    
    console.log("🔊 Playing jumpscare sound from file...");
    
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("✅ Sound played successfully from file!");
            })
            .catch((error) => {
              console.error("❌ Playback failed:", error);
              // If user hasn't interacted, show a message or use fallback
              if (error.name === "NotAllowedError") {
                console.log("⚠️ User must interact with page first");
                // Try to play after a short delay with a click simulation
                setTimeout(() => {
                  if (audioRef.current) {
                    audioRef.current.play().catch(() => {});
                  }
                }, 100);
              }
              fallbackSound();
            });
        }
      } else {
        console.log("⚠️ Audio element not available, using fallback");
        fallbackSound();
      }
    } catch (error) {
      console.error("❌ Sound error:", error);
      fallbackSound();
    }
  }, [isMuted]);

  // Fallback sound using Web Audio API
  const fallbackSound = useCallback(() => {
    console.log("🎵 Using Web Audio fallback...");
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      
      if (ctx.state === "suspended") {
        console.log("⏸️ AudioContext suspended, trying to resume...");
        ctx.resume();
      }
      
      const now = ctx.currentTime;
      
      // Deep bass
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(150, now);
      osc1.frequency.exponentialRampToValueAtTime(60, now + 0.6);
      gain1.gain.setValueAtTime(0.4, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc1.start(now);
      osc1.stop(now + 0.6);
      
      // Screech
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = "square";
      osc2.frequency.setValueAtTime(800, now + 0.1);
      osc2.frequency.exponentialRampToValueAtTime(200, now + 0.5);
      gain2.gain.setValueAtTime(0.15, now + 0.1);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
      osc2.start(now + 0.1);
      osc2.stop(now + 0.5);
      
      console.log("✅ Fallback sound played!");
    } catch (error) {
      console.error("❌ Fallback sound failed:", error);
    }
  }, []);

  // Trigger the jumpscare
  const triggerScare = useCallback(() => {
    if (isActive || hasTriggered) return;
    
    console.log("💀 Triggering jumpscare...");
    
    setIsActive(true);
    setIsVisible(true);
    setHasTriggered(true);

    // Play sound with a slight delay to ensure DOM is ready
    setTimeout(() => {
      playSound();
    }, 50);

    // Flash effect
    const flashEl = document.createElement("div");
    flashEl.style.cssText = `
      position: fixed;
      inset: 0;
      background: white;
      z-index: 99;
      opacity: 0.9;
      pointer-events: none;
      transition: opacity 0.15s;
    `;
    document.body.appendChild(flashEl);
    setTimeout(() => {
      flashEl.style.opacity = "0";
      setTimeout(() => flashEl.remove(), 200);
    }, 150);

    // Hide after 2.5 seconds
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setIsActive(false), 500);
    }, 2500);
  }, [isActive, hasTriggered, playSound]);

  // Listen for first scroll
  useEffect(() => {
    if (!autoTrigger || hasTriggered) return;

    const handleFirstInteraction = () => {
      console.log("👆 User interaction detected!");
      triggerScare();
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("wheel", handleFirstInteraction);
      window.removeEventListener("touchmove", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("scroll", handleFirstInteraction, { once: true });
    window.addEventListener("wheel", handleFirstInteraction, { once: true });
    window.addEventListener("touchmove", handleFirstInteraction, { once: true });
    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    const timer = setTimeout(() => {
      console.log("⏰ Fallback timer triggered!");
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("wheel", handleFirstInteraction);
      window.removeEventListener("touchmove", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      
      if (!hasTriggered) {
        triggerScare();
      }
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("wheel", handleFirstInteraction);
      window.removeEventListener("touchmove", handleFirstInteraction);
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      clearTimeout(timer);
    };
  }, [autoTrigger, hasTriggered, triggerScare]);

  // Disable scroll when visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  const handleManualTrigger = () => {
    console.log("🎯 Manual trigger clicked!");
    if (isActive) return;
    triggerScare();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsActive(false), 500);
  };

  if (!isActive) return null;

  return (
    <>
      {/* دکمه تست */}
      <button
        onClick={handleManualTrigger}
        className="fixed bottom-6 left-6 z-50 px-4 py-2 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white rounded-full text-sm font-bold shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 border-2 border-red-500/50"
      >
        <Skull size={18} className="text-red-300" />
        تست ترس
      </button>

      {/* دکمه صدا */}
      <button
        onClick={() => {
          console.log(`🔊 Sound ${isMuted ? "unmuted" : "muted"}`);
          setIsMuted(!isMuted);
        }}
        className="fixed bottom-6 left-36 z-50 w-10 h-10 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-red-500/30 hover:border-red-500/60"
      >
        {isMuted ? <VolumeX size={18} className="text-red-400" /> : <Volume2 size={18} className="text-green-400" />}
      </button>

      {/* پس‌زمینه تاریک با نور قرمز */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "radial-gradient(ellipse at center, rgba(100,0,0,0.9) 0%, rgba(0,0,0,0.98) 100%)",
          boxShadow: "inset 0 0 200px rgba(255,0,0,0.3)",
        }}
      />

      {/* سایه گوشه‌ها */}
      <div
        className={`fixed inset-0 z-[101] pointer-events-none transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* محتوای ترسناک */}
      <div
        className={`fixed inset-0 z-[102] flex items-center justify-center transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative max-w-3xl w-full mx-4">
          <div className="relative bg-gradient-to-b from-red-950/95 via-black/95 to-black/95 rounded-3xl overflow-hidden border-4 border-red-600/70 shadow-[0_0_150px_rgba(255,0,0,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,0,0.15)_0%,_transparent_70%)]" />
            
            <div className="absolute top-0 left-1/4 w-1 h-20 bg-red-600/30 rounded-full animate-pulse" />
            <div className="absolute top-0 left-2/3 w-0.5 h-16 bg-red-600/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-0 left-1/2 w-0.5 h-24 bg-red-600/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="relative p-8 md:p-12 text-center">
              <div className="relative inline-block mb-6">
                <div className="text-9xl md:text-[10rem] animate-pulse filter drop-shadow-[0_0_60px_rgba(255,0,0,0.5)]">
                  👻
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-8 bg-red-600/20 blur-3xl rounded-full" />
              </div>
              
              <h2 className="relative text-5xl md:text-8xl font-black tracking-wider mb-3">
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-red-600 blur-sm animate-pulse">BOO!</span>
                  <span className="relative text-white drop-shadow-[0_0_40px_rgba(255,0,0,0.6)]">BOO!</span>
                </span>
              </h2>
              
              <p className="text-red-300/80 text-lg md:text-xl font-medium mt-2 tracking-widest">
                ⚰️ به دام افتادی ⚰️
              </p>
              
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-500/50" />
                <span className="text-red-500/40 text-sm">💀</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-red-500/50" />
              </div>

              <p className="text-red-400/40 text-xs md:text-sm mt-4 tracking-[0.3em] font-mono">
                👹 موهاهاهاها! 👹
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
            </div>
          </div>

          <button
            onClick={handleClose}
            className="absolute -top-4 -right-4 w-12 h-12 bg-black/90 hover:bg-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 border-red-600/50 hover:border-red-600 group"
          >
            <X size={24} className="text-red-400 group-hover:text-red-300 transition-colors" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
          }
          50% { 
            transform: scale(1.08); 
          }
        }
        .animate-pulse {
          animation: pulse 0.6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}