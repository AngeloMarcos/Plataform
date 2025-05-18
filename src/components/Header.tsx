// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Plataforma Cursos</h1>
        <nav>
          <Link href="/login" className="mr-4 hover:underline">
            Login
          </Link>
          <Link href="/register" className="hover:underline">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
