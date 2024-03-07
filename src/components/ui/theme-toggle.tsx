'use client';

import * as React from 'react';

import { Laptop, MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-testid='theme-toggle' variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <MoonStar className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-testid='theme-dropdown-content' align='end'>
        <DropdownMenuItem data-testid='theme-light' onClick={() => setTheme('light')}>
          <Sun className='mr-2 h-[1.2rem] w-[1.2rem]' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='theme-dark' onClick={() => setTheme('dark')}>
          <MoonStar className='mr-2 h-[1.2rem] w-[1.2rem]' />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem data-testid='theme-system' onClick={() => setTheme('system')}>
          <Laptop className='mr-2 h-[1.2rem] w-[1.2rem]' />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
