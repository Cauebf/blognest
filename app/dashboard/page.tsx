import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPost } from "@/lib/generated/prisma";
import { BlogPostCard } from "@/components/BlogpostCard";
import { Suspense } from "react";
import { BlogpostSkeleton } from "@/components/BlogpostSkeleton";

async function getData(userId: string) {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default function DashboardRoute() {
  return (
    <>
      <div className="flex items-center justify-between mb-4 py-6">
        <h2 className="text-3xl font-bold tracking-tight">
          Your Blog Articles
        </h2>

        <Link className={buttonVariants()} href={"/dashboard/create"}>
          Create Post
        </Link>
      </div>

      <Suspense fallback={<BlogpostSkeleton />}>
        <BlogPosts />
      </Suspense>
    </>
  );
}

async function BlogPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user?.id as string);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item: BlogPost) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}
