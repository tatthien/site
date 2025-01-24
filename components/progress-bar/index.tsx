'use client'

import { motion, useScroll } from 'motion/react'

export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 right-0 left-0 z-[9999] h-1.5 origin-top-left bg-gradient-to-r from-pink-8 to-pink-9"
    />
  )
}
