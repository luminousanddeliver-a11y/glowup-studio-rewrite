import { Skeleton } from "@/components/ui/skeleton";

interface HeroSkeletonProps {
  variant?: "home" | "service" | "blog";
}

export const HeroSkeleton = ({ variant = "home" }: HeroSkeletonProps) => {
  if (variant === "blog") {
    return (
      <section className="relative -mt-[80px]">
        <div className="relative h-[35vh] md:h-[40vh] lg:h-[45vh] overflow-hidden">
          <Skeleton className="absolute inset-0 skeleton-shimmer" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pt-[80px] pb-3 md:pb-4">
          <div className="container-custom max-w-5xl">
            <Skeleton className="h-4 w-32 mb-2 skeleton-shimmer" />
            <div className="flex gap-2 mb-2">
              <Skeleton className="h-5 w-20 rounded-full skeleton-shimmer" />
              <Skeleton className="h-5 w-24 rounded-full skeleton-shimmer" />
            </div>
            <Skeleton className="h-8 w-3/4 mb-2 skeleton-shimmer" />
            <Skeleton className="h-4 w-1/2 hidden sm:block skeleton-shimmer" />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "service") {
    return (
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-background -mt-[80px] pt-[88px] pb-16 md:pt-[92px] md:pb-20 lg:pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Skeleton className="h-4 w-40 mb-4 mx-auto lg:mx-0 skeleton-shimmer" />
              <Skeleton className="w-12 h-1 mb-6 mx-auto lg:mx-0 skeleton-shimmer" />
              <Skeleton className="h-5 w-32 rounded-full mb-4 mx-auto lg:mx-0 skeleton-shimmer" />
              <Skeleton className="h-12 w-full max-w-md mb-4 mx-auto lg:mx-0 skeleton-shimmer" />
              <Skeleton className="h-8 w-3/4 max-w-sm mb-4 mx-auto lg:mx-0 skeleton-shimmer" />
              <Skeleton className="h-20 w-full max-w-lg mb-6 mx-auto lg:mx-0 skeleton-shimmer" />
              <div className="flex gap-4 justify-center lg:justify-start mb-6">
                <Skeleton className="h-14 w-48 rounded-md skeleton-shimmer" />
                <Skeleton className="h-14 w-40 rounded-md skeleton-shimmer" />
              </div>
            </div>
            <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
              <Skeleton className="w-full aspect-[4/3] rounded-2xl skeleton-shimmer" />
              <Skeleton className="absolute -bottom-8 right-4 lg:-right-6 w-[200px] h-24 rounded-xl skeleton-shimmer" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default: home variant
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <Skeleton className="w-12 h-1 mb-6 mx-auto lg:mx-0 skeleton-shimmer" />
            <Skeleton className="h-14 w-full max-w-lg mb-4 mx-auto lg:mx-0 skeleton-shimmer" />
            <Skeleton className="h-6 w-3/4 max-w-md mb-4 mx-auto lg:mx-0 skeleton-shimmer" />
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <Skeleton className="h-8 w-28 rounded-full skeleton-shimmer" />
              <Skeleton className="h-8 w-36 rounded-full skeleton-shimmer" />
              <Skeleton className="h-8 w-32 rounded-full skeleton-shimmer" />
            </div>
            <Skeleton className="h-10 w-40 rounded-lg mb-6 mx-auto lg:mx-0 skeleton-shimmer" />
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Skeleton className="h-14 w-48 rounded-md skeleton-shimmer" />
              <Skeleton className="h-14 w-32 rounded-md skeleton-shimmer" />
            </div>
          </div>
          <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
            <Skeleton className="w-full aspect-[4/3] rounded-2xl skeleton-shimmer" />
            <Skeleton className="absolute -bottom-8 right-4 lg:-right-6 w-[200px] h-24 rounded-xl skeleton-shimmer" />
          </div>
        </div>
      </div>
    </section>
  );
};
