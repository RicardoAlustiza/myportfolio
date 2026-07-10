import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useContactForm } from '../../hooks/useContactForm';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    functions: {
      invoke: vi.fn(),
    },
  },
}));

import { supabase } from '../../lib/supabase';

const mockInvoke = vi.mocked(supabase.functions.invoke);

describe('useContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('estado inicial es idle', () => {
    const { result } = renderHook(() => useContactForm());
    expect(result.current.status).toBe('idle');
  });

  it('pasa a loading durante el envío', async () => {
    mockInvoke.mockResolvedValueOnce({ data: null, error: null });

    const { result } = renderHook(() => useContactForm());
    const form = document.createElement('form');
    form.reset = vi.fn();

    const mockEvent = {
      preventDefault: vi.fn(),
      currentTarget: form,
    } as unknown as React.FormEvent<HTMLFormElement>;

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(result.current.status).toBe('success');
  });

  it('establece status a error cuando supabase falla', async () => {
    mockInvoke.mockResolvedValueOnce({
      data: null,
      error: new Error('Network error'),
    });

    const { result } = renderHook(() => useContactForm());
    const form = document.createElement('form');
    form.reset = vi.fn();

    const mockEvent = {
      preventDefault: vi.fn(),
      currentTarget: form,
    } as unknown as React.FormEvent<HTMLFormElement>;

    await act(async () => {
      await result.current.handleSubmit(mockEvent);
    });

    expect(result.current.status).toBe('error');
  });

  it('reset vuelve el status a idle', async () => {
    mockInvoke.mockResolvedValueOnce({
      data: null,
      error: new Error('fail'),
    });

    const { result } = renderHook(() => useContactForm());
    const form = document.createElement('form');
    form.reset = vi.fn();

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
        currentTarget: form,
      } as unknown as React.FormEvent<HTMLFormElement>);
    });

    expect(result.current.status).toBe('error');

    act(() => {
      result.current.reset();
    });

    expect(result.current.status).toBe('idle');
  });
});
