import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTheme } from '../../hooks/useTheme';

const mockMatchMedia = (matches: boolean) => {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
};

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    mockMatchMedia(false);
  });

  it('inicia con tema claro si no hay preferencia guardada', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
  });

  it('carga el tema guardado en localStorage', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
  });

  it('toggleTheme cambia de light a dark', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggleTheme cambia de dark a light', () => {
    localStorage.setItem('theme', 'dark');
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('respeta prefers-color-scheme dark si no hay tema guardado', () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
  });
});

