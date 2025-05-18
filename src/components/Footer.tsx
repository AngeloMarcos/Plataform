// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-6 mt-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <p>© {new Date().getFullYear()} Plataforma Cursos. All rights reserved.</p>
      </div>
    </footer>
  );
}
