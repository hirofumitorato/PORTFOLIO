export const metadata = {
    title: "Skills | Torato Hirofumi",
    description: "Technical skills and AI tools of Torato Hirofumi.",
};

export default function Skills() {
    const skills = [
        {
            category: "言語 (Languages)",
            icon: "{}",
            color: "blue",
            items: ["TypeScript", "JavaScript", "Java", "Python", "HTML", "CSS"]
        },
        {
            category: "フレームワーク (Frameworks)",
            icon: "⚡",
            color: "emerald",
            items: ["Svelte", "SvelteKit (Svelte5)", "NestJS", "Spring Boot"]
        },
        {
            category: "データベース (Databases)",
            icon: "🗄️",
            color: "indigo",
            items: ["PostgreSQL", "MySQL", "Oracle", "H2"]
        },
        {
            category: "テスト (Testing)",
            icon: "✅",
            color: "green",
            items: ["Vitest", "Testing Library"]
        },
        {
            category: "AWS Cloud",
            icon: "☁️",
            color: "orange",
            items: ["EC2", "S3", "RDS", "DynamoDB", "Lambda", "CloudWatch", "CLI", "CodeBuild", "CodeCommit"]
        },
        {
            category: "インフラ・ツール・環境",
            icon: "🛠️",
            color: "gray",
            items: ["Docker", "GitHub", "GitHub Actions", "Jira", "Confluence", "VS Code", "IntelliJ IDEA", "Datadog"]
        },
        {
            category: "AI開発支援ツール",
            icon: "✨",
            color: "purple",
            items: ["ChatGPT", "Claude Code", "Gemini", "GitHub Copilot"]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20 max-w-5xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">技術スタック</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    フロントエンドからバックエンドまで一貫した開発能力を持ち、最新のAIツールを活用したモダンな開発プロセスを実践しています。
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center">
                            <span className="mr-3 text-2xl">{skill.icon}</span>
                            {skill.category}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, idx) => (
                                <span
                                    key={idx}
                                    className={`bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1 text-sm font-medium rounded-md`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
