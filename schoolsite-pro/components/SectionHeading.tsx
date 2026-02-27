export function SectionHeading({ kicker, title, desc }: { kicker: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="badge mx-auto w-fit">
        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
        <span className="tracking-wide">{kicker}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-zinc-300">{desc}</p>
    </div>
  );
}
