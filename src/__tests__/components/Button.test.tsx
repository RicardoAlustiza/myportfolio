import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../components/ui/Button';

describe('Button', () => {
  it('renderiza sus hijos', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('dispara onClick cuando se hace clic', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Enviar</Button>);
    fireEvent.click(screen.getByText('Enviar'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('aplica clases de variante primary por defecto', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByText('Primary');
    expect(btn.className).toContain('bg-blue-600');
  });

  it('aplica clases de variante secondary', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const btn = screen.getByText('Secondary');
    expect(btn.className).toContain('border-blue-600');
  });

  it('está deshabilitado cuando disabled=true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  it('aplica className adicional', () => {
    render(<Button className="w-full">Full</Button>);
    expect(screen.getByText('Full').className).toContain('w-full');
  });
});
