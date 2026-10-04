import type { ReactNode } from "react";

export function PhotoBanner({
  image,
  title,
  highlight,
  captioned = false,
  focus = "center",
  fit = "cover",
  aspect,
  textColor = "light",
  children,
}: {
  image: string;
  title?: string;
  highlight?: string;
  /** True when the image already contains its own title/caption text baked in - renders bare, no overlay. */
  captioned?: boolean;
  /** Where to anchor the crop when fit="cover" so the important part of the photo stays in frame. */
  focus?: "center" | "top";
  /** "cover" crops to a fixed banner height; "contain" fits the whole image within that same fixed
   *  height, letterboxed on the ink background; "contain-ratio" locks the container to the image's
   *  own aspect ratio so there is no letterboxing either. */
  fit?: "cover" | "contain" | "contain-ratio";
  /** CSS aspect-ratio value (e.g. "1774 / 887"), required when fit="contain-ratio". */
  aspect?: string;
  /** Title colour when there is an overlay: "light" = white title, "dark" = black title. Highlight word is always red. */
  textColor?: "light" | "dark";
  /** Custom overlay content - when provided, replaces the default title/highlight block entirely (no dark/light wash added). */
  children?: ReactNode;
}) {
  const heightClass =
    fit === "contain-ratio" ? "w-full" : "h-56 w-full sm:h-80 lg:h-[26rem]";

  return (
    <section
      className="relative isolate overflow-hidden bg-ink"
      style={fit === "contain-ratio" ? { aspectRatio: aspect } : undefined}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={`${fit === "contain-ratio" ? "absolute inset-0 h-full w-full object-contain" : fit === "contain" ? "object-contain" : "object-cover"} ${heightClass} ${
          focus === "top" ? "object-top" : "object-center"
        }`}
      />

      {children ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8">
          {children}
        </div>
      ) : captioned ? null : (
        <>
          <div
            className={`absolute inset-0 ${textColor === "dark" ? "bg-white/45" : "bg-black/60"}`}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-8">
            <h1
              className={`heading-caps text-3xl sm:text-4xl lg:text-5xl ${
                textColor === "dark"
                  ? "text-ink drop-shadow-[0_2px_6px_rgba(255,255,255,0.9)]"
                  : "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
              }`}
            >
              {title} {highlight ? <span className="text-primary">{highlight}</span> : null}
            </h1>
          </div>
        </>
      )}
    </section>
  );
}
