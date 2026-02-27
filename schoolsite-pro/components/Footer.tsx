import { ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container-x py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-zinc-300">
          <div className="flex items-center gap-2 text-zinc-100">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="font-medium">Groupe Scolaire Bennis et Terrab</span>
          </div>
          <div className="mt-2">© {new Date().getFullYear()} • All rights reserved.</div>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-300">
          <ShieldCheck className="h-4 w-4 text-emerald-300" />
          <span>
  Built with <span className="text-rose-300">❤️</span> by Mohamed Reda Mejhed
</span>
        </div>
      </div>
    </footer>
  );
}
