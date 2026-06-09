export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-16 py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-text-muted text-xs tracking-wider">
          © {new Date().getFullYear()} SHIZE YU / HuoHuoOvO
        </p>
        <p className="text-text-muted text-xs">
          Creative Technologist — Game Design · AI Art · Visual Culture
        </p>
      </div>
    </footer>
  );
}
