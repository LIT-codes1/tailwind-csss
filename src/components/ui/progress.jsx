"use client"
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

function Progress({ className = "", value = 0, ...props }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={`bg-blue-200 relative h-2 w-full overflow-hidden rounded-full ${className}`}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-blue-600 h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
