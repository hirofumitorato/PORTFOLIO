export const metadata = {
    title: "Skills | Hirofumi Torato",
    description: "Technical skills and AI tools of Hirofumi Torato.",
};

export default function Skills() {
    const codeSkills = [
        { name: "TypeScript", level: 90 },
        { name: "Go", level: 85 },
        { name: "Rust", level: 75 },
        { name: "Node.js", level: 90 },
        { name: "Gin", level: 80 },
        { name: "Actix-web", level: 70 },
    ];

    const infraSkills = [
        { name: "AWS (EC2, S3, RDS)", level: 95 },
        { name: "AWS IoT Core", level: 85 },
        { name: "AWS Lambda / API Gateway", level: 90 },
        { name: "DynamoDB", level: 85 },
        { name: "Docker / Git", level: 90 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
    ];

    const aiTools = [
        { name: "Google Antigravity", desc: "自律型AIエージェントによる高度なコーディング支援・構築" },
        { name: "Claude Code", desc: "LLMを活用した素早いプロトタイピングとコード生成" },
        { name: "Make / Zapier", desc: "ノーコード/ローコードによる業務自動化ワークフロー" },
        { name: "n8n", desc: "高度な条件分岐とAPI連携が可能なワークフロー自動化" },
    ];

    return (
        <div className="container mx-auto px-4 py-20 max-w-5xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">スキルシート</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    長年の開発経験で培った確かなバックエンド・クラウド技術に加え、
                    常に最新のAIツールを取り入れ、圧倒的なスピードと品質で価値を提供します。
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
                {/* Programming Languages & Frameworks */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6 flex items-center">
                        <span className="text-blue-600 mr-3">{"{}"}</span>
                        言語・フレームワーク
                    </h2>
                    <div className="space-y-6">
                        {codeSkills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-700">{skill.name}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Infrastructure & Cloud */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 mb-6 flex items-center">
                        <span className="text-emerald-500 mr-3">☁</span>
                        インフラ・データベース
                    </h2>
                    <div className="space-y-6">
                        {infraSkills.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-700">{skill.name}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5">
                                    <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Tools */}
            <div className="mt-16">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-8 relative overflow-hidden shadow-md">
                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 rounded-full bg-indigo-200/40 blur-3xl"></div>

                    <h2 className="text-2xl font-bold text-gray-900 border-b border-indigo-200/50 pb-4 mb-8 flex items-center relative z-10">
                        <span className="text-purple-600 mr-3">✨</span>
                        現在習得中のAIツール・自動化
                    </h2>

                    <div className="grid gap-6 sm:grid-cols-2 relative z-10">
                        {aiTools.map((tool) => (
                            <div key={tool.name} className="bg-white/80 border border-white/40 shadow-sm rounded-xl p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                                <h3 className="text-lg font-bold text-purple-700 mb-2">{tool.name}</h3>
                                <p className="text-gray-600 text-sm">{tool.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
