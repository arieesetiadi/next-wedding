import Image from 'next/image';

export default function RsvpList() {
    return (
        <>
            <div className="h-[80px] w-full bg-[url('/images/illustrations/wave-top.png')] bg-cover bg-top bg-no-repeat"></div>

            <section className="bg-secondary-light px-4 py-20">
                <div className="mx-auto mb-5 max-w-screen-lg">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="border-b border-danger py-5">
                            <div className="mb-2 flex gap-5">
                                <span className="ff-times-new-roman text-[16px] font-[700] uppercase text-primary">
                                    Guest {i}
                                </span>

                                <div className="flex items-center gap-1 rounded-full bg-secondary px-2 py-1">
                                    <Image
                                        width="14"
                                        height="14"
                                        src="/images/icons/check-primary.svg"
                                        alt="Check Icon"
                                    />
                                    <span className="ff-times-new-roman text-[12px] text-primary lg:text-[14px]">
                                        Will Attend
                                    </span>
                                </div>
                            </div>

                            <p className="ff-times-new-roman mb-2 text-[16px] font-[400] text-primary-dark">
                                Congratulations dear Karina and Vicky ! Sending luck and love your way on your special
                                day.
                            </p>

                            <div className="flex gap-2">
                                <Image
                                    width="14"
                                    height="14"
                                    src="/images/icons/clock-primary-dark.svg"
                                    alt="Clock Icon"
                                />
                                <span className="ff-times-new-roman text-[12px] text-primary-dark lg:text-[14px]">
                                    2h ago
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button type="button" className="btn btn-primary flex items-center">
                        <span className="ff-times-new-roman inline-block text-center text-[14px] uppercase text-white">
                            Load More
                        </span>
                    </button>
                </div>
            </section>
        </>
    );
}
