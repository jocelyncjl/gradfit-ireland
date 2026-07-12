type ScoreBreakdownItem = {
    label: string;
    value: number;
};

const scoreBreakdown: ScoreBreakdownItem[] = [
    {label: "CV-JD Match", value: 82},
    {label: "Evidence Strength", value: 74},
    {label: "Role Level Fit", value: 88},
];

const matchedEvidence: string[] = [
    "AWS serverless project",
    "Python backend API",
    "PostgreSQL coursework",
];

const missingSkills: string[] = ["Docker", "CI/CD", "Kubernetes"];

export function FitScorePreviewCard() {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 text-left shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur ">
            <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                <div className="min-w-0 p-4 sm:p-6 lg:p-8">
                    <div className="mb-5 flex items-center justify-between gap-3 sm:mb-7 sm:items-center sm:gap-4">
                        <h3 className="whitespace-nowrap text-[8px] font-bold leading-tight text-slate-950 md:text-[11px] ">
                              Application Quality Score
                        </h3>
                        <span className="shrink-0 rounded-full bg-lime-100 px-2 py-1 text-[8px] font-semibold text-green-800 sm:text-[11px] sm:px-3">
                            Tailor First
                        </span>
                    </div>

                    <div className="flex items-end gap-1.5 sm:gap-2">
                        <span className="text-2xl font-bold leading-none text-green-800 sm:text-4xl">
                            78
                        </span>
                        <span className="text-md font-semibold text-slate-500 sm:text-2xl">
                            /100
                        </span>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 sm:mt-5 sm:h-3">
                        <div className="h-full w-[78%] rounded-full bg-green-800"/>
                    </div>

                    <div className="mt-5 sm:mt-7">
                        <p className="text-[9px] font-medium text-slate-500 sm:text-[11px]">
                            Score breakdown
                        </p>

                        <div className="mt-2 divide-y divide-slate-200 sm:mt-3">
                            {scoreBreakdown.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center justify-between py-1 text-[8px] sm:py-2 sm:text-[11px]"
                                >
                                    <span className="text-slate-700">{item.label}</span>
                                    <span className="font-bold text-green-800">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="min-w-0 border-l border-slate-100 p-5 sm:p-10 lg:p-12">
                    <h3 className="text-[8px] font-bold leading-tight text-slate-950 sm:text-[11px]">
                        Matched Evidence
                    </h3>

                    <ul className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
                        {matchedEvidence.map((item) => 
                            <li
                                key={item}
                                className="flex items-start gap-2 text-[8px] sm:items-center sm:gap-3 sm:text-[12px]"
                            >
                                <span className="flex items-center justify-center h-5 w-5 shrink-0 rounded-full bg-green-50 text-[9px] font-bold text-green-700 sm:h-6 sm:w-6 sm:text-xs">
                                    ✓
                                </span>
                                <span className="leading-snug text-slate-700">{item}</span>
                            </li>
                        )}
                    </ul>

                    <div className="mt-9 sm:mt-10">
                        <h3 className="text-[8px] font-bold text-slate-950 sm:text-[11px]">
                            Missing Skills
                        </h3>

                        <div className="mt-3 flex gap-1 sm:mt-4 sm:gap-2">
                            {missingSkills.map((skill) => (
                                <span 
                                    key={skill}
                                    className="rounded-full bg-slate-100 px-1 py-1 text-[8px] font-medium text-slate-700 sm:px-3 sm:py-1.5 sm:text-[10px]"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


