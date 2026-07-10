import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle, className, ...props }: SectionHeadingProps) => (
  <div className={cn('mb-12', className)} {...props}>
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">{subtitle}</p>
    )}
    <div className="mt-4 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-400" />
  </div>
);
