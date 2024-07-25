import { render } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { theme } from '../theme';
import { ThemeProvider } from '@emotion/react';

export function formatNumber(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

function wrapper({ children }: PropsWithChildren): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export function renderWithWrappers(ui: ReactElement) {
  return render(ui, { wrapper });
}
