import type {Metadata} from "next";
import Link from "next/link";
import {RegisterForm} from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
    title: "Create your account | Gradfit Ireland",
    description: 
        "Create your GradFit Ireland account to analyze your fit and manage applications."
}

export default function RegisterPage() {
    return (
        <div
            className="min-h-screen bg-white font-sans text-slate-950"
            style={{
                backgroundImage:
                    "radial-gradient(ellipse at bottom left, #dcfce7 0%, transparent 40%), radial-gradient(ellipse at top right, #f0fdf4 0%, transparent 40%)"
            }}
        >
            <header className="mx-auto flex w-full max-w-[1536px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-5 sm:px-8 sm:py-7 lg:px-[72px] lg:py-9">
                <Link
                    href="/"
                    className="whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl lg:text-[28px]"
                >
                    GradFit <span className="text-green-700">Ireland</span> 
                </Link>

                <nav
                    aria-label="Account navigation"
                    className="flex items-center gap-4 text-sm sm:gap-6 sm:text-base"
                >
                    <span className="hidden text-slate-500 md:inline">
                        Already have an account?
                    </span>

                    <Link
                        href="/login"
                        className="inline-flex min-h-11 items-center font-medium text-green-700 transition hover:text-green-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
                    >
                        Log in
                    </Link>
                </nav>
            </header>

            <main className="mx-auto w-full max-w-[574px] px-5 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-7">
                <div className="text-center">
                    <p className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-green-50 px-3 py-2 text-xs leading-5 text-green-800 sm:gap-3 sm:px-4 sm:text-sm">
                        <span aria-hidden="true" className="shrink-0">
                            🇮🇪
                        </span>

                        <span>
                            Built for Ireland-based early-career tech candidates
                        </span>
                    </p>

                    <h1 className="mt-7 text-3xl font-semibold leading-tight trading-tight sm:mt-10 sm:text-[44px]">
                        Create your account
                    </h1>
  
                    <p className="mt-3 text-base leading-6 text-slate-500 sm:text-xl sm:leading-7">
                        Start your fit analysis and manage your applications in one workplace.
                    </p>
                </div>

                <div className="mt-8 sm:mt-11">
                    <RegisterForm/>
                </div>
            </main>

        </div>
    )
}
