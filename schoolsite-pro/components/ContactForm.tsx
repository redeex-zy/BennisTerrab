"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { MotionDiv } from "./Motion";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState<string>("");

  const helper = useMemo(() => {
    if (status === "success") return { icon: <CheckCircle2 className="h-4 w-4" />, cls: "text-emerald-200" };
    if (status === "error") return { icon: <TriangleAlert className="h-4 w-4" />, cls: "text-rose-200" };
    return null;
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setMsg("Message received. We'll contact you soon!");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setMsg(err?.message || "Failed to send");
    }
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold">Request info / book a visit</h3>
          <p className="mt-2 text-sm text-zinc-300">
            Use this form to contact the school for info, visits, or collaboration.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-2 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm text-zinc-200">Full name</span>
            <input
              name="name"
              required
              minLength={2}
              placeholder="e.g., Sara El Amrani"
              className="h-11 rounded-xl bg-zinc-950/40 border border-white/10 px-3 outline-none focus:border-cyan-400/40"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-zinc-200">Email</span>
            <input
              name="email"
              required
              type="email"
              placeholder="you@example.com"
              className="h-11 rounded-xl bg-zinc-950/40 border border-white/10 px-3 outline-none focus:border-cyan-400/40"
            />
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm text-zinc-200">Message</span>
          <textarea
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="Tell us what you're looking for..."
            className="rounded-xl bg-zinc-950/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400/40"
          />
        </label>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            disabled={status === "loading"}
            className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
          >
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span>Send message</span>
          </button>

          {helper && (
            <MotionDiv
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 text-sm ${helper.cls}`}
            >
              {helper.icon}
              <span>{msg}</span>
            </MotionDiv>
          )}

          {status === "idle" && <span className="text-xs text-zinc-400">No spam. No tracking. Just a clean form.</span>}
        </div>
      </form>
    </div>
  );
}
