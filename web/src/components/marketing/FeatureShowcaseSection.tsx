type SnapshotItem = {
    label: string;
    value: string;
};

const jdSnapshot: SnapshotItem[] = [
    {label: "Role keyword", value: "DevOps"},
    {label: "Top skills", value: "Docker · CI/CD"},
    {label: "Type", value: "Remote"},
    {label: "Work mode", value: "Remote"},
    {label: "Key skills", value: "AWS"},
    {label: "Location", value: "Dublin, Ireland"},
];

const evidentItem = [
    "AWS serverless project",
    "Python backend API",
    "PostgreSQL coursework",
];

const gaps = ["Docker", "CI/CD", "Kubernetes"];

export function FeatureShowcaseSection() {
    return (
        <section
            id="feature"
            className="bg-[#F3F8EC] px-5 pb-10 sm:px-8 lg:px-16 "
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-12 py-10 sm:py-12">
                <p className="text-base font-medium text-slate-500 sm:text-lg">
                    See how GradFit works for your application
                </p>

                <div className="mt-12 grid grid-cols-1 items-center gap-10 border-b border-slate-200/70 pb-14 sm:grid-cols-2 sm:gap-16">
                    <JDAnalysisCard />

                    <FeatureCopy
                        title="Understand the role in seconds"
                        body="We extract the skills, level, work mode, and location so you know what matters."
                    />
                </div>

                <div className="grid grid-cols-1 items-center gap-10 border-b border-slate-200/70 py-14 sm:grid-cols-2 sm:gap-16">
                    <FeatureCopy
                        title="Map requirements to your evidence"
                        body="We match your cv and projects to the job and hightlight what you've proven."
                    />

                    <EvidenceMatchingCard />
                </div>

                <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-16">
                    <QualityScoreCard />
                    <FeatureCopy
                        title="Get your application quality score"
                        body="Know if you should Apply Now, Tailor First, or choose a different role."
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCopy({title, body}: {title: string; body: string}) {
    return (
        <div className="max-w-xl">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {title}
            </h2>
            <p className="mt-6 text-xl leading-8 text-slate-600 sm:text-2xl sm:leading-10">
                {body}
            </p>
        </div>
    );
}

function JDAnalysisCard() {
    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
            <div className="mb-7 flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                    JD Analysis
                </h3>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 sm:text-sm">
                    Role snapshot
                </span>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                {jdSnapshot.map((item) => (
                    <div key={item.label}>
                        <p className="text-sm font-medium text-slate-500 sm:text-base">
                            {item.label}
                        </p>

                        <div className="mt-2 flex items-center gap-3">
                            <span className="h-4 w-4 rounded-full border border-green-200 bg-green-50"/>
                            <span className="text-base font-normal text-slate-900 sm:text-lg">
                                {item.value}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

function EvidenceMatchingCard() {
    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                    Evidence Matching
                </h3>
                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                    Matched
                </span>
            </div>

            <p className="text-lg font-medium text-green-700">Matched</p>
            <ul className="mt-5 space-y-4">
                {evidentItem.map((item) => (
                    <li key={item} className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600 text-[9px] sm:text-sm">
                                ✓
                            </span>
                            <span className="text-base font-normal text-slate-900 sm:text-lg">
                                {item}
                            </span>
                        </div>

                        <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                            Strong
                        </span>
                    </li>
                ))}

            </ul>

            <div className="mt-7">
                <p className="text-lg font-medium text-slate-500">Gaps</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {gaps.map((gap) => (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                            {gap}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function QualityScoreCard() {
    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
            <div className="mb-8 flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold tracking-tight text-slate-950 sm:text-xl">
                    Application Quality Score
                </h3>
                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                    Tailor First
                </span>
            </div>

            <div className="flex items-end gap-3">
                <span className="text-6xl font-black leading-none text-green-800">
                    78
                </span>
                <span className="text-3xl font-semibold text-slate-600">
                    /100
                </span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[78%] rounded-full bg-green-800"/>
            </div>

            <div className="mt-8">
                <p className="text-lg font-medium text-slate-500">Score breakdown</p>

                <div className="mt-4 space-y-2">
                    {[
                        ["CV-JD Match",82],
                        ["Evidence Strength", 74],
                        ["Role Level Fit", 88],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            className="flex items-center justify-between pb-3 text-lg"
                        >
                            <span className="text-slate-700">{label}</span>
                            <span className="font-medium text-green-800">{value}</span>
                        </div>
                    ))
                    }
                </div>   
            </div>
        </div>
    )
}