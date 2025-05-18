import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head><title>Home — Plataforma Cursos</title></Head>
      <Header />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold">Welcome to Plataforma Cursos</h1>
      </main>
      <Footer />
    </>
  )
}
