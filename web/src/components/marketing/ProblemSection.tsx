type ProblemItem = {
    number: string;
    text: string;
    highlight?: string;
};

const problems: ProblemItem[] = [
    {
        number: "01",
        text: "Is this graduate role actually right?",
        highlight: "right",
    },
    {
        number: "02",
        text: "Does my CV prove the required skills?",
        highlight: "skills",
    },
    {
        number: "03",
        text: "Which project should I show?",
        highlight: "project",
    },
];


export function ProblemSection() {
    return (
        <section className="border-t border-slate-200/60 bg-[#fbfbf8] px-10 py-10 sm:px-16 sm:py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-xl font-bold text-slate-950 sm:text-2xl">
                    Stop guessing which roles are worth applying for.
                </h2>

                <div className="mt-10 grid grid-cols-1 divide-y divide-slate-100/70 border-y border-slate-200/70 md:grid-cols-3 md:divide-x md:divide-y-0">
                    {problems.map((problem) => (
                        <div
                            key={problem.number}
                            className="flex flex-col gap-5 py-6 px-4 md:px-12 md:py-12 sm:gap-8"
                        >
                            <span className="text-2xl font-bold text-green-700 sm:text-3xl">
                                {problem.number}
                            </span>

                            <p className="max-w-xs text-lg font-bold leading-snug tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
                                {renderHighlightedText(problem.text, problem.highlight)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function renderHighlightedText(text: string, highlight?: string) {
    if (!highlight || !text.includes(highlight)) {
        return text;
    }

    const [before, after] = text.split(highlight);

    return (
        <>
            {before}
            <span className="text-green-700">{highlight}</span>
            {after}
        </>
    );
}


