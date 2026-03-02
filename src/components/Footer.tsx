export default function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-gray-950 py-8 text-center text-sm text-gray-500">
            <div className="container mx-auto px-4">
                <p className="mb-2">Powered by Next.js, Tailwind CSS & Vercel</p>
                <p>&copy; {new Date().getFullYear()} Hirofumi Torato. All rights reserved.</p>
                <p className="mt-4 text-xs">Developed with Google Antigravity</p>
            </div>
        </footer>
    );
}
