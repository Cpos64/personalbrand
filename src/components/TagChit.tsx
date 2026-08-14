import type { PostTag } from "@/lib/posts";

const TAG_COLORS: Record<PostTag, string> = {
  Build: "bg-[#e4e9e2] text-[#3e5c3a]",
  Markets: "bg-[#efe4cf] text-[#8a6420]",
  Miles: "bg-[#e3e6ee] text-[#3c4a75]",
  Faith: "bg-[#ede1e6] text-[#7a3f56]",
  Notes: "bg-[#e9e6e0] text-[#5b6470]",
};

export function TagChit({ tag }: { tag: PostTag }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide ${TAG_COLORS[tag]}`}
    >
      {tag}
    </span>
  );
}
