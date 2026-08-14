import Link from "next/link";
import { format } from "date-fns";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { TagChit } from "@/components/TagChit";

export const metadata: Metadata = {
  title: "Field Notes — Conner Poslajko",
  description:
    "Notes on building software, studying markets, and training for the long distance.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl mb-2">Field Notes</h1>
      <p className="text-slate mb-10">
        Build logs, market notes, and miles — in the order they happened.
      </p>

      {posts.length === 0 ? (
        <p className="text-slate text-sm">Nothing filed yet. Soon.</p>
      ) : (
        <ul className="divide-y hairline border-t border-b hairline">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 py-5 hover:bg-paper-raised transition-colors -mx-2 px-2"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-slate w-24 shrink-0">
                    {format(new Date(post.date), "MMM d, yyyy")}
                  </span>
                  <TagChit tag={post.tag} />
                  <span className="font-mono text-xs text-slate">
                    {post.readingTime}
                  </span>
                </div>
                <span className="font-display text-xl group-hover:text-brass transition-colors">
                  {post.title}
                </span>
                <p className="text-slate text-sm max-w-xl">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
