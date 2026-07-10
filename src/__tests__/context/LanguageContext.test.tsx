import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { type ReactNode } from 'react';
import { LanguageProvider, useLanguage } from '../../context/LanguageContext';

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('el idioma por defecto es español', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('es');
  });

  it('carga el idioma guardado en localStorage', () => {
    localStorage.setItem('language', 'en');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('en');
  });

  it('setLanguage cambia el idioma a inglés', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    act(() => {
      result.current.setLanguage('en');
    });
    expect(result.current.language).toBe('en');
    expect(localStorage.getItem('language')).toBe('en');
  });

  it('setLanguage cambia el idioma a español', () => {
    localStorage.setItem('language', 'en');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    act(() => {
      result.current.setLanguage('es');
    });
    expect(result.current.language).toBe('es');
    expect(localStorage.getItem('language')).toBe('es');
  });

  it('t.nav.about es correcto en español', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.t.nav.about).toBe('Sobre mí');
  });

  it('t.nav.about es correcto en inglés', () => {
    localStorage.setItem('language', 'en');
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.t.nav.about).toBe('About');
  });

  it('las traducciones cambian al cambiar de idioma', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.t.projects.featured).toBe('Destacado');
    act(() => {
      result.current.setLanguage('en');
    });
    expect(result.current.t.projects.featured).toBe('Featured');
  });

  it('useLanguage lanza error fuera del provider', () => {
    expect(() => renderHook(() => useLanguage())).toThrow(
      'useLanguage must be used within a LanguageProvider',
    );
  });
});
