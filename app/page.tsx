import { BlogPost } from "@/lib/generated/prisma";
import { prisma } from "./utils/db";

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

export default async function Home() {
  const data = await getData();

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: BlogPost) => (
          <div key={item.title} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
