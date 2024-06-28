import useCountdown from '@/hooks/use-countdown';
import Image from 'next/image';
import EaseInOutDiv from './motions/ease-in-out-div';

export default function Countdown() {
    const { days, hours, minutes, seconds } = useCountdown('2024-07-14');

    return (
        <section className="relative flex h-[400px] w-full items-center justify-center bg-[url('/images/general/photo-gallery-2.webp')] bg-cover bg-[center_10%] bg-no-repeat px-4 py-20 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-20 before:bg-[rgba(68,29,22,0.5)]">
            <EaseInOutDiv className="z-30 mx-auto w-full max-w-screen-sm">
                <h2 className="ff-italiana mb-2 text-center text-[32px] text-white lg:mb-3 lg:text-[48px]">
                    You are Invited
                </h2>

                <div className="mb-10 flex items-center justify-center gap-2 lg:mb-14">
                    <Image width={16} height={16} src="/images/icons/date-white.svg" alt="Date Icon" />
                    <span className="ff-inter block text-center text-[16px] uppercase text-white lg:text-[20px]">
                        Sunday, July 14th 2024
                    </span>
                </div>

                <div className="flex gap-2 lg:gap-5">
                    {/* Days Counter */}
                    <div className="w-1/4">
                        <div className="h-full w-full rounded-[8px] bg-light py-3">
                            <span className="ff-playfair mb-1 block text-center text-[24px] font-[700] leading-none text-primary lg:text-[40px]">
                                {days}
                            </span>

                            <span className="ff-times-new-roman block text-center text-[12px] font-[400] uppercase text-primary">
                                Days
                            </span>
                        </div>
                    </div>

                    {/* Hours Counter */}
                    <div className="w-1/4">
                        <div className="h-full w-full rounded-[8px] bg-light py-3">
                            <span className="ff-playfair mb-1 block text-center text-[24px] font-[700] leading-none text-primary lg:text-[40px]">
                                {hours}
                            </span>

                            <span className="ff-times-new-roman block text-center text-[12px] font-[400] uppercase text-primary">
                                Hours
                            </span>
                        </div>
                    </div>

                    {/* Minutes Counter */}
                    <div className="w-1/4">
                        <div className="h-full w-full rounded-[8px] bg-light py-3">
                            <span className="ff-playfair mb-1 block text-center text-[24px] font-[700] leading-none text-primary lg:text-[40px]">
                                {minutes}
                            </span>

                            <span className="ff-times-new-roman block text-center text-[12px] font-[400] uppercase text-primary">
                                Minutes
                            </span>
                        </div>
                    </div>

                    {/* Seconds Counter */}
                    <div className="w-1/4">
                        <div className="h-full w-full rounded-[8px] bg-light py-3">
                            <span className="ff-playfair mb-1 block text-center text-[24px] font-[700] leading-none text-primary lg:text-[40px]">
                                {seconds}
                            </span>

                            <span className="ff-times-new-roman block text-center text-[12px] font-[400] uppercase text-primary">
                                Seconds
                            </span>
                        </div>
                    </div>
                </div>
            </EaseInOutDiv>
        </section>
    );
}
