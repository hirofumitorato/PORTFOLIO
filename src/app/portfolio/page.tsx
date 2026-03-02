import { ExternalLink, Github } from "lucide-react";

export const metadata = {
    title: "Portfolio | Hirofumi Torato",
    description: "Projects and development work by Hirofumi Torato, including AI-assisted development.",
};

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "リアルタイムデータ可視化ダッシュボード",
            description: "AWS IoT Coreから送信されるセンサーデータをシームレスに処理し、Next.jsのフロントエンドでリアルタイムに描画するシステム。LambdaとDynamoDBを活用してスケーラブルな構成を実現。",
            tags: ["TypeScript", "Next.js", "AWS IoT Core", "DynamoDB"],
            link: "#",
            featured: false,
        },
        {
            id: 2,
            title: "マイクロサービス型ECバックエンド",
            description: "Go言語（Gin）とRustを使用して、高トラフィックなECサイトのバックエンドをリプレイス。決済処理のレイテンシを50%削減し、システムの可用性を大幅に向上させた。",
            tags: ["Go", "Rust", "gRPC", "Docker", "AWS ECS"],
            link: "#",
            featured: false,
        },
        {
            id: 3,
            title: "ポートフォリオサイト（本サイト）",
            description: "自律型AIエージェント「Google Antigravity」を活用し、プロンプトベースでの要件定義から実装、デプロイメントの準備までを完遂。AIとのペアプログラミングによる超高速開発のユースケースとして位置づけている。",
            tags: ["Next.js", "Tailwind CSS", "Google Antigravity", "Vercel"],
            link: "https://github.com/torato/portfolio-demo",
            featured: true,
            process: "Antigravityへの包括的なプロンプト（要件、構成、デザイン方針）を提供。エージェントが自律してNext.jsプロジェクトの初期化からコンポーネント実装、レスポンシブ対応までをワンストップで実行。"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">プロジェクト・実績</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    これまでに手掛けたシステム開発の事例と、最新のAIツールを用いた実践的な開発実績をご紹介します。
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`flex flex-col rounded-2xl border ${project.featured ? 'border-blue-200 bg-blue-50/50 shadow-[0_4px_15px_rgba(59,130,246,0.1)]' : 'border-gray-200 bg-white shadow-sm'} p-8 transition-all hover:shadow-md hover:-translate-y-1`}
                    >
                        {project.featured && (
                            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                AI顧問 実証プロジェクト
                            </div>
                        )}

                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                            {project.description}
                        </p>

                        {project.process && (
                            <div className="mb-6 rounded-lg bg-gray-50 p-4 border border-gray-200">
                                <h3 className="text-sm font-bold text-gray-700 mb-2">実装プロセス</h3>
                                <p className="text-xs text-gray-600">{project.process}</p>
                            </div>
                        )}

                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                                    <ExternalLink size={16} /> 詳細を見る
                                </a>
                                {project.featured && (
                                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                        <Github size={16} /> Source Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
