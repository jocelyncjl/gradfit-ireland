import {FitScorePreviewCard} from "./FitScorePreviewCard";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 sm:px-16 lg:pb-28">
            <div className="mx-auto flex w-full flex-col items-center text-center">
                <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-xs font-medium text-green-800 shadow-xs sm:px-4 sm:text-sm">
                    <span>🇮🇪</span>
                    <span className="truncate">
                        Built for Ireland-based early-career tech candidates 
                    </span>
                </div>

                <h1 className="anton-regular max-w-7xl text-[2.75rem] font-black scale-y-80 uppercase text-slate-950 sm:text-6xl md:text-7xl lg:text-9xl">
                    Know what to apply for.
                    <span className="mt-3 block text-[#a0be73]">Prove why you fit.</span>
                </h1>

                <div className="mt-6 h-1.5 w-16 rounded-full bg-[#a0be73] sm:mt-7"/>

                <p className="mt-6 max-w-2xl text-base font-medium text-slate-500 sm:text-2xl">
                    One workspace for Ireland tech graduates.
                </p>

                <div className="mt-8 flex w-full justify-center">
                    <a
                        href="/dashboard"
                        className="inline-flex max-w-2xs items-center justify-center gap-4 rounded-xl bg-green-900 px-6 py-4 text-base font-bold text-white shadow-sm hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-md"
                    >
                        Start your fit analysis

                        <span aria-hidden="true" className="text-lg leading-none">
                            ➔
                        </span>
                    </a>
                </div> 
            </div>

            <div className="relative mt-12 w-full overflow-hidden pb-20 sm:mt-14 sm:pb-24 lg:pb-28">
                <div className="absolute left-1/2 top-20 h-50 w-[34rem] -translate-x-1/2 rounded-t-full border border-lime-100/60 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.75),rgba(194,225,143,0.7)_38%,rgba(112,173,70,0.35)_70%,rgba(112,173,70,0)_100%)] shadow-[inset_0_20px_60px_rgba(255,255,255,0.65)] sm:top-24 sm:h-80 sm:w-[58rem] lg:top-28 lg:h-96 lg:w-[72rem]" />
                <div className="mx-auto w-full max-w-[360px] scale-[0.92] sm:max-w-2xl sm:scale-100 lg:max-w-3xl">
                    <FitScorePreviewCard/>
                </div>
            </div>
        </section>

    )
}