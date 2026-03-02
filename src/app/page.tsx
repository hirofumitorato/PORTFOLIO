import Link from "next/link";
import { ArrowRight, Bot, Code2, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
          バックエンドエンジニア、AI顧問、そしてAntigravityの活用者。
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          最新のテクノロジーとAIを駆使し、ビジネスの課題を解決するフルスタックエンジニア。
          長年のバックエンド開発、クラウドインフラ(AWS/IoT)の経験を活かし、
          次世代のシステムを構築します。
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700"
          >
            プロジェクトを見る
          </Link>
        </div>
      </div>

      <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-blue-100 p-3 text-blue-600">
            <Code2 size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">フルスタック開発</h3>
          <p className="text-gray-600 text-sm">
            TypeScript, Go, Rustを用いた堅牢なバックエンドアーキテクチャ設計から、モダンなフロントエンド(Next.js)構築まで、一気通貫で対応します。
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-100 p-3 text-emerald-600">
            <Cpu size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">AWS & IoT</h3>
          <p className="text-gray-600 text-sm">
            AWS IoT Core, Lambda, DynamoDBを活用したスケーラブルなインフラ構築、およびアジャイル開発手法により、複雑なシステム要件を実現します。
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md sm:col-span-2 lg:col-span-1">
          <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-purple-100 p-3 text-purple-600">
            <Bot size={24} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900">AI顧問としての挑戦</h3>
          <p className="text-gray-600 text-sm">
            お客様の曖昧な要件を明確に整理し、Google AntigravityやClaude Codeなどの最新AIエージェントと密接に連携することで、アイデアを最速で形にします。
          </p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AIの力で、開発の新時代へ。</h2>
        <Link href="/skills" className="inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-500">
          スキルと技術スタックの詳細を見る <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
