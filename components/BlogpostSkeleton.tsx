import { Skeleton } from "./ui/skeleton";

export function BlogpostSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-lg bg-white shadow-md"
        >
          <Skeleton className="h-48 w-full rounded-none mb-4" />

          <Skeleton className="h-6 w-3/4 mb-2 mx-4" />
          <Skeleton className="h-4 w-full mb-2 mx-4" />
          <Skeleton className="h-4 w-5/6 mb-4 mx-4" />

          <div className="flex items-center justify-between mb-4 mx-4">
            <div className="flex items-center space-x-2">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}
