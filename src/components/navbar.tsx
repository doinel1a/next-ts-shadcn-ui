import React from 'react';

import dynamic from 'next/dynamic';

import { Skeleton } from './ui/skeleton';

const ThemeToggle = dynamic(() => import('./ui/theme-toggle'), {
  loading: () => <Skeleton className='h-10 w-10 rounded-md' />
});

export default function Navbar() {
  return (
    <header className='border-border flex h-16 w-full items-center justify-between border-b px-5'>
      <span className='text-lg font-black'>Template</span>

      <div className='pr-20'>
        <ThemeToggle />
      </div>
    </header>
  );
}
