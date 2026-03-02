import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/profile' },
    { name: 'Skills', path: '/skills' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tighter text-gray-900">
          <span className="text-blue-600">H</span>.Torato
        </Link>
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile menu button could be added here */}
      </div>
    </nav>
  );
}
