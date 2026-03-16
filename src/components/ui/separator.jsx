"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

function Separator({
  className = "",
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={`bg-gray-300 shrink-0 
        ${orientation === "horizontal" ? "h-px w-full" : "h-full w-px"} 
        ${className}`}
      {...props}
    />
  )
}

export { Separator }
