import { CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Profile | Torato Hirofumi",
    description: "Torato Hirofumi's professional background, strengths, and work experience.",
};

export default function Profile() {
    const experiences = [
        {
            id: 1,
            period: "2025年4月 - 現在",
            role: "フロントエンド開発 / 基本設計",
            project: "マルチテナント型EC共通基盤（ZIP）",
            tech: "SvelteKit / TypeScript / vanilla-extract / PostgreSQL",
            details: [
                "UIコンポーネント実装および大規模リファクタリングの実施",
                "AI駆動開発の導入によるプロセス最適化",
                "CI/CD環境の整備"
            ]
        },
        {
            id: 2,
            period: "2024年4月 - 2025年3月",
            role: "テックリーダー",
            project: "大手社内申請システム",
            tech: "Java / Spring Boot / MySQL / OpenAPI",
            details: [
                "APIの設計および実装",
                "OpenAPI Generatorを活用した開発の効率化",
                "1週間スプリントでのアジャイル開発運用"
            ]
        },
        {
            id: 3,
            period: "2023年10月 - 2024年3月",
            role: "バックエンド開発",
            project: "通信会社ポイント管理システム",
            tech: "Java / Spring Boot / Oracle",
            details: [
                "ポイント計算ロジックの実装",
                "結合・総合試験の実施"
            ]
        },
        {
            id: 4,
            period: "2020年12月 - 2022年3月",
            role: "開発・保守運用",
            project: "CMS運用保守",
            tech: "Java / MyBatis / PostgreSQL",
            details: [
                "システムの改修およびデータベース操作",
                "本番リリース運用"
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-gray-900 border-b border-gray-200 pb-4">
                プロフィール
            </h1>

            <section className="mb-12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-800">基本情報</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <div><span className="font-semibold text-gray-800 w-24 inline-block">氏名:</span>虎渡 広史（Torato Hirofumi）</div>
                    <div><span className="font-semibold text-gray-800 w-24 inline-block">生年月日:</span>1985年11月19日（40歳）</div>
                    <div><span className="font-semibold text-gray-800 w-24 inline-block">居住地:</span>東京都</div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="leading-relaxed">
                        サービス業での長年の経験を経てITエンジニアへ転身。現在はフロントエンド（SvelteKit / TypeScript）およびバックエンド（NestJS / Spring Boot）の横断的な開発に従事しています。
                        単なるAI活用ではなく、要件整理から設計ドラフト生成、テスト観点抽出、レビュー支援まで、**開発プロセス全体へのAI駆動の組み込み**を実践しています。
                    </p>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="mb-6 text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <span className="h-8 w-1 rounded-full bg-blue-600 block"></span>
                    強み（Core Strengths）
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">1. AI駆動開発の実装力</h3>
                        <p className="text-gray-600 text-sm">AIを単なる補助ツールとしてではなく、設計・レビュー・テスト工程に統合し、チームの開発プロセス最適化に貢献します。</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">2. フルスタック自己完結力</h3>
                        <p className="text-gray-600 text-sm">SvelteKit, TypeScript, NestJS, Spring Boot, PostgreSQLを用いて、UIからAPIまで一貫した対応が可能です。</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">3. モダン開発プロセス</h3>
                        <p className="text-gray-600 text-sm">GitHub Flow, GitHub Actions, Docker, Jira / Confluenceを用いた、モダンで効率的なアジャイル開発環境に精通しています。</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">4. サービス業由来の対人能力</h3>
                        <p className="text-gray-600 text-sm">長年のサービス業で培った合意形成、的確な要件ヒアリング、複雑な事象の構造整理を強みとしています。</p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="mb-8 text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <span className="h-8 w-1 rounded-full bg-blue-600 block"></span>
                    職務経歴
                </h2>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[8.5rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-200">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="relative flex flex-col md:flex-row gap-6 group">
                            <div className="md:w-32 flex-shrink-0 pt-1 text-sm font-bold text-blue-600 z-10 hidden md:block text-right">
                                {exp.period}
                            </div>

                            <div className="absolute left-5 md:left-[8.5rem] w-3 h-3 bg-white border-2 border-blue-600 rounded-full mt-1.5 -translate-x-[5px] z-10 group-hover:bg-blue-600 transition-colors"></div>

                            <div className="md:hidden text-sm font-bold text-blue-600 pl-10">
                                {exp.period}
                            </div>

                            <div className="ml-10 md:ml-0 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex-grow">
                                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                                    <h3 className="font-bold text-xl text-gray-900">{exp.project}</h3>
                                    <span className="text-sm font-medium text-gray-500">/ {exp.role}</span>
                                </div>
                                <div className="text-sm text-blue-600 font-medium mb-4 bg-blue-50 px-3 py-1 rounded inline-block">
                                    {exp.tech}
                                </div>
                                <ul className="text-gray-600 text-sm space-y-2">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <span className="text-gray-400 mt-0.5">-</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="mb-6 text-2xl font-bold text-gray-800 flex items-center gap-3">
                    <span className="h-8 w-1 rounded-full bg-blue-600 block"></span>
                    資格
                </h2>
                <ul className="space-y-3">
                    {["普通自動車第一種免許", "Oracle Certified Java Programmer Silver SE8", "生成AIパスポート"].map((cert, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                            <CheckCircle2 className="text-emerald-500" size={20} />
                            {cert}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
