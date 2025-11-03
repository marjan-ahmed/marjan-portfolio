"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // defaultTheme: 'system' ensures the site uses the OS preference by default
  // attribute: 'class' makes next-themes toggle the `class` on <html> (works with Tailwind's dark variant)
  return (
    <NextThemesProvider defaultTheme="system" attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  )
}