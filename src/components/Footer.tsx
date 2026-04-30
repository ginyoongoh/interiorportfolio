export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:ogy00311@gmail.com"
              className="hover:underline transition-colors"
            >
              ogy00311@gmail.com
            </a>
            <span className="text-muted text-sm">Phone: (857) 468-8077</span>
          </div>
          <div className="text-sm">
            <a
              href="https://www.linkedin.com/in/gin-yoong-oh-187589347"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted font-mono">© 2026 Gin Yoong Oh</p>
      </div>
    </footer>
  );
}
