import { describe, it, expect } from 'vitest';
import { cn } from '../../lib/utils';

describe('cn', () => {
  it('concatena clases válidas', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('filtra valores falsy', () => {
    expect(cn('foo', undefined, null, false, 'bar')).toBe('foo bar');
  });

  it('devuelve cadena vacía si no hay argumentos válidos', () => {
    expect(cn(undefined, null, false)).toBe('');
  });

  it('maneja una sola clase', () => {
    expect(cn('only')).toBe('only');
  });

  it('maneja clases con espacios extra correctamente', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });
});
