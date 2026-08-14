import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Conner Poslajko",
  description: "Background, path, and what this site is for.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl mb-10">About</h1>

      <div className="prose-custom">
        <p>
          I&apos;m a software developer based in Huntsville, Alabama. Before
          this, I spent roughly six years in banking as a Treasury
          Management Analyst, and along the way went back for a Master&apos;s
          in Data Science while working full-time. That path — finance,
          then data, then software — shows up in most of what I build and
          write about here.
        </p>

        <h2>Now</h2>
        <p>
          I write software professionally, and outside of work I&apos;m
          building <strong>Hedgecraft</strong>, a social investing platform
          for tracking and sharing portfolio performance. I also study
          public companies with a long-term, concentrated approach, and
          train for ultramarathons.
        </p>

        <h2>Why this site exists</h2>
        <p>
          I wanted one place to keep a public record of the things I&apos;m
          actually spending my time on, instead of splitting it across
          platforms that each only want one slice of it. Field Notes is
          where that record lives.
        </p>

        <h2>Elsewhere</h2>
        <p>
          You can find my code on{" "}
          <a href="https://github.com/Cpos64">GitHub</a>.
        </p>
      </div>
    </div>
  );
}
