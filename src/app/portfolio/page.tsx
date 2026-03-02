import { ExternalLink, Github } from "lucide-react";

export const metadata = {
    title: "Projects | Torato Hirofumi",
    description: "Projects and development work by Torato Hirofumi.",
};

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "マルチテナント型EC共通基盤（ZIP）",
            period: "2025年4月 — 現在",
            role: "フロントエンド開発 / 基本設計",
            description: "複数テナントで共通利用されるECプラットフォームの基盤開発において、SvelteKitを用いたフロントエンド開発と基本設計を担当。UIコンポーネントの実装や大規模リファクタリングを実施。",
            tags: ["SvelteKit", "TypeScript", "vanilla-extract", "PostgreSQL", "AI駆動開発"],
            featured: true,
            process: "AI駆動開発を導入し、開発プロセス全体の最適化を実現。要件整理、設計ドラフト生成、レビュー支援などに活用し、CI/CD環境の整備も牽引。"
        },
        {
            id: 2,
            title: "大手社内申請システム",
            period: "2024年4月 — 2025年3月",
            role: "テックリーダー",
            description: "JavaおよびSpring Bootを用いた社内向け申請システムのバックエンド開発。1週間ごとのスプリントによるアジャイル開発を主導。",
            tags: ["Java", "Spring Boot", "MySQL", "OpenAPI"],
            featured: false,
            process: "API設計から実装までを担当し、OpenAPI Generatorを活用したシームレスなAPI連携と開発の効率化を実現。"
        },
        {
            id: 3,
            title: "通信会社ポイント管理システム",
            period: "2023年10月 — 2024年3月",
            role: "バックエンド開発",
            description: "大規模トラフィックを扱う通信会社向けのポイント計算ロジックの実装を中心としたバックエンド開発プロジェクト。",
            tags: ["Java", "Spring Boot", "Oracle"],
            featured: false,
            process: "複雑なポイント計算ロジックの実装に加え、結合テスト・総合テストの計画・実施を担当。"
        },
        {
            id: 4,
            title: "AI駆動開発 実践ポートフォリオサイト",
            period: "2026年3月",
            role: "AIプロセス実装",
            description: "最新の自律型AIエージェントを活用し、エンジニア向けのポートフォリオサイトを構築。プロンプトベースでの要件定義から実装準備までを完遂。",
            tags: ["Next.js", "Tailwind CSS", "Vercel"],
            featured: false,
            process: "Google AntigravityなどのAIエージェントを用いた実装プロセスの検証。抽象的な指示ではなく、正確な事実ベースのプロンプトによるサイト再構築を実施。"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">プロジェクト・実績</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    AIを実務レベルでプロセスに組み込んだ最新の開発事例から、エンタープライズ向けの堅牢なバックエンド開発まで、
                    これまで手掛けてきた主要なシステム開発の実績です。
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`flex flex-col rounded-2xl border ${project.featured ? 'border-blue-200 bg-blue-50/50 shadow-md' : 'border-gray-200 bg-white shadow-sm'} p-8 transition-all hover:shadow-md hover:-translate-y-1`}
                    >
                        {project.featured && (
                            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 w-fit">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                現在進行中 / AI統合プロジェクト
                            </div>
                        )}

                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h2>
                        <div className="text-sm font-medium text-gray-500 mb-4">{project.period}</div>
                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                            {project.description}
                        </p>

                        {project.process && (
                            <div className="mb-6 rounded-lg bg-gray-50 p-4 border border-gray-200">
                                <h3 className="text-sm font-bold text-gray-700 mb-2">取り組み / プロセス</h3>
                                <p className="text-xs text-gray-600">{project.process}</p>
                            </div>
                        )}

                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-md bg-gray-100 border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
