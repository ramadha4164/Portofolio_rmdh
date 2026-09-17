import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import type { WORKS } from "../data/portfolio";

type WorkItem = (typeof WORKS)[number];

export default function WorkCard({
  item,
  index,
}: {
  item: WorkItem;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();

  const galleryRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  /*
   * ================================
   * GALLERY DATA
   * ================================
   */

  const isCertificateWork = "certificates" in item && item.certificates;

  const certificates = isCertificateWork ? item.certificates : [];

  const gallery =
    "gallery" in item && item.gallery
      ? item.gallery
      : isCertificateWork
        ? certificates.map((certificate) => certificate.image)
        : [item.image];

  const totalSlides = gallery.length;
  const activeCertificate = isCertificateWork
    ? certificates[activeIndex]
    : null;

  /*
   * ================================
   * DRAG STATE
   * ================================
   */

  const isDragging = useRef(false);
  const hasMoved = useRef(false);

  const startX = useRef(0);
  const currentX = useRef(0);
  const startScrollLeft = useRef(0);

  /*
   * ================================
   * UPDATE SLIDE
   * ================================
   */

  const updateActiveSlide = () => {
    const element = galleryRef.current;

    if (!element) return;

    const width = element.clientWidth;

    if (!width) return;

    const index = Math.round(element.scrollLeft / width);

    setActiveIndex(Math.max(0, Math.min(index, totalSlides - 1)));
  };

  /*
   * ================================
   * SCROLL LISTENER
   * ================================
   */

  useEffect(() => {
    const element = galleryRef.current;

    if (!element) return;

    element.addEventListener("scroll", updateActiveSlide, {
      passive: true,
    });

    return () => {
      element.removeEventListener("scroll", updateActiveSlide);
    };
  }, [totalSlides]);

  /*
   * ================================
   * GO TO SLIDE
   * ================================
   */

  const goToSlide = (index: number, smooth = true) => {
    const element = galleryRef.current;

    if (!element) return;

    const safeIndex = Math.max(0, Math.min(index, totalSlides - 1));

    element.scrollTo({
      left: safeIndex * element.clientWidth,

      behavior: smooth ? "smooth" : "auto",
    });

    setActiveIndex(safeIndex);
  };

  /*
   * ================================
   * OPEN LIGHTBOX
   * ================================
   */

  const openLightbox = (e: React.MouseEvent) => {
    /*
     * Jangan buka jika user
     * sedang melakukan drag
     */
    if (hasMoved.current) {
      hasMoved.current = false;
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    setActiveIndex(Math.max(0, Math.min(activeIndex, totalSlides - 1)));

    setLightboxOpen(true);

    document.body.style.overflow = "hidden";
  };

  /*
   * ================================
   * CLOSE LIGHTBOX
   * ================================
   */

  const closeLightbox = () => {
    setLightboxOpen(false);

    document.body.style.overflow = "";
  };

  /*
   * ================================
   * ESC / KEYBOARD
   * ================================
   */

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();

        setActiveIndex((current) => Math.min(current + 1, totalSlides - 1));
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();

        setActiveIndex((current) => Math.max(current - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, totalSlides]);

  /*
   * ================================
   * CARD POINTER DOWN
   * ================================
   */

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const element = galleryRef.current;

    if (!element) return;

    isDragging.current = true;
    hasMoved.current = false;

    startX.current = e.clientX;
    currentX.current = e.clientX;

    startScrollLeft.current = element.scrollLeft;

    element.setPointerCapture(e.pointerId);

    element.classList.add("is-dragging");
  };

  /*
   * ================================
   * CARD POINTER MOVE
   * ================================
   */

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const element = galleryRef.current;

    if (!element || !isDragging.current) {
      return;
    }

    currentX.current = e.clientX;

    const distance = currentX.current - startX.current;

    /*
     * 6px tolerance agar tap
     * tidak dianggap drag
     */
    if (Math.abs(distance) > 6) {
      hasMoved.current = true;
    }

    /*
     * Geser langsung mengikuti mouse
     */
    element.scrollLeft = startScrollLeft.current - distance;
  };

  /*
   * ================================
   * CARD POINTER UP
   * ================================
   */

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const element = galleryRef.current;

    if (!element) return;

    isDragging.current = false;

    if (element.hasPointerCapture(e.pointerId)) {
      element.releasePointerCapture(e.pointerId);
    }

    element.classList.remove("is-dragging");

    /*
     * Snap ke slide terdekat
     */
    const width = element.clientWidth;

    if (width) {
      const index = Math.round(element.scrollLeft / width);

      goToSlide(index);
    }
  };

  /*
   * ================================
   * CARD POINTER CANCEL
   * ================================
   */

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    const element = galleryRef.current;

    if (!element) return;

    isDragging.current = false;

    if (element.hasPointerCapture(e.pointerId)) {
      element.releasePointerCapture(e.pointerId);
    }

    element.classList.remove("is-dragging");

    updateActiveSlide();
  };

  /*
   * ================================
   * WHEEL
   * ================================
   */

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const element = galleryRef.current;

    if (!element || totalSlides <= 1) {
      return;
    }

    /*
     * Desktop mouse wheel
     */
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (!delta) return;

    /*
     * Jangan mengganggu scroll
     * vertikal terlalu agresif.
     */
    if (Math.abs(e.deltaX) > 0) {
      e.preventDefault();

      element.scrollLeft += e.deltaX;
    }
  };

  /*
   * ================================
   * CARD CLICK
   * ================================
   */

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasMoved.current) {
      e.preventDefault();
      e.stopPropagation();

      hasMoved.current = false;
    }
  };

  /*
   * ================================
   * LIGHTBOX SWIPE
   * ================================
   */

  const lightboxStartX = useRef(0);

  const lightboxDragging = useRef(false);

  const handleLightboxPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    lightboxDragging.current = true;

    lightboxStartX.current = e.clientX;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handleLightboxPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!lightboxDragging.current) {
      return;
    }

    lightboxDragging.current = false;

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    const distance = e.clientX - lightboxStartX.current;

    /*
     * Swipe threshold
     */
    if (Math.abs(distance) < 50) {
      return;
    }

    if (distance < 0) {
      setActiveIndex((current) => Math.min(current + 1, totalSlides - 1));
    } else {
      setActiveIndex((current) => Math.max(current - 1, 0));
    }
  };

  /*
   * ================================
   * CLEANUP
   * ================================
   */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* ==================================
          WORK CARD
      ================================== */}

      <a
        ref={ref}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCardClick}
        className={`work-card block transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          transitionDelay: `${index * 80}ms`,
        }}
      >
        {/* ==================================
            IMAGE / GALLERY
        ================================== */}

        <div
          className="relative overflow-hidden aspect-[4/3] group bg-[#151515]"
          onClick={openLightbox}
        >
          <div
            ref={galleryRef}
            className="project-gallery absolute inset-0"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onWheel={handleWheel}
          >
            {gallery.map((image, imageIndex) => (
              <div key={imageIndex} className="project-gallery-slide">
                <img
                  src={image}
                  alt={`${item.title} ${imageIndex + 1}`}
                  draggable={false}
                />
              </div>
            ))}

            {/* COUNTER */}

            {totalSlides > 1 && (
              <div className="gallery-number">
                {String(activeIndex + 1).padStart(2, "0")}

                <i>/</i>

                {String(totalSlides).padStart(2, "0")}
              </div>
            )}

            {/* PROGRESS */}

            {totalSlides > 1 && (
              <div className="gallery-progress">
                <span
                  style={{
                    width: `${((activeIndex + 1) / totalSlides) * 100}%`,
                  }}
                />
              </div>
            )}

            {/* SWIPE HINT */}

            {totalSlides > 1 && activeIndex === 0 && (
              <div className="gallery-hint">Swipe / Drag</div>
            )}
          </div>

          {/* OVERLAY */}

          <div className="card-overlay absolute inset-0 bg-[#0A0A0A]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <div className="flex items-center gap-2 text-white text-sm font-bold tracking-widest uppercase">
              {isCertificateWork ? "Open Certificates" : "Open Gallery"}

              <ExternalLink size={14} />
            </div>
          </div>

          {/* RED BAR */}

          <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#E83A2C] transition-all duration-500 group-hover:w-full z-30" />
        </div>

        {/* ==================================
            INFORMATION
        ================================== */}

        <div className="pt-4 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="mono text-xs text-[#8A8A8A]">{item.id}</span>

              <span className="text-xs text-[#8A8A8A] uppercase tracking-widest">
                {item.category}
              </span>
            </div>

            <h3 className="font-bold text-xl tracking-tight text-[#F0EFEC]">
              {item.title}
            </h3>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="mono text-xs text-[#8A8A8A]">{item.year}</span>

            <div
              className="w-3 h-3"
              style={{
                backgroundColor: item.accent,
              }}
            />
          </div>
        </div>
      </a>

      {/* ==================================
          FULLSCREEN LIGHTBOX
      ================================== */}

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          {/* TOP */}

          <div className="lightbox-top">
            <div>
              <span className="lightbox-project-id">{item.id}</span>

              <span className="lightbox-title">{item.title}</span>
            </div>

            <button
              type="button"
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation();

                closeLightbox();
              }}
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* IMAGE */}

          <div
            className="lightbox-stage"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={handleLightboxPointerDown}
            onPointerUp={handleLightboxPointerUp}
          >
            {isCertificateWork && activeCertificate ? (
              <div className="certificate-lightbox">
                <img
                  key={activeIndex}
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  draggable={false}
                  className="lightbox-image"
                />

                <div className="certificate-info">
                  <div>
                    <span className="certificate-year">
                      {activeCertificate.year}
                    </span>

                    <h3>{activeCertificate.title}</h3>
                  </div>

                  <a
                    href={activeCertificate.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-pdf-button"
                    onClick={(e) => e.stopPropagation()}
                  >
                    OPEN PDF
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            ) : (
              <img
                key={activeIndex}
                src={gallery[activeIndex]}
                alt={`${item.title} ${activeIndex + 1}`}
                draggable={false}
                className="lightbox-image"
              />
            )}

            {/* PREVIOUS */}

            <button
              type="button"
              className="lightbox-arrow lightbox-arrow-left"
              disabled={activeIndex === 0}
              onClick={() =>
                setActiveIndex((current) => Math.max(current - 1, 0))
              }
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>

            {/* NEXT */}

            <button
              type="button"
              className="lightbox-arrow lightbox-arrow-right"
              disabled={activeIndex === totalSlides - 1}
              onClick={() =>
                setActiveIndex((current) =>
                  Math.min(current + 1, totalSlides - 1),
                )
              }
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* BOTTOM */}

          <div className="lightbox-bottom">
            <div className="lightbox-counter">
              {String(activeIndex + 1).padStart(2, "0")}

              <i>/</i>

              {String(totalSlides).padStart(2, "0")}
            </div>

            <div className="lightbox-category">{item.category}</div>
          </div>
        </div>
      )}
    </>
  );
}
