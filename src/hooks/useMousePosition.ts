"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

/** Returns cursor position normalized to [-1, 1] on each axis, origin at viewport center. */
export function useMousePosition(): Position {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(event: PointerEvent) {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -((event.clientY / window.innerHeight) * 2 - 1);
      setPosition({ x, y });
    }
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return position;
}
