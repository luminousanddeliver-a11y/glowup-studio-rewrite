import { Skeleton } from "@/components/ui/skeleton";

export const ServicePageSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal hero skeleton - fast render */}
      <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Content side */}
            <div className="order-2 lg:order-1 space-y-4">
              <Skeleton className="h-1 w-12" />
              <Skeleton className="h-10 w-3/4 md:h-12" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-16 w-full max-w-md" />
              <div className="flex gap-3 pt-2">
                <Skeleton className="h-12 w-36" />
                <Skeleton className="h-12 w-32 hidden sm:block" />
              </div>
            </div>
            {/* Image side - visible on mobile too */}
            <div className="order-1 lg:order-2">
              <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats - simplified */}
      <section className="py-6 border-y border-border">
        <div className="container-custom">
          <div className="flex justify-around gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-16 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content placeholder - minimal */}
      <section className="py-10">
        <div className="container-custom max-w-3xl">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </section>
    </div>
  );
};