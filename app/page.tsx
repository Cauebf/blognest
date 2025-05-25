import { BlogPost } from "@/lib/generated/prisma";
import { prisma } from "./utils/db";
import { BlogPostCard } from "@/components/BlogpostCard";
import { Suspense } from "react";
import { BlogpostSkeleton } from "@/components/BlogpostSkeleton";

async function getData() {
  const data: BlogPost[] = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      authorId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      {/* Suspense boundary doesn't work on async functions */}
      <Suspense fallback={<BlogpostSkeleton />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item: BlogPost) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
