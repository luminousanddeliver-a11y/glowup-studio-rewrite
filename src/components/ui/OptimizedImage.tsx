import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  aspectRatio?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  objectFit = "cover",
  aspectRatio,
  fallbackSrc,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Start loading 50px before image enters viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  // Try WebP first, fallback to original
  const getImageSrc = (originalSrc: string): string => {
    // If it's already a WebP or external URL, return as is
    if (originalSrc.endsWith('.webp') || originalSrc.startsWith('http')) {
      return originalSrc;
    }

    // For local images, try WebP version
    const ext = originalSrc.substring(originalSrc.lastIndexOf('.'));
    const webpSrc = originalSrc.replace(ext, '.webp');

    return webpSrc;
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);

    // Try fallback to original format if WebP fails
    if (imageSrc.endsWith('.webp')) {
      const ext = src.substring(src.lastIndexOf('.'));
      setImageSrc(src);
    } else if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }

    onError?.();
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: width ? `${width}px` : '100%',
    paddingBottom: aspectRatio || (height && width ? `${(height / width) * 100}%` : undefined),
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    objectFit,
    ...(aspectRatio || (height && width) ? {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    } : {}),
  };

  return (
    <div
      ref={imgRef}
      style={containerStyle}
      className={cn("relative", className)}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-muted animate-pulse"
          aria-label="Loading image"
        />
      )}

      {/* Actual image - only render when visible */}
      {isVisible && (
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          style={imageStyle}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            hasError && "hidden"
          )}
          {...props}
        />
      )}

      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

// Blur-up image component for hero images
interface BlurUpImageProps extends OptimizedImageProps {
  blurDataURL?: string;
}

export const BlurUpImage = ({
  src,
  alt,
  blurDataURL,
  className,
  ...props
}: BlurUpImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Blurred placeholder */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover filter blur-xl scale-110"
        />
      )}

      {/* Actual image */}
      <OptimizedImage
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

// Picture element with multiple sources for better browser support
interface ResponsiveImageProps extends Omit<OptimizedImageProps, 'srcSet'> {
  srcSet?: {
    webp?: string;
    jpg?: string;
    png?: string;
  };
  sizes?: string;
}

export const ResponsiveImage = ({
  src,
  srcSet,
  sizes = "100vw",
  alt,
  className,
  priority = false,
  ...props
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted skeleton-shimmer" />
      )}

      <picture>
        {/* WebP source */}
        {srcSet?.webp && (
          <source
            type="image/webp"
            srcSet={srcSet.webp}
            sizes={sizes}
          />
        )}

        {/* JPEG source */}
        {srcSet?.jpg && (
          <source
            type="image/jpeg"
            srcSet={srcSet.jpg}
            sizes={sizes}
          />
        )}

        {/* PNG source */}
        {srcSet?.png && (
          <source
            type="image/png"
            srcSet={srcSet.png}
            sizes={sizes}
          />
        )}

        {/* Fallback img */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoading(false)}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          {...props}
        />
      </picture>
    </div>
  );
};
