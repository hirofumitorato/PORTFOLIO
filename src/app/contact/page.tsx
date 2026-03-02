"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle } from "lucide-react";

type FormInputs = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data: FormInputs) => {
        setIsSubmitting(true);
        // 実際のAPIエンドポイントをここに設定しますが、デモとして1.5秒待機をシミュレートします
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Submitted Data:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();

        // 5秒後に元のフォームに戻す
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="container mx-auto px-4 py-20 max-w-3xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">コンタクト</h1>
                <p className="text-gray-600">
                    AI顧問に関するお問い合わせ、システム実装のご相談など、お気軽にお問い合わせください。
                </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden">
                {/* 背景の装飾 */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-blue-50 blur-3xl pointer-events-none"></div>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">送信完了しました</h2>
                        <p className="text-gray-600">
                            お問い合わせありがとうございます。折り返しご連絡いたします。
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">お名前</label>
                            <input
                                id="name"
                                type="text"
                                className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-white`}
                                placeholder="山田 太郎"
                                {...register("name", { required: "お名前は必須です" })}
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
                            <input
                                id="email"
                                type="email"
                                className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors bg-white`}
                                placeholder="yamada@example.com"
                                {...register("email", {
                                    required: "メールアドレスは必須です",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "有効なメールアドレスを入力してください"
                                    }
                                })}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">メッセージ内容</label>
                            <textarea
                                id="message"
                                rows={6}
                                className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none bg-white`}
                                placeholder="AI顧問に関するお問い合わせ、実装のご相談など"
                                {...register("message", { required: "メッセージは必須です" })}
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-md transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'}`}
                        >
                            {isSubmitting ? (
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            ) : (
                                <>
                                    <Send size={18} />
                                    メッセージを送信する
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
