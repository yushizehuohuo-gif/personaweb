import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="min-h-screen pt-32 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary text-sm tracking-wider uppercase transition-colors duration-200 mb-12"
        >
          ← Writing
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <time className="text-sm text-text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-text-muted">·</span>
            <span className="text-sm text-text-muted">{post.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium bg-cherry/20 text-cherry"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article body — editorial prose */}
        <div className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-p:text-text-secondary prose-p:leading-relaxed
          prose-strong:text-text-primary
          prose-a:text-mint prose-a:no-underline hover:prose-a:underline
          [&_h2]:text-text-primary
        ">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  );
}
