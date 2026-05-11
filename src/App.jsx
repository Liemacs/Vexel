import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10 text-zinc-100">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col justify-center">
        <div className="max-w-2xl">
          <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            React + Tailwind
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Proiectul Vexel este pregatit.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Vite ruleaza React, Tailwind este conectat, iar clasele utilitare
            sunt gata pentru componentele tale.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="rounded-md bg-cyan-300 px-5 py-3 font-semibold text-zinc-950 shadow-lg shadow-cyan-950/40 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-zinc-950"
            onClick={() => setCount((value) => value + 1)}
          >
            Count is {count}
          </button>
          <code className="rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
            npm run dev
          </code>
        </div>
      </section>
    </main>
  )
}

export default App
