import Image from 'next/image';
import GallerySwiper from './gallery-swiper';
import EaseInOutDiv from './motions/ease-in-out-div';

export default function Gallery() {
    return (
        <>
            <div className="h-[80px] w-full bg-[url('/images/illustrations/wave-top.png')] bg-cover bg-top bg-no-repeat"></div>

            <section className="bg-secondary-light px-4 py-20">
                <div className="mx-auto max-w-screen-lg">
                    {/* Header */}
                    <EaseInOutDiv className="mb-20">
                        <div className="mb-2 flex justify-center">
                            <Image width={40} height={40} src="/images/icons/feather.png" alt="Feather Icon" />
                        </div>

                        <h2 className="ff-italiana mb-2 text-center text-[32px] text-primary lg:text-[40px]">
                            Our Moments
                        </h2>

                        <span className="ff-times-new-roman block text-center text-[14px] uppercase text-primary-dark">
                            Photo Gallery
                        </span>
                    </EaseInOutDiv>

                    {/* Photo Gallery */}
                    <EaseInOutDiv className="mx-auto lg:max-w-xl">
                        <GallerySwiper />
                    </EaseInOutDiv>
                </div>
            </section>
        </>
    );
}
