'use client';

import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';

export default function BookTestimonials({
  testimonials,
}) {
  const book = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 640px)');
  const usePortrait = !isDesktop;

  const handleFlip = (pageNum) => {
    const flipBook = book.current?.pageFlip?.();
    if (!flipBook) return;
    flipBook.flip(pageNum);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/Menu.png"
        alt="Book background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Flipbook aligned over the book in the background */}
      <div className="absolute left-1/2 top-[50.5%] z-10 -translate-x-1/2 -translate-y-1/2">
        <HTMLFlipBook
          ref={book}
          width={390}
          height={500}
          showCover={false}
          usePortrait={usePortrait}
          onFlip={(e) => console.log('Flipped to page:', e.data)}
          onChangeState={(e) => console.log('State:', e.data)}
          size="fixed"
          minWidth={0}
          maxWidth={0}
          minHeight={0}
          maxHeight={0}
          drawShadow={false}
          flippingTime={900}
          startPage={0}
          startZIndex={0}
          autoSize={false}
          maxShadowOpacity={0}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={0}
          showPageCorners={false}
          disableFlipByClick={false}
          className=""
          style={{ backgroundColor: 'transparent' }}
        >
          {/* Left intro page */}
          <div className="flex h-full w-full flex-col justify-start bg-transparent px-10 py-12 text-[#2b1d14]">
            <h1 className="mt-4 text-center font-serif text-3xl font-bold tracking-wide">
              Testimonial Book
            </h1>
            <div className="mt-6 border-b border-[#6d4c38]/40 pb-4 text-center text-sm italic">
              Read what people are saying
            </div>

            <div className="mt-10 text-sm leading-7">
              <p>
                This book contains selected testimonials from our happy users.
              </p>
              <p className="mt-4">
                Turn the page to browse the index and jump to a testimonial.
              </p>
            </div>

            <div className="mt-auto text-center text-xs tracking-[0.2em] text-[#6d4c38]">
              OPEN FILE
            </div>
          </div>

          {/* Right index page */}
          <div className="flex h-full w-full flex-col bg-transparent px-10 py-12 text-[#2b1d14]">
            <h2 className="text-center font-serif text-2xl font-semibold">
              Index
            </h2>

            <ol className="mt-8 space-y-3">
              {testimonials.map((testimonial, index) => (
                <li
                  key={index}
                  onClick={() => handleFlip(index + 2)}
                  className="flex cursor-pointer items-center justify-between border-b border-[#6d4c38]/20 pb-2 text-sm hover:opacity-70"
                >
                  <div className="flex items-center gap-3">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={26}
                        height={26}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-[26px] w-[26px] rounded-full bg-[#6d4c38]/20" />
                    )}
                    <span>{testimonial.name}</span>
                  </div>
                  <span>{index + 2}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Testimonial pages */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-center bg-transparent px-10 py-10 text-[#2b1d14]"
            >
              <div className="w-full text-right text-xs text-[#6d4c38]">
                {index + 2}
              </div>

              <div className="mt-2">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={90}
                    height={90}
                    className="rounded-full object-cover shadow-sm"
                  />
                ) : (
                  <div className="h-[90px] w-[90px] rounded-full bg-[#6d4c38]/20" />
                )}
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-serif text-2xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm italic text-[#6d4c38]">
                  {testimonial.jobtitle}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={`filled-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#8B0000"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <svg
                    key={`empty-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#bca28d"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              <div className="mt-8 flex flex-1 items-start justify-center">
                <p className="max-w-[280px] text-center font-serif text-lg leading-8">
                  “{testimonial.text}”
                </p>
              </div>
            </div>
          ))}

          {/* Ending page */}
          <div className="flex h-full w-full flex-col items-center justify-center bg-transparent px-10 py-12 text-[#2b1d14]">
            <h2 className="font-serif text-3xl font-bold">Thank You</h2>
            <p className="mt-4 text-center text-base italic">
              We appreciate your feedback and support.
            </p>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}
