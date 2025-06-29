export const FooterComponent = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 text-center shadow-inner">
            <p className="text-sm">© {currentYear} Ricardo Alustiza. Todos los derechos reservados.</p>
        </footer>
  );
}