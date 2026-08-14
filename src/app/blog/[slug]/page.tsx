import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { TagChit } from "@/components/TagChit";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Conner Poslajko`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-wide text-slate hover:text-brass transition-colors"
      >
        ← Field Notes
      </Link>

      <header className="mt-6 mb-10 pb-8 border-b hairline">
        <div className="flex items-center gap-4 mb-4">
          <TagChit tag={post.tag} />
          <span className="font-mono text-xs text-slate">
            {format(new Date(post.date), "MMMM d, yyyy")} · {post.readingTime}
          </span>
        </div>
        <h1 className="font-display text-4xl leading-tight">{post.title}</h1>
      </header>

      <div className="prose-custom">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
