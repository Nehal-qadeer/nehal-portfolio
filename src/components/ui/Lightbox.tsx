"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

export function Lightbox({ isOpen, onClose, src, alt, caption }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-surface text-ink border border-line-strong flex items-center justify-center shadow-lg hover:border-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <X size={20} />
          </button>

          <div className="relative max-w-[92vw] max-h-[88vh] flex flex-col items-center">
            <div className="relative overflow-hidden rounded-xl border border-line bg-surface-2 shadow-2xl">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={700}
                className="max-w-[92vw] max-h-[80vh] w-auto h-auto object-contain"
                priority
              />
            </div>
            {caption && (
              <p className="mt-3 font-body text-xs sm:text-sm text-signal-ink text-center max-w-xl">
                {caption}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
