type ProcessStep = {
    number: string;
    title: string;
};

const processSteps: ProcessStep[] = [
    {
        number: "01",
        title: "Add your CV",
    },
    {
        number: "02",
        title: "Add project evidence",
    },
    {
        number: "03",
        title: "Paste JD",
    },
    {
        number: "04",
        title: "Get your fit report",
    },
];

export function ProcessSection() {
    return (
        <section
            id="how-it-works"
            className="bg-[#fbfbf8] px-5 py-15 lg:px-16"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-12">
                <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700 sm:text-sm">
                    Simple process. Better applications.
                </p>

                <div className="mt-8 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-3 sm:gap-6 sm:mt-16 lg:gap-10">
                    {processSteps.map((step, index) => (
                        <div key={step.number} className="contents">
                            <div className="flex flex-col items-center gap-6">
                                <span className="text-2xl font-bold tracking-tight text-green-700 sm:text-4xl lg:text-5xl">
                                    {step.number}
                                </span>

                                <h3 className="max-w-40 text-sm text-center font-bold leading-snug tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
                                    {step.title}
                                </h3>
                            </div>

                            {index < processSteps.length - 1 && (
                                <div className="pt-3 text-xl font-medium text-slate-400 sm:pt-2 sm:text-2xl lg:pt-3 lg:text-3xl">
                                    ➜
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}