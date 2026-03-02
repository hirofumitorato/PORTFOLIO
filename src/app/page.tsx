import Link from "next/link";
import { ArrowRight, Bot, Code2, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
          AI駆動フルスタックエンジニア
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          サービス業での長年の経験を経てITエンジニアへ転身。
          現在はフロントエンド（SvelteKit / TypeScript）およびバックエンド（NestJS / Spring Boot）の横断的な開発に従事。
          AI駆動開発を実務レベルで組み込み、開発プロセス全体の最適化を実践しています。
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/profile"
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700"
          >
            経歴・強みを見る
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
          >
            開発プロジェクト実績
          </Link>
          <Link
            href="/portfolio#cs-1"
            className="inline-flex h-12 items-center justify-center rounded-md border border-purple-200 bg-purple-50 text-purple-700 px-8 text-sm font-bold shadow-sm transition-colors hover:bg-purple-100"
          >
            AI / LLM 個人開発実績
          </Link>
        </div>
      </div>

      <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-100 p-3 text-blue-600">
            <Code2 size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">フルスタック自己完結力</h3>
          <p className="text-gray-600 text-sm">
            SvelteKit (Svelte5)、TypeScript、NestJS、Spring Boot、PostgreSQLを活用し、UIからAPIまで一貫対応が可能です。
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 p-3 text-emerald-600">
            <Bot size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">AI駆動開発の実装力</h3>
          <p className="text-gray-600 text-sm">
            AIを補助ツールとしてではなく、要件整理、設計ドラフト生成、テスト観点抽出、レビュー支援など、開発プロセス全体に統合しています。
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md sm:col-span-2 lg:col-span-1">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-100 p-3 text-purple-600">
            <Users size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">サービス業由来の対人能力</h3>
          <p className="text-gray-600 text-sm">
            長年のサービス業経験で培った合意形成、要件ヒアリング、構造整理を強みとし、円滑なプロジェクト推進に貢献します。
          </p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">モダンな開発プロセスによる価値提供</h2>
        <Link href="/skills" className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-500">
          詳細な技術スタックを見る <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
