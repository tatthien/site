'use client'

import { DeployLink } from '@/lib/deploy'

import { motion } from 'framer-motion'
import Link from 'next/link'

export const DeployButton = () => {
  console.log(DeployLink)
  return (
    <motion.div
      initial={{
        opacity: 0,
        bottom: -32,
      }}
      animate={{
        opacity: 1,
        bottom: 24,
      }}
      exit={{
        opacity: 0,
        bottom: -32,
      }}
      transition={{
        ease: [0.19, 1, 0.22, 1],
        duration: 0.4,
        delay: 1,
      }}
      className="-translate-x-1/2 fixed left-1/2 transform text-small"
    >
      <Link href={DeployLink}>
        <motion.div
          whileHover={{
            scale: 0.98,
            opacity: 0.8,
          }}
          transition={{
            ease: [0.19, 1, 0.22, 1],
            duration: 0.4,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="103" height="32" fill="none">
            <rect width="103" height="32" fill="#1A1A1A" rx="6" />
            <rect width="102" height="31" x=".5" y=".5" stroke="#fff" strokeOpacity=".14" rx="5.5" />
            <g clip-path="url(#a)">
              <path fill="#EDEDED" fillRule="evenodd" d="m16 10.75 6 10.5H10l6-10.5Z" clipRule="evenodd" />
            </g>
            <path stroke="#fff" strokeOpacity=".14" d="M31.5 1v30" />
            <path
              fill="#EDEDED"
              d="M47.4 11.06c3.1 0 4.85 1.8 4.85 4.98 0 3.18-1.7 4.96-4.77 4.96h-3.26v-9.94h3.18Zm-1.7 8.57h1.7c2.22 0 3.31-1.18 3.31-3.59 0-2.43-1.09-3.6-3.31-3.6h-1.7v7.19Zm7.83-2.34c0-2.37 1.38-3.88 3.51-3.88 1.74 0 3.25 1.15 3.33 3.8l.02.5h-5.34c.12 1.39.82 2.2 2 2.2.73 0 1.4-.42 1.7-1.14l1.53.12a3.3 3.3 0 0 1-3.24 2.28c-2.13 0-3.51-1.51-3.51-3.88Zm1.55-.7h3.77c-.2-1.43-.97-1.92-1.8-1.92-1.1 0-1.79.72-1.97 1.92Zm6.98 6.51v-9.52h1.36l.04 1.08c.4-.8 1.17-1.25 2.25-1.25 2.19 0 3.2 1.8 3.2 3.88 0 2.07-1.01 3.88-3.2 3.88-1.02 0-1.78-.4-2.2-1.18v3.11h-1.45Zm1.31-5.81c0 1.33.6 2.6 2 2.6 1.42 0 2-1.26 2-2.6 0-1.33-.58-2.6-2-2.6-1.4 0-2 1.27-2 2.6Zm7.36-6.23h1.45v8.25c0 .33.16.49.48.49h.62V21h-.93c-.98 0-1.62-.63-1.62-1.62v-8.32Zm7.1 10.1c-2.13 0-3.52-1.5-3.52-3.87s1.39-3.88 3.51-3.88c2.13 0 3.52 1.51 3.52 3.88s-1.39 3.88-3.52 3.88Zm-2-3.87c0 1.62.72 2.6 2 2.6 1.27 0 2-.98 2-2.6s-.73-2.6-2-2.6c-1.28 0-2 .98-2 2.6Zm6.07-3.71h1.49l2.11 5.88 2.05-5.88h1.47l-2.97 8.29c-.31.85-.87 1.23-1.78 1.23h-1v-1.19h.8c.38 0 .6-.14.73-.49l.25-.63h-.46l-2.69-7.21Z"
            />
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h12v12H0z" fillOpacity="1" transform="translate(10 10)" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      </Link>
    </motion.div>
  )
}
