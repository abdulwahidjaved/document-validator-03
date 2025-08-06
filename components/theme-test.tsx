"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeTest() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-card border rounded-lg shadow-lg z-50">
      <p className="text-sm mb-2">
        Current theme: <strong>{theme}</strong>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setTheme("light")}
          className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded"
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded"
        >
          Dark
        </button>
        <button
          onClick={() => setTheme("system")}
          className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded"
        >
          System
        </button>
      </div>
    </div>
  )
}
