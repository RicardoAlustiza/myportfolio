import '@testing-library/jest-dom';
import { vi } from 'vitest';

// jsdom no implementa window.matchMedia — definir un stub por defecto
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
