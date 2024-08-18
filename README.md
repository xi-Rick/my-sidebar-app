# Starter Template with Aceternity UI Sidebar in Next.js 14

## Overview

This starter template demonstrates how to build a functional Next.js 14 application featuring Aceternity UI's Sidebar component. It includes dark mode support and is mobile responsive, making it ideal for various applications.

## Features

- **Expandable Sidebar:** The sidebar expands on hover for desktop and is mobile-responsive.

- **Dark Mode Support:** Switches between light and dark themes.

- **Mobile Responsiveness:** Adapts to various screen sizes.

## Installation

### CLI

1. Clone the repository:

```bash
git clone https://github.com/xi-Rick/my-sidebar-app.git
cd my-sidebar-app
```

2. Install the dependencies:

```bash
npm install
```

### Manual

1. Install the required packages:

```bash
npm install framer-motion clsx tailwind-merge @tabler/icons-react
```

2. Add utility functions:

- Create a file `lib/utils.ts` and add the following code:

```typescript
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

3. Add the Sidebar component:

- Create a file `components/sidebar.tsx` and include the code from the source code section below.

## Usage

1. Import and use the `SidebarDemo` component in your application:

```typescript
import { SidebarDemo } from "./components/SidebarDemo";

function App() {
  return <SidebarDemo />;
}

export default App;
```

2. Customize the sidebar links and styles according to your needs.

## Source Code

### Sidebar Component

```typescript
"use client";
import {
  IconBrandTabler,
  IconHome,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";

interface LinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const links: LinkItem[] = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
    {
      label: "Settings",
      href: "/settings",
      icon: (
        <IconSettings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='h-screen w-screen flex overflow-hidden bg-gray-100 dark:bg-neutral-900'>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className='flex flex-col h-full justify-between'>
          <div className='flex flex-col flex-1 overflow-y-auto'>
            {open ? <Logo /> : <LogoIcon />}
            <div className='mt-8 flex flex-col gap-2'>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className='mt-4 flex items-center gap-2 px-4 py-2 border-t border-neutral-200 dark:border-neutral-700'>
            <Image
              src='/images/me.png'
              className='h-8 w-8 rounded-full'
              width={32}
              height={32}
              alt='Avatar'
            />
            {open && (
              <div className='text-sm text-neutral-700 dark:text-neutral-300'>
                Dana Davis
              </div>
            )}
          </div>
          {open && (
            <div className='mt-4 px-4 text-sm text-neutral-500 dark:text-neutral-400'>
              Hosted on Vercel
              <br />
              Made with Aceternity UI
            </div>
          )}
          <ThemeToggle />
        </SidebarBody>
      </Sidebar>
      <main className='flex-1 overflow-auto py-2 sm:py-4 md:py-8'>
        <div className='w-full px-2 sm:px-4 md:px-8'>{children}</div>
      </main>
    </div>
  );
}

export const Logo = () => (
  <Link
    href='/'
    className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'>
    <div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='font-medium text-black dark:text-white whitespace-pre'>
      My Sidebar App Demo
    </motion.span>
  </Link>
);

export const LogoIcon = () => (
  <Link
    href='/'
    className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'>
    <div className='h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
  </Link>
);
```

### Sidebar Component Source Code

For the `components/ui/sidebar.tsx` file, refer to the source code provided repo.

---

Feel free to customize and extend the template according to your project's requirements. If you have any issues or need further assistance, please open an issue or reach out.
