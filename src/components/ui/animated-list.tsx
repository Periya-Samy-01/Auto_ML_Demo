"use client"

import React, {
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { AnimatePresence, motion, type MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearInterval(interval)
    }, [delay])

    const itemsToShow = useMemo(() => {
      const maxItems = 6 // Show at most 6 items at a time to prevent DOM bloat
      const count = Math.min(index + 1, maxItems)
      const result = Array.from({ length: count }, (_, i) => {
        const globalIndex = index - i
        const localIndex = globalIndex % childrenArray.length
        const safeIndex = localIndex < 0 ? localIndex + childrenArray.length : localIndex
        const item = childrenArray[safeIndex] as React.ReactElement
        // We must give each item a unique key based on its global position
        return React.cloneElement(item, { key: `anim-item-${globalIndex}` })
      })
      return result
    }, [index, childrenArray])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
