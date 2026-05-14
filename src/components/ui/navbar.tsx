"use client"

import * as React from "react"
import { Archive, FileText, Menu, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

const LINKS = [
  {
    icon: FileText,
    title: "Pages",
    href: "#",
  },
  {
    icon: User,
    title: "Account",
    href: "#",
  },
  {
    icon: Archive,
    title: "Blocks",
    href: "#",
  },
  {
    icon: Archive,
    title: "Docs",
    href: "#",
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
        <a href="#" className="mr-4 block py-1 text-lg font-bold text-foreground">
          AutoML Platform
        </a>
        <Separator
          orientation="vertical"
          className="mr-2 ml-1 hidden h-5 lg:block bg-border"
        />
        <div className="hidden lg:block ml-4">
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
