"use client"

import * as React from "react"
import { Layers, Smartphone, Scale, UserCircle, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

const LINKS = [
  {
    icon: Layers,
    title: "Platform Sections",
    href: "#platform-sections",
  },
  {
    icon: Smartphone,
    title: "Device",
    href: "#device-experience",
  },
  {
    icon: Scale,
    title: "Comparison Table",
    href: "#comparison",
  },
  {
    icon: UserCircle,
    title: "About Me",
    href: "#about-me",
  },
]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <a
            href={href}
            className="hover:text-primary flex items-center gap-x-2 p-1 text-sm transition-colors text-muted-foreground"
          >
            <Icon className="h-4 w-4" />
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-border px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center">
        <a href="#" className="flex items-center gap-3 py-1 text-xl font-bold text-foreground tracking-tight">
          <img src="/images/NodeForge_Logo.png" alt="NodeForge Logo" className="h-8 w-auto object-contain" />
          NodeForge
        </a>
        <Separator
          orientation="vertical"
          className="mx-6 hidden h-6 lg:block bg-border/50"
        />
        <div className="hidden lg:block">
          <NavList />
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto lg:hidden"
        >
          {openNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      <Collapsible open={openNav}>
        <CollapsibleContent className="max-w-7xl mx-auto pb-2">
          <NavList />
        </CollapsibleContent>
      </Collapsible>
    </nav>
  )
}
