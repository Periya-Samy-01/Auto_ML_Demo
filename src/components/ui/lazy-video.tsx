"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
}

export function LazyVideo({ src, poster, className, ...props }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Pre-load slightly before it enters the viewport
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cn("relative w-full h-full bg-surface/50 rounded-lg overflow-hidden", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-surface animate-pulse">
          <div className="w-12 h-12 rounded-full bg-border" />
        </div>
      )}
      <video
        ref={videoRef}
        src={isIntersecting ? src : undefined}
        poster={poster}
        className={cn("w-full h-full object-cover transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0")}
        onCanPlay={() => setIsLoaded(true)}
        muted
        loop
        playsInline
        autoPlay={isIntersecting}
        {...props}
      />
    </div>
  );
}
