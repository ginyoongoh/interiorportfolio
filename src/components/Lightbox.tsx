'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

type Props = {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
};

const MIN_SCALE = 1;
const MAX_SCALE = 4;

export default function Lightbox({ isOpen, imageSrc, imageAlt, onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [animating, setAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const positionRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const hasDragged = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const reset = useCallback((animate: boolean) => {
    if (animate) {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 300);
    }
    scaleRef.current = 1;
    positionRef.current = { x: 0, y: 0 };
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Reset on close
  useEffect(() => {
    if (!isOpen) reset(false);
  }, [isOpen, reset]);

  // Reset on image change
  useEffect(() => {
    reset(false);
  }, [imageSrc, reset]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);
  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  // ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Wheel zoom — must be non-passive to call preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - (rect.left + rect.width / 2);
      const mouseY = e.clientY - (rect.top + rect.height / 2);

      const s = scaleRef.current;
      const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      const ns = Math.min(MAX_SCALE, Math.max(MIN_SCALE, s * factor));
      if (ns === s) return;

      const ratio = ns / s;
      const pos = positionRef.current;
      // Keep the point under the cursor fixed
      const nx = mouseX - (mouseX - pos.x) * ratio;
      const ny = mouseY - (mouseY - pos.y) * ratio;

      scaleRef.current = ns;
      positionRef.current = { x: nx, y: ny };
      setScale(ns);
      setPosition({ x: nx, y: ny });
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  // Mouse drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scaleRef.current <= 1) return;
    e.preventDefault();
    isDraggingRef.current = true;
    hasDragged.current = false;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - positionRef.current.x,
      y: e.clientY - positionRef.current.y,
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const nx = e.clientX - dragStart.current.x;
    const ny = e.clientY - dragStart.current.y;
    if (Math.abs(nx - positionRef.current.x) > 1 || Math.abs(ny - positionRef.current.y) > 1) {
      hasDragged.current = true;
    }
    positionRef.current = { x: nx, y: ny };
    setPosition({ x: nx, y: ny });
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
  }, []);

  const handleDoubleClick = useCallback(() => {
    reset(true);
  }, [reset]);

  // Don't close if the user just finished dragging
  const handleBackgroundClick = useCallback(() => {
    if (hasDragged.current) {
      hasDragged.current = false;
      return;
    }
    onClose();
  }, [onClose]);

  const cursor = scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default';

  const imgTransition = animating
    ? 'transform 300ms ease-out'
    : isDragging
    ? 'none'
    : 'transform 100ms ease-out';

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex items-center justify-center p-8 md:p-16 bg-black/95 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ cursor }}
      onClick={handleBackgroundClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        tabIndex={isOpen ? 0 : -1}
        className="absolute top-6 right-6 z-10 font-mono text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200"
      >
        Close [×]
      </button>

      {/* Hint text */}
      <p className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-white/40 pointer-events-none select-none">
        Scroll to zoom · Drag to pan · Double-click to reset
      </p>

      {/* Zoom level (hidden at 100%) */}
      {scale > 1.01 && (
        <p className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-widest text-white/40 pointer-events-none select-none">
          {Math.round(scale * 100)}%
        </p>
      )}

      {/* Image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-full max-w-full object-contain select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: imgTransition,
            cursor,
          }}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={handleMouseDown}
          onDoubleClick={handleDoubleClick}
          draggable={false}
        />
      )}
    </div>
  );
}
