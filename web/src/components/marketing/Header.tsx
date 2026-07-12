import Link from "next/link";

const navItems = [
    {label: "Product", href: "#product"},
    {label: "Features", href: "#Features"},
    {label: "How it works", href: "#how-it-works"},
    {label: "Pricing", href: "#pricing"},
    {label: "Resources", href: "#resources"},
];

export function Header() {
    return (
        <header className="mx-auto flex w-full items-center justify-between px-5 py-5 sm:px-16">
            <Link
                href ="/"
                className="shrink-0 whitespace-nowrap text-sm font-bold tracking-tight text-slate-950 sm:text-lg"
            >
                Gradfit <span className="text-green-600">Ireland</span>
            </Link>

            <nav className="hidden items-center gap-10 text-xs font-semibold text-slate-700 lg:flex sm:text-base">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="transition hover:text-slate-950"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                <Link
                    href = "/login"
                    className="hidden text-xs font-semibold text-slate-800 transition hover:text-slate-950 md:inline sm:text-base"
                >
                    Sign in
                </Link>

                <Link
                    href="/dashboard"
                    className="shrink-0 whitespace-nowrap rounded-full bg-green-900 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-green-900 sm:px-5 sm:text-base"
                >
                    Start for  free
                </Link>
            
            </div>
        </header>
    );
}