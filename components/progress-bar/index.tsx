'use client'

import { useScroll, motion } from 'motion/react'

export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return <motion.div style={{ scaleX: scrollYProgress }} className='fixed top-0 left-0 right-0 h-1.5 z-[9999] bg-gradient-to-r from-pink-8 to-pink-9 origin-top-left' />
}
