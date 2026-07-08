"use client";

import Image from "next/image";

/**
 * ZoomImage: the shared image treatment for the whole enrichment run.
 *
 * A rounded-2xl, overflow-hidden container wrapping next/image. On hover the
 * photo scales very slowly and subtly (scale 1.04 over 0.7s) for a premium,
 * alive feel. The zoom is motion-safe only: under prefers-reduced-motion the
 * image never transforms. The wrapper is its own hover group, so consumers do
 * NOT need to add a parent `group` class.
 *
 * Props:
 *   src           image URL (Unsplash, per run rules). Required.
 *   alt           honest, conservative alt text. Required.
 *   className?    classes for the OUTER wrapper: aspect ratio, width, shadow,
 *                 etc. Example: "aspect-[4/3] w-full shadow-luxe".
 *   imgClassName? extra classes merged onto the inner next/image element,
 *                 for object-position tweaks and the like.
 *   sizes?        next/image sizes hint for responsive loading.
 *   priority?     pass true only for above-the-fold imagery. Default false.
 *   fill?         use next/image fill mode. Default true, matching existing
 *                 usage. When true the wrapper needs a sized className.
 *   width?/height? required together when fill is false.
 *
 * Usage:
 *   <ZoomImage
 *     src="https://images.unsplash.com/..."
 *     alt="A resort pool at dusk"
 *     className="aspect-[4/3] w-full shadow-luxe"
 *     sizes="(min-width: 768px) 50vw, 100vw"
 *   />
 */
type ZoomImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export default function ZoomImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes,
  priority = false,
  fill = true,
  width,
  height,
}: ZoomImageProps) {
  // Slow, subtle scale on hover, disabled entirely under reduced motion.
  const imageClasses = [
    "object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]",
    imgClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${className}`.trim()}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imageClasses}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={imageClasses}
        />
      )}
    </div>
  );
}
