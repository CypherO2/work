"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { artPieces, artSrc, type ArtPiece } from "@/lib/art";
import { masonry } from "@/lib/ui";

function ArtLightbox({
  piece,
  onClose,
}: {
  piece: ArtPiece;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);
  const titleId = useId();
  onCloseRef.current = onClose;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    document.body.style.overflow = "hidden";
    dialog.showModal();

    const onDialogClose = () => {
      document.body.style.removeProperty("overflow");
      onCloseRef.current();
    };
    dialog.addEventListener("close", onDialogClose);
    return () => {
      dialog.removeEventListener("close", onDialogClose);
      document.body.style.removeProperty("overflow");
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] m-auto w-[min(100%-1.5rem,56rem)] max-h-[min(92vh,48rem)] rounded-[0.35rem] border border-panel-border bg-[rgba(8,12,18,0.98)] p-0 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.55)] open:flex open:flex-col backdrop:bg-black/75 backdrop:backdrop-blur-[2px]"
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <header className="flex shrink-0 items-start justify-between gap-3 border-b border-panel-border px-4 py-3">
        <div className="min-w-0">
          <h2 id={titleId} className="m-0 truncate text-[1.1rem] font-bold">
            {piece.title}
          </h2>
          {piece.tags && piece.tags.length > 0 ? (
            <p className="m-0 mt-1 text-xs text-muted">{piece.tags.join(", ")}</p>
          ) : null}
        </div>
        <form method="dialog">
          <button
            type="submit"
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-[0.35rem] border border-panel-border bg-transparent text-muted hover:border-accent hover:text-ink"
            aria-label="Close"
          >
            <X className="h-4 w-4" aria-hidden={true} />
          </button>
        </form>
      </header>
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-3">
        <img
          src={withBase(artSrc(piece.file))}
          alt={piece.title}
          className="max-h-[min(78vh,40rem)] w-auto max-w-full object-contain"
        />
      </div>
    </dialog>
  );
}

export default function GalleryComp() {
  const [active, setActive] = useState<ArtPiece | null>(null);

  return (
    <>
      <div className={masonry}>
        {artPieces.map((piece) => (
          <button
            key={piece.file}
            type="button"
            onClick={() => setActive(piece)}
            className="group mb-4 w-full cursor-pointer break-inside-avoid border-0 bg-transparent p-0 text-left"
          >
            <img
              src={withBase(artSrc(piece.file))}
              alt={piece.title}
              loading="lazy"
              decoding="async"
              className="block w-full rounded-[0.35rem] border border-panel-border transition-[border-color,transform] group-hover:border-accent group-focus-visible:border-accent"
            />
            <span className="img-caption mt-1.5 block truncate px-0.5 text-sm text-muted group-hover:text-accent">
              {piece.title}
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <ArtLightbox piece={active} onClose={() => setActive(null)} />
      ) : null}
    </>
  );
}
