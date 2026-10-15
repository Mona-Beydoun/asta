import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:py-12">
      <header>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Asta&apos;s Preparation Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-[#d8d3c8]">
          Asta is getting ready to face Lucifero. Track your three training
          tasks here and see how much of your preparation plan is complete.
        </p>
      </header>

      <section
        aria-labelledby="threat-heading"
        className="mt-8 rounded-xl border border-[#2e323b] bg-[#1a1c22] p-5"
      >
        <h2 id="threat-heading" className="text-xl font-bold">
          Threat brief: Lucifero
        </h2>
        <p className="mt-2 text-[#d8d3c8]">
          A powerful devil who uses gravity magic. His overwhelming strength
          makes him a serious threat, so Asta needs a clear plan.
        </p>
      </section>

      <Dashboard />
    </main>
  );
}