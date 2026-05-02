'use client'

import { useState, useEffect, useRef } from 'react'

type HoverState = 'default' | 'link' | 'image'

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [hoverState, setHoverState] = useState<HoverState>('default')

  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window || window.matchMedia('(hover: none)').matches
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }

      raf.current = requestAnimationFrame(tick)
    }

    raf.current = requestAnimationFrame(tick)

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      const el = e.target as Element
      const isLink = !!el.closest('a, button, [role="button"]')
      const isImg = !isLink && !!el.closest('img')
      setIsVisible(true)
      setHoverState(isLink ? 'link' : isImg ? 'image' : 'default')
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  if (isTouchDevice) return null

  const ringSize = hoverState === 'link' ? 36 : hoverState === 'image' ? 24 : 28
  const ringOpacity = hoverState === 'link' ? 0.9 : hoverState === 'image' ? 0.2 : 0.4
  const dotOpacity = hoverState === 'link' ? 0 : 0.7

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: '#1A1A1A',
          opacity: isVisible ? dotOpacity : 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'opacity 0.3s ease-out',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: '1px solid #1A1A1A',
          backgroundColor: hoverState === 'link' ? '#1A1A1A' : 'transparent',
          opacity: isVisible ? ringOpacity : 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transition:
            'width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out, background-color 0.3s ease-out',
          willChange: 'transform',
        }}
      />
    </>
  )
}
