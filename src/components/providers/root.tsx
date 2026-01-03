import type { PropsWithChildren } from 'react';

import TanstackQueryProvider from './client/tanstack-query';
import ThemeProvider from './client/theme';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: Readonly<TRootProvider>) {
  return (
    <ThemeProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </ThemeProvider>
  );
}
