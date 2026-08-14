import Link from "next/link";
import { format } from "date-fns";
import { getAllPosts } from "@/lib/posts";
import { TagChit } from "@/components/TagChit";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Hero */}
      <section className="pt-16 pb-14 border-b hairline">
        <p className="font-mono text-xs uppercase tracking-widest text-brass mb-4">
          Huntsville, AL
        </p>
        <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] max-w-xl">
          Building software, studying businesses, and running the long
          distance.
        </h1>
        <p className="mt-6 max-w-lg text-slate leading-relaxed">
          I&apos;m Conner — a software developer with a background in
          banking and data science. This is a running record of what
          I&apos;m building, what I&apos;m invested in, and what training
          for ultramarathons keeps teaching me about all of it.
        </p>
        <div className="mt-8 flex gap-4 font-mono text-sm">
          <Link
            href="/blog"
            className="rounded-sm bg-ink text-paper px-4 py-2 hover:bg-brass transition-colors"
          >
            Read the field notes
          </Link>
          <Link
            href="/about"
            className="rounded-sm border hairline px-4 py-2 hover:border-brass hover:text-brass transition-colors"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Recent entries — ledger style */}
      <section className="py-14">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-xl">Recent entries</h2>
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-wide text-slate hover:text-brass transition-colors"
          >
            View all →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-slate text-sm">
            First entry is on the way. Check back soon.
          </p>
        ) : (
          <ul className="divide-y hairline border-t border-b hairline">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-4 hover:bg-paper-raised transition-colors -mx-2 px-2"
                >
                  <span className="font-mono text-xs text-slate w-24 shrink-0">
                    {format(new Date(post.date), "MMM d, yyyy")}
                  </span>
                  <span className="flex-1 font-display text-lg group-hover:text-brass transition-colors">
                    {post.title}
                  </span>
                  <TagChit tag={post.tag} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
