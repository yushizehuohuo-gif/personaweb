import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="mb-16">
        <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">
          Writing
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
          NOTES ON
          <br />
          <span className="text-cherry">PROCESS</span>
        </h1>
        <p className="mt-6 text-text-secondary text-lg max-w-xl leading-relaxed">
          Thoughts on game design, AI art workflows, and the creative process
          behind the work.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium tracking-wider uppercase border border-border text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="
              group block
              border-t border-border
              py-8
              hover:bg-bg-elevated/50
              transition-colors duration-200
            "
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-cherry transition-colors duration-200">
                {post.title}
              </h2>
              <span className="text-sm text-text-muted whitespace-nowrap shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                / {post.readingTime}
              </span>
            </div>
            <p className="mt-3 text-text-secondary leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>

      <div className="border-b border-border" />

      {posts.length === 0 && (
        <p className="text-text-muted text-center py-24 text-lg">
          No posts yet.
        </p>
      )}
    </div>
  );
}
