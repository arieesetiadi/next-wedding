import { useState } from 'react';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function GallerySwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            {/* Gallery */}
            <Swiper
                className="gallery-swiper mb-2 h-[300px] rounded-[8px] lg:h-[500px]"
                style={{
                    // @ts-ignore
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-1.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-2.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-left"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-3.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-[center_35%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-4.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-bottom"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-5.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-6.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-7.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-8.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-[center_75%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-9.webp`}
                        alt="Gallery Image"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-[center_20%]"
                    />
                </SwiperSlide>
            </Swiper>

            {/* Thumb */}
            <Swiper
                className="gallery-swiper-thumb swiper-thumb h-[20vw] lg:h-[120px]"
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-1-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-2-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-left"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-3-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-[center_35%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-4-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-bottom"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-5-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-6-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-7-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-8-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-[center_75%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[8px]">
                    <Image
                        src={`/images/general/photo-gallery-9-thumb.webp`}
                        alt="Gallery Image Thumb"
                        loading="lazy"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-[center_20%]"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
