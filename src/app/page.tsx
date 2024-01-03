import React from 'react';

import GithubCorner from '@/components/github-corner';

export default function Home() {
  return (
    <main className='flex h-full w-full flex-col items-center justify-center'>
      <GithubCorner
        title='Get started on GitHub'
        url='https://github.com/doinel1a/next-ts-shadcn-ui'
      />
      <h1>Hello, World!</h1>
    </main>
  );
}
