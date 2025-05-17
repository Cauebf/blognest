import { prisma } from "./utils/db";

type BlogPost = {
  title: string;
  content: string;
  imageUrl: string;
  authorImage: string;
  authorName: string;
  id: string;
  createdAt: Date;
};

async function getData() {
  const data: BlogPost[] = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
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
