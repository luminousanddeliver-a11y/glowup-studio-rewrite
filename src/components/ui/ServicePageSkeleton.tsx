import { Skeleton } from "@/components/ui/skeleton";

export const ServicePageSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header skeleton */}
      <div className="h-20 bg-background border-b border-border">
        <div className="container-custom h-full flex items-center justify-between">
          <Skeleton className="h-10 w-32" />
          <div className="hidden md:flex gap-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
          <Skeleton className="h-10 w-28" />
        </div>
      </div>

      {/* Hero skeleton */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-12 w-full max-w-md" />
              <Skeleton className="h-8 w-full max-w-sm" />
              <Skeleton className="h-20 w-full max-w-lg" />
              <div className="flex gap-3 pt-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-32" />
              </div>
            </div>
            <div className="hidden lg:block">
              <Skeleton className="h-80 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats skeleton */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-4">
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </section>

      {/* Benefits skeleton */}
      <section className="py-12 bg-secondary/30">
        <div className="container-custom">
          <Skeleton className="h-8 w-48 mx-auto mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card p-6 rounded-lg space-y-3">
                <Skeleton className="h-10 w-10 rounded-lg" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};