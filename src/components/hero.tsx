import Image from 'next/image';

export default function Hero() {
    return (
        <section className="h-screen w-screen bg-[url('/images/general/photo-quotes-1.webp')] bg-cover bg-[center_55%] bg-no-repeat before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-[rgba(68,29,22,0.2)]">
            <div className="relative z-20 h-screen w-screen bg-[linear-gradient(180deg,#ffffff00_85%,#ffffff_100%)]">
                <div className="absolute bottom-0 left-1/2 z-30 w-screen -translate-x-1/2">
                    <span className="ff-times-new-roman mb-2 block text-center text-[20px] uppercase text-white lg:mb-3 lg:text-[24px]">
                        The Wedding Of
                    </span>

                    <h1 className="ff-playfair mb-2 block text-center text-[32px] font-[700] uppercase text-white lg:mb-5 lg:text-[96px]">
                        Vicky & Karina
                    </h1>

                    <div className="mb-14 mt-24 flex justify-center md:mt-14">
                        <Image width={24} height={24} src="/images/icons/mouse-white.svg" alt="Mouse Icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}
