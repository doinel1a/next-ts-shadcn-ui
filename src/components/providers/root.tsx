import type { PropsWithChildren } from 'react';

import TanstackQueryProvider from './client/tanstack-query';
import ThemeProvider from './client/theme';

type TRootProvider = Readonly<PropsWithChildren>;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <ThemeProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </ThemeProvider>
  );
}
