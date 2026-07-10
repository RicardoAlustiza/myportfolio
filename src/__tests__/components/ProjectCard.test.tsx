import { describe, it, expect } from 'vitest';
import { render, screen } from '../test-utils';
import { ProjectCard } from '../../components/ProjectCard';
import type { Project } from '../../types';

const BASE_PROJECT: Project = {
  id: '1',
  title: 'Test Project',
  description: 'A test project description.',
  image: '/test-image.jpg',
  tags: ['React', 'TypeScript'],
  featured: false,
};

describe('ProjectCard', () => {
  it('renderiza el título y descripción', () => {
    render(<ProjectCard {...BASE_PROJECT} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description.')).toBeInTheDocument();
  });

  it('renderiza las etiquetas de tecnología', () => {
    render(<ProjectCard {...BASE_PROJECT} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('muestra el enlace de demo cuando se provee link', () => {
    render(<ProjectCard {...BASE_PROJECT} link="https://demo.com" />);
    const demoLink = screen.getByText('Demo');
    expect(demoLink.closest('a')).toHaveAttribute('href', 'https://demo.com');
  });

  it('no muestra el enlace de demo cuando no hay link', () => {
    render(<ProjectCard {...BASE_PROJECT} />);
    expect(screen.queryByText('Demo')).not.toBeInTheDocument();
  });

  it('muestra el enlace de GitHub cuando se provee githubLink', () => {
    render(<ProjectCard {...BASE_PROJECT} githubLink="https://github.com/test" />);
    const codeLink = screen.getByText('Código');
    expect(codeLink.closest('a')).toHaveAttribute('href', 'https://github.com/test');
  });

  it('muestra badge "Destacado" cuando featured es true', () => {
    render(<ProjectCard {...BASE_PROJECT} featured />);
    expect(screen.getByText('Destacado')).toBeInTheDocument();
  });

  it('no muestra badge "Destacado" cuando featured es false', () => {
    render(<ProjectCard {...BASE_PROJECT} />);
    expect(screen.queryByText('Destacado')).not.toBeInTheDocument();
  });

  it('renderiza la imagen con el alt correcto', () => {
    render(<ProjectCard {...BASE_PROJECT} />);
    const img = screen.getByAltText('Test Project');
    expect(img).toHaveAttribute('src', '/test-image.jpg');
  });
});
