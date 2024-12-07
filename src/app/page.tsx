import React from 'react';

import Counter from '@/components/counter';

export default function Home() {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <Counter />
    </main>
  );
}
