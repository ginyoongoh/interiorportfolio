import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-dm-mono text-sm tracking-[0.15em] font-normal uppercase hover:text-muted transition-colors"
        >
          GIN YOONG OH
        </Link>
        <div className="flex items-center text-sm">
          <Link href="/works" className="hover:text-muted transition-colors">
            Works
          </Link>
          <span className="mx-3 text-muted select-none">·</span>
          <Link href="/about" className="hover:text-muted transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
