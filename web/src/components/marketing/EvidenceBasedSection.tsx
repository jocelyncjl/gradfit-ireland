import {ShieldCheck} from 'lucide-react'

export function EvidenceBasedSection() {
    return (
        <section className="px-5 py-10 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl border-y border-slate-200/70 py-10 px-4 sm:px-12 sm:py-16">
                <div className="grid grid-cols-[120px_1fr] items-center gap-15">
                    <div className='flex h-26 w-26 items-center justify-center bg-[#eef8e7] text-green-700 sm:h-30 sm:w-30'>
                        <ShieldCheck
                            aria-hidden="true"
                            className="h-18 w-18 stroke-[2.2] sm:h-20 sm:w-20"
                        />
                    </div>

                    <div>
                        <h2 className='text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl'>
                            Evidence-based by design
                        </h2>

                        <div className="mt-6 space-y-3 text-base font-medium leading-relaxed text-slate-600 sm:text-xl">
                            <p>No fake experience. No invented skills.</p>
                            <p>No legal visa advice.</p>
                            <p>
                                Only suggestions based on your real CV, projects, and job description.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}