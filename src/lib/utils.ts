/**
 * Combina clases de Tailwind filtrando valores falsy.
 */
export const cn = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(' ');

/**
 * Realiza scroll suave a una sección por su id.
 */
export const scrollToSection = (href: string): void => {
  const id = href.startsWith('#') ? href.slice(1) : href;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
