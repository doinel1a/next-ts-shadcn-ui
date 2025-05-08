/* eslint-disable unicorn/prevent-abbreviations */

import React from 'react';

import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

export { Skeleton };
