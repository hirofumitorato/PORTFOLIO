export const metadata = {
    title: "Profile | Hirofumi Torato",
    description: "Hirofumi Torato's professional background and work experience.",
};

export default function Profile() {
    const experiences = [
        {
            id: 1,
            period: "2020 - Present",
            role: "Lead Backend Engineer / Tech Lead",
            company: "Tech Solutions Inc.",
            details: [
                "アジャイル開発手法（スクラム）を導入し、開発チームの生産性を20%向上。",
                "AWS IoT Core, Lambda, DynamoDBを用いた大規模なリアルタイムデータ処理基盤の構築を牽引。",
                "要件定義からアーキテクチャ設計、実装、テスト、運用保守までフルサイクルで担当。",
                "GoとTypeScriptを用いたマイクロサービス化を推進。"
            ]
        },
        {
            id: 2,
            period: "2016 - 2020",
            role: "Backend Engineer",
            company: "Web Services Co., Ltd.",
            details: [
                "Node.jsとRDBMSを用いた自社SaaSプロダクトの開発・運用保守。",
                "CI/CDパイプライン（GitHub Actions, Docker）の構築によるデプロイの自動化。",
                "レガシーシステムのモダン化（リファクタリング、Rustによる一部パフォーマンス改善）。"
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-white border-b border-gray-800 pb-4">
                プロフィール
            </h1>

            <section className="mb-16">
                <h2 className="mb-6 text-2xl font-bold text-gray-200">Hirofumi Torato</h2>
                <div className="prose prose-invert max-w-none text-gray-400">
                    <p className="leading-relaxed">
                        長年のバックエンド開発経験と、クラウドインフラ（特にAWS）における深い知見を持つフルスタックエンジニアです。
                        アジャイル開発の実践を通じて、変化に柔軟に対応しながら高い品質のソフトウェアを提供することに注力してきました。
                        近年は、技術的な課題解決にとどまらず、AI技術（Google AntigravityやClaude Codeなど）を積極的にワークフローに取り入れ、
                        圧倒的な開発スピードと品質を両立させる「AI顧問」としての活動に力を入れています。
                    </p>
                </div>
            </section>

            <section>
                <h2 className="mb-8 text-2xl font-bold text-gray-200 flex items-center gap-3">
                    <span className="h-8 w-1 rounded-full bg-blue-500 block"></span>
                    職務経歴
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900/80 p-6 rounded-xl border border-gray-800 shadow-xl backdrop-blur-sm">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                                    <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">{exp.period}</span>
                                </div>
                                <div className="text-sm text-gray-400 font-medium mb-4">{exp.company}</div>
                                <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
