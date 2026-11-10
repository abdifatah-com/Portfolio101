import Link from "next/link";
import Image from "next/legacy/image";
import type { PostType } from "@/types";
import { getFeaturedPosts } from "@/lib/content";

export default async function FeaturedPosts({ params }: { params?: string }) {
  const featuredPosts: PostType[] = getFeaturedPosts();

  return (
    <>
      {featuredPosts.map((post) =>
        post.slug === params ? null : (
          <article
            key={post._id}
            className="mb-4 flex lg:flex-row flex-col"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="flex flex-col gap-4 dark:bg-primary-bg bg-secondary-bg p-5 rounded-lg border dark:border-zinc-800 border-zinc-200"
            >
              <Image
                src={post.coverImage?.image}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                alt={post.coverImage?.alt || post.title}
                width={400}
                height={230}
                placeholder={post.coverImage?.lqip ? "blur" : "empty"}
                blurDataURL={post.coverImage?.lqip || ""}
                quality={100}
                loading="lazy"
              />
              <div className="max-w-lg">
                <h2 className="max-w-sm text-lg tracking-tight mb-4">
                  {post.title}
                </h2>
                <p className="dark:text-zinc-400 text-zinc-600 text-sm">
                  {post.description.slice(0, 80).padEnd(83, "...")}
                </p>
              </div>
            </Link>
          </article>
        )
      )}
    </>
  );
}
