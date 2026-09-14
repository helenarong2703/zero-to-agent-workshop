"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/images/workshop/group-photo.webp",
    alt: "Workshop participants and organizers together at the end of From Zero to Agent",
    caption: "WORKSHOP PARTICIPANTS AND ORGANIZERS",
    width: 2400,
    height: 1351,
  },
  {
    src: "/images/workshop/gallery-06.webp",
    alt: "An organizer speaking to students during a workshop session",
    caption: "Learning in the room",
    width: 1440,
    height: 810,
  },
  {
    src: "/images/workshop/gallery-03.webp",
    alt: "Students building together around a table with their laptops",
    caption: "Building together",
    width: 1440,
    height: 810,
  },
  {
    src: "/images/workshop/gallery-04.webp",
    alt: "Two students collaborating on a laptop during the workshop",
    caption: "Peer collaboration",
    width: 1440,
    height: 810,
  },
  {
    src: "/images/workshop/gallery-02.webp",
    alt: "Students watching a live product demonstration in the workshop room",
    caption: "Live product demonstration",
    width: 1702,
    height: 1276,
  },
  {
    src: "/images/workshop/gallery-01.webp",
    alt: "A student presenting a fashion archive project to the workshop",
    caption: "Student demos · Sunday",
    width: 1707,
    height: 1280,
  },
  {
    src: "/images/workshop/gallery-05.webp",
    alt: "The five workshop organizers standing together after the program",
    caption: "The organizing team",
    width: 1707,
    height: 1280,
  },
];

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);
  const photo = photos[current];

  const move = (direction: number) => {
    setCurrent((index) => (index + direction + photos.length) % photos.length);
  };

  return (
    <figure
      className="hero-photo hero-gallery"
      aria-label="Workshop photo gallery"
      aria-roledescription="carousel"
    >
      <div className="gallery-stage">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          priority={current === 0}
          sizes="(max-width: 1080px) 100vw, 56vw"
        />
        <div className="gallery-controls" aria-label="Photo controls">
          <button
            className="gallery-arrow gallery-arrow-previous"
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <div className="gallery-dots" aria-label="Choose a photo">
            {photos.map((item, index) => (
              <button
                className="gallery-dot"
                type="button"
                key={item.src}
                onClick={() => setCurrent(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
              />
            ))}
          </div>
          <button
            className="gallery-arrow gallery-arrow-next"
            type="button"
            onClick={() => move(1)}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}
