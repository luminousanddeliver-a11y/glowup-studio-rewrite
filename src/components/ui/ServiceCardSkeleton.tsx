import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ServiceCardSkeletonProps {
  count?: number;
}

export const ServiceCardSkeleton = ({ count = 4 }: ServiceCardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Card 
          key={index} 
          className="bg-card border-border shadow-card overflow-hidden h-full"
        >
          {/* Image Skeleton */}
          <div className="aspect-square overflow-hidden">
            <Skeleton className="w-full h-full skeleton-shimmer" />
          </div>
          
          <CardHeader className="pb-3">
            {/* Title */}
            <Skeleton className="h-6 w-3/4 skeleton-shimmer" />
            {/* Trust Signal */}
            <div className="flex items-center gap-1 mt-1">
              <Skeleton className="h-3 w-3 rounded-full skeleton-shimmer" />
              <Skeleton className="h-4 w-24 skeleton-shimmer" />
            </div>
          </CardHeader>
          
          <CardContent className="pb-4">
            {/* Description */}
            <Skeleton className="h-4 w-full mb-2 skeleton-shimmer" />
            <Skeleton className="h-4 w-5/6 mb-4 skeleton-shimmer" />
            
            {/* Price and Rating */}
            <div className="flex items-center justify-between mt-4">
              <Skeleton className="h-5 w-20 skeleton-shimmer" />
              <div className="flex items-center gap-1">
                <Skeleton className="h-3 w-3 skeleton-shimmer" />
                <Skeleton className="h-4 w-8 skeleton-shimmer" />
              </div>
            </div>
          </CardContent>
          
          <CardFooter>
            <Skeleton className="h-5 w-24 skeleton-shimmer" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};
