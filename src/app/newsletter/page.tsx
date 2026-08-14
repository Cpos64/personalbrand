import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter — Conner Poslajko",
  description: "Get Field Notes in your inbox.",
};

export default function Newsletter() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-display text-3xl mb-4">Newsletter</h1>
      <p className="text-slate leading-relaxed mb-10 max-w-lg">
        Field Notes, delivered as they&apos;re published — no extra
        commentary, no separate feed to keep up with.
      </p>

      {/*
        TODO: replace this placeholder form with your provider's embed.

        Beehiiv:    swap this block for their <iframe> embed code, or call
                    their API from a route handler at /api/subscribe.
        ConvertKit: use their JS embed snippet, or POST to their forms API.

        Keeping the surrounding markup/classes means the swap is just the
        <form> internals — the page styling stays intact.
      */}
      <form className="flex flex-col sm:flex-row gap-3 max-w-md">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          className="flex-1 rounded-sm border hairline bg-paper-raised px-4 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-brass"
        />
        <button
          type="submit"
          className="rounded-sm bg-ink text-paper px-5 py-2.5 text-sm font-mono hover:bg-brass transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="font-mono text-xs text-slate mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
