// import {FitScorePreviewCard} from "./FitScorePreviewCard";

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
=
                <h1 className="anton-regular max-w-7xl text-[2.75rem] font-black scale-y-80 uppercase text-slate-950 sm:text-6xl md:text-7xl lg:text-8xl">
                    Know what to apply for.
                    <span className="mt-3 block text-lime-500 ">Prove why you fit.</span>
                </h1>
            </div>
        </section>

    )
}