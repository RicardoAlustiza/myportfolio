import { type ReactNode } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext';

const AllProviders = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
