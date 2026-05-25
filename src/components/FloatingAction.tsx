'use client';

import { useEffect, useRef, useState } from 'react';
import type { MouseEvent, PointerEvent } from 'react';
import { GripVertical, MessageCircle } from 'lucide-react';

type Position = {
  x: number;
  y: number;
};

export function FloatingAction() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dragRef = useRef({
    active: false,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
    moved: false,
  });
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    const setInitialPosition = () => {
      const width = buttonRef.current?.offsetWidth ?? 176;
      const height = buttonRef.current?.offsetHeight ?? 58;
      setPosition((current) => {
        if (current) {
          return {
            x: Math.min(Math.max(12, current.x), window.innerWidth - width - 12),
            y: Math.min(Math.max(12, current.y), window.innerHeight - height - 12),
          };
        }

        return {
          x: window.innerWidth - width - 20,
          y: window.innerHeight - height - 20,
        };
      });
    };

    setInitialPosition();
    window.addEventListener('resize', setInitialPosition);
    return () => window.removeEventListener('resize', setInitialPosition);
  }, []);

  function handlePointerDown(event: PointerEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    dragRef.current = {
      active: true,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLButtonElement>) {
    if (!dragRef.current.active) return;

    const width = buttonRef.current?.offsetWidth ?? 176;
    const height = buttonRef.current?.offsetHeight ?? 58;
    const nextX = event.clientX - dragRef.current.offsetX;
    const nextY = event.clientY - dragRef.current.offsetY;

    if (
      Math.abs(event.clientX - dragRef.current.startX) > 5 ||
      Math.abs(event.clientY - dragRef.current.startY) > 5
    ) {
      dragRef.current.moved = true;
    }

    setPosition({
      x: Math.min(Math.max(12, nextX), window.innerWidth - width - 12),
      y: Math.min(Math.max(12, nextY), window.innerHeight - height - 12),
    });
  }

  function handlePointerUp(event: PointerEvent<HTMLButtonElement>) {
    dragRef.current.active = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (dragRef.current.moved) {
      event.preventDefault();
      dragRef.current.moved = false;
      return;
    }

    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <button
      ref={buttonRef}
      className="floatingAction"
      type="button"
      aria-label="Iniciar atendimento"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
      style={position ? { left: position.x, top: position.y } : undefined}
    >
      <GripVertical size={16} aria-hidden="true" />
      <span>Atendimento</span>
      <MessageCircle size={17} aria-hidden="true" />
    </button>
  );
}
