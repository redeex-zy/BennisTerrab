"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight, BadgeCheck, BookOpen, Brain, Building2, Calendar, Cpu, Globe2, GraduationCap, Sparkles, Trophy } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/Motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 0.55, ease: "easeOut" } }),
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card p-5">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-zinc-300">{label}</div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="card p-6 hover:bg-white/8 transition">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 border border-white/10">
          {icon}
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="mt-1 text-sm text-zinc-300">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen noise">
      <Navbar />

{/* HERO */}
<section className="pt-28 sm:pt-32">
  <div className="container-x">
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <MotionDiv initial="hidden" animate="show" variants={fadeUp} custom={0.05}>
          <div className="badge w-fit">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Middle School & High School • Kenitra, Morocco</span>
          </div>
        </MotionDiv>

        <MotionDiv initial="hidden" animate="show" variants={fadeUp} custom={0.12}>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
            Groupe Scolaire Bennis et Terrab
            <span className="block text-cyan-200">Learn. Grow. Achieve.</span>
          </h1>
        </MotionDiv>

        <MotionDiv initial="hidden" animate="show" variants={fadeUp} custom={0.18}>
          <p className="mt-4 max-w-xl text-zinc-300">
            A supportive learning environment with a strong academic culture, modern classrooms,
            a science lab, and a theatre stage for student activities and presentations.
          </p>
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.24}
          className="mt-7 flex flex-wrap gap-3"
        >
          <a className="btn-primary" href="#contact">
            <span>Contact us</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a className="btn-ghost" href="#programs">
            <BookOpen className="h-4 w-4" />
            <span>Explore programs</span>
          </a>
        </MotionDiv>

        <MotionDiv
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.30}
          className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-300"
        >
          <span className="badge">
            <BadgeCheck className="h-4 w-4 text-emerald-300" /> Structured follow-up
          </span>
          <span className="badge">
            <Cpu className="h-4 w-4 text-indigo-300" /> PCs in every classroom
          </span>
          <span className="badge">
            <Globe2 className="h-4 w-4 text-cyan-300" /> Student clubs & community
          </span>
        </MotionDiv>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-rose-500/10 blur-2xl" />
        <div className="relative card p-6 sm:p-8 glow">
          <div className="flex items-center justify-between">
            <div className="badge">
              <GraduationCap className="h-4 w-4 text-cyan-300" />
              <span>Welcome</span>
            </div>
            <span className="text-xs text-zinc-400">Kenitra</span>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="card p-5 bg-zinc-950/30">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5 border border-white/10 animate-floaty">
                  <Building2 className="h-5 w-5 text-indigo-300" />
                </div>
                <div>
                  <div className="font-medium">Modern classrooms</div>
                  <div className="text-sm text-zinc-300">A PC and a data projector in every classroom to support learning.</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Stat value="SM" label="Math Sciences track" />
              <Stat value="PC" label="Physics-Chemistry track" />
            </div>

            <div className="card p-5 bg-zinc-950/30">
              <div className="text-sm text-zinc-200">Highlights</div>
              <div className="mt-3 grid gap-2 text-sm text-zinc-300">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="inline-flex items-center gap-2">
                    <Brain className="h-4 w-4 text-rose-300" /> Science lab
                  </span>
                  <span className="text-xs text-zinc-400">Hands-on</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <span className="inline-flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-300" /> Theatre stage
                  </span>
                  <span className="text-xs text-zinc-400">Events</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-cyan-500/20 to-transparent" />
              <div className="absolute inset-0 -translate-x-1/2 bg-white/10 blur-xl animate-shimmer" />
              <div className="relative flex items-center gap-3">
                <Trophy className="h-5 w-5 text-amber-200" />
                <div>
                  <div className="font-medium">Trusted in Kenitra</div>
                  <div className="text-sm text-zinc-300">Often cited among the best schools in the city.</div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-zinc-400">
            Tip: update text and sections inside <span className="text-zinc-200">app/page.tsx</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* PROGRAMS */}
<MotionSection
  id="programs"
  className="mt-24"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  <div className="container-x">
    <SectionHeading
      kicker="Programs"
      title="Middle School & High School — A structured pathway"
      desc="Middle School and High School with Science and Economics tracks. A modern, structured environment focused on progress and results."
    />

    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <MotionDiv variants={fadeUp} custom={0.05}>
        <Feature
          icon={<BookOpen className="h-5 w-5 text-cyan-300" />}
          title="Middle School"
          desc="Strong foundations in math, science, languages, and methodology — with consistent follow-up."
        />
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.12}>
        <Feature
          icon={<Brain className="h-5 w-5 text-rose-300" />}
          title="Common Core (French Track) — Science"
          desc="Science-focused orientation with guidance to prepare students for High School."
        />
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.18}>
        <Feature
          icon={<Cpu className="h-5 w-5 text-indigo-300" />}
          title="1st Bac — Math Sciences"
          desc="Deeper math and physics training with continuous practice and regular assessments."
        />
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.24}>
        <Feature
          icon={<GraduationCap className="h-5 w-5 text-cyan-200" />}
          title="2nd Bac — Math Sciences"
          desc="Baccalaureate preparation: exam-style topics, detailed correction, and steady progress tracking."
        />
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.30}>
        <Feature
          icon={<BadgeCheck className="h-5 w-5 text-amber-200" />}
          title="2nd Bac — Physics & Chemistry (PC)"
          desc="Physics-Chemistry with math: hands-on practice, targeted exercises, and mock exams."
        />
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.36}>
        <Feature
          icon={<Globe2 className="h-5 w-5 text-emerald-300" />}
          title="2nd Bac — Economics"
          desc="Economics & management: strong methodology, exam preparation, support, and orientation."
        />
      </MotionDiv>
    </div>
  </div>
</MotionSection>

{/* CAMPUS */}
<MotionSection
  id="campus"
  className="mt-24"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  <div className="container-x">
    <SectionHeading
      kicker="Campus"
      title="A modern environment to learn and express yourself"
      desc="A PC in every classroom, a science lab, and a theatre stage for clubs, events, and student projects."
    />

    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      <MotionDiv variants={fadeUp} custom={0.08} className="card p-6 lg:col-span-2">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 border border-white/10">
            <Building2 className="h-5 w-5 text-indigo-300" />
          </div>
          <div>
            <div className="font-semibold">Facilities</div>
            <div className="text-sm text-zinc-300">
              Practical tools for studying, experimenting, and presenting student work.
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "PC in every classroom", pct: 95 },
            { label: "Science lab", pct: 85 },
            { label: "Theatre stage", pct: 80 },
          ].map((x) => (
            <div key={x.label} className="rounded-2xl border border-white/10 bg-zinc-950/30 p-4">
              <div className="text-sm text-zinc-200">{x.label}</div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400/70 to-indigo-400/70"
                  style={{ width: `${x.pct}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-zinc-400">Available & active</div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300">
          <span className="text-zinc-100 font-medium">Stage highlight:</span> perfect for presentations, clubs,
          events, and student-led activities.
        </div>
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.16} className="card p-6">
        <div className="font-semibold">Quick info</div>
        <div className="mt-4 grid gap-3 text-sm text-zinc-300">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">✅ Middle School + High School</div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            ✅ Tracks: Math Sciences, Physics-Chemistry, Economics
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            ✅ Student clubs & associations
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            ✅ Widely recognized in Kenitra
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/30 p-4 text-xs text-zinc-300">
          <div className="font-medium text-zinc-100">Clubs / Associations</div>
          <p className="mt-2">
            If you run a club and want it featured on the website, DM us to collaborate.
          </p>
        </div>
      </MotionDiv>
    </div>
  </div>
</MotionSection>

{/* RESULTS */}
<MotionSection
  id="results"
  className="mt-24"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-80px" }}
>
  <div className="container-x">
    <SectionHeading
      kicker="Results"
      title="Real outcomes. Real support."
      desc="Strong academics, consistent follow-up, and a student community that builds confidence."
    />

    <div className="mt-10 grid gap-4 md:grid-cols-3">
      <MotionDiv variants={fadeUp} custom={0.08}>
        <Stat value="Collège + Lycée" label="Full pathway in one campus" />
      </MotionDiv>
      <MotionDiv variants={fadeUp} custom={0.14}>
        <Stat value="SM • PC • Eco" label="High-school tracks available" />
      </MotionDiv>
      <MotionDiv variants={fadeUp} custom={0.20}>
        <Stat value="Kenitra" label="Based in Kenitra, Morocco" />
      </MotionDiv>
    </div>

    <div className="mt-6 grid gap-4 lg:grid-cols-2">
      <MotionDiv variants={fadeUp} custom={0.26} className="card p-6">
        <div className="font-semibold">Academic follow-up</div>
        <p className="mt-2 text-sm text-zinc-300">
          Structured learning, regular evaluation, and teacher support to help students stay on track
          from Tronc Commun to 2ème Bac.
        </p>
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.32} className="card p-6">
        <div className="font-semibold">Student-led clubs & activities</div>
        <p className="mt-2 text-sm text-zinc-300">
          Associations run by students. Want your club featured on the website? DM us to collaborate.
        </p>
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.38} className="card p-6">
        <div className="font-semibold">A trusted name in Kenitra</div>
        <p className="mt-2 text-sm text-zinc-300">
          Known locally for serious study culture and strong performance — often cited among the
          best schools in Kenitra.
        </p>
      </MotionDiv>

      <MotionDiv variants={fadeUp} custom={0.44} className="card p-6">
        <div className="font-semibold">Future-ready mindset</div>
        <p className="mt-2 text-sm text-zinc-300">
          A balanced environment that supports academics, communication, and presentation skills
          (events, theatre stage, projects).
        </p>
      </MotionDiv>
    </div>
  </div>
</MotionSection>

{/* CONTACT */}
<section id="contact" className="mt-24">
  <div className="container-x">
    <SectionHeading
      kicker="Contact"
      title="Contact Bennis et Terrab"
      desc="Reach out for admissions, information, or to collaborate on student clubs & associations."
    />

    <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
      <ContactForm />

      <div className="card p-6 sm:p-8">
        <h3 className="text-xl font-semibold">School details</h3>

        <div className="mt-4 grid gap-3 text-sm text-zinc-300">
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-zinc-100 font-medium">Address:</span> 3 Rue Anoual, 14000, Kenitra, Morocco
          </div>
<div className="mt-4 flex flex-wrap gap-3">
  <a
    className="btn-primary"
    href="https://www.google.com/maps/place/Lyc%C3%A9e+Benniss+et+Terrab/@34.254544,-6.593707,18z/data=!4m15!1m8!3m7!1s0xda759efa8dfbb05:0x162950a06d61d707!2smimosas,+3+Rue+Anoual,+K%C3%A9nitra+14000!3b1!8m2!3d34.2564334!4d-6.5911786!16s%2Fg%2F11fsn0mb_s!3m5!1s0xda759efafa1bccf:0xbe3d6f1a6f500fc!8m2!3d34.2563629!4d-6.5912162!16s%2Fg%2F1hg4w4yn0?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noreferrer"
  >
    Open in Google Maps
  </a>

  <a className="btn-ghost" href="tel:+212537360636">
    Call the school
  </a>

  <a className="btn-ghost" href="mailto:ybennis@gmail.com">
    Send email
  </a>
</div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-zinc-100 font-medium">Phone:</span> +212 537 360 636
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-zinc-100 font-medium">Mobile:</span> +212 644 444 770
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-zinc-100 font-medium">Email:</span> ybennis@gmail.com
            <div className="text-zinc-400">scolbennisterrab@hotmail.com</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-zinc-100 font-medium">Website:</span>{" "}
            <a className="text-cyan-200 hover:text-cyan-100 underline" href="https://www.gsbennisterrab.com" target="_blank" rel="noreferrer">
              www.gsbennisterrab.com
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/30 p-4 text-sm text-zinc-300">
          <div className="font-medium text-zinc-100">Clubs / Associations</div>
          <p className="mt-2">
            Student clubs are run by students. If you manage a club and want it featured on the website,
            send us a message to collaborate.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#programs" className="btn-ghost">Programs</a>
          <a href="#campus" className="btn-ghost">Campus</a>
          <a href="#" className="btn-primary">Back to top</a>
        </div>


      </div>
    </div>
  </div>
</section>

      <Footer />
    </main>
  );
}
