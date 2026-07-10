import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type BadgeVariant = 'default' | 'blue' | 'indigo';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  default:
    'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  blue:
    'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  indigo:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
};

export const Badge = ({ variant = 'blue', className, children, ...props }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
      VARIANT_STYLES[variant],
      className,
    )}
    {...props}
  >
    {children}
  </span>
);
