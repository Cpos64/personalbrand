import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Conner Poslajko",
  description: "What I'm building.",
};

type Project = {
  name: string;
  status: "Active" | "In progress" | "Prototype";
  description: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Hedgecraft",
    status: "Active",
    description:
      "A social investing platform — think Strava for investing. Upload brokerage statements and get institutional-grade portfolio analytics, or share performance with a group of friends running their own funds.",
  },
  {
    name: "REM",
    status: "In progress",
    description:
      "A dream journaling app that turns written dream entries into generated imagery, exploring what an AI-assisted personal journal can look like.",
  },
  {
    name: "AI Tinkerers — Huntsville",
    status: "In progress",
    description:
      "Co-organizing a local AI Tinkerers chapter — a space for builders in Huntsville to demo projects and swap notes on what's working.",
  },
];

const STATUS_STYLES: Record<Project["status"], string> = {
  Active: "text-[#3e5c3a]",
  "In progress": "text-[#8a6420]",
  Prototype: "text-slate",
};

export default function Projects() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl mb-2">Projects</h1>
      <p className="text-slate mb-10">Things I&apos;m building, in order.</p>

      <ul className="space-y-10">
        {PROJECTS.map((project) => (
          <li key={project.name} className="pb-10 border-b hairline last:border-b-0">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="font-display text-xl">{project.name}</h2>
              <span
                className={`font-mono text-[11px] uppercase tracking-wide ${STATUS_STYLES[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-slate leading-relaxed">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
