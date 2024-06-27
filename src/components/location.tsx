import Image from 'next/image';

export default function Location() {
    return (
        <section className="px-4 py-20">
            <div className="mx-auto max-w-screen-lg">
                {/* Holy Matrimony */}
                <div className="mb-16 flex flex-wrap lg:mb-28">
                    <div className="mb-5 w-full lg:mb-0 lg:w-1/2">
                        <div className="h-[350px] w-full border-0 lg:h-[400px] lg:w-[400px]">
                            <iframe
                                // @ts-ignore
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6478048962495!2d106.77349047732085!3d-6.177877877847876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6f89de4cd91%3A0x563a3c71566860cb!2sWihara%20Ekayana%20Arama!5e0!3m2!1sen!2sid!4v1718340845243!5m2!1sen!2sid"
                                className="h-full w-full border-0"></iframe>
                        </div>
                    </div>

                    <div className="mt-5 flex w-full items-center lg:mb-0 lg:mt-0 lg:w-1/2">
                        <div>
                            <Image
                                width={40}
                                height={40}
                                src="/images/icons/feather.png"
                                alt="Feather Icon"
                                className="mb-3 lg:mb-5"
                            />

                            <h3 className="ff-playfair mb-3 text-[24px] font-[600] uppercase text-primary lg:mb-5">
                                Holy Matrimony
                            </h3>

                            <div className="mb-3 block py-2 lg:mb-5 lg:flex lg:gap-5">
                                <div className="mb-3 flex items-center gap-2 lg:mb-0">
                                    <div className="grid place-items-center rounded-full bg-secondary p-2">
                                        <Image
                                            width={14}
                                            height={14}
                                            src="/images/icons/date-primary.svg"
                                            alt="Calendar Icon"
                                        />
                                    </div>

                                    <span className="ff-times-new-roman inline-block text-[16px] font-[400] uppercase text-primary-dark">
                                        Sunday, July 14th 2024
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="grid place-items-center rounded-full bg-secondary p-2">
                                        <Image
                                            width={14}
                                            height={14}
                                            src="/images/icons/clock-primary.svg"
                                            alt="Clock Icon"
                                        />
                                    </div>

                                    <span className="ff-times-new-roman inline-block text-[16px] font-[400] uppercase text-primary-dark">
                                        11.00 WIB
                                    </span>
                                </div>
                            </div>

                            <div className="mb-3 lg:mb-5">
                                <span className="ff-times-new-roman mb-3 block text-[16px] font-[700] uppercase text-primary-dark">
                                    Vihara Ekayana Arama
                                </span>

                                <span className="ff-times-new-roman block text-[16px] font-[400] text-primary-dark">
                                    Jl. Mangga II No. 8, Duri Kepa, Jakarta Barat 11510
                                </span>
                            </div>

                            <div className="py-2">
                                <a
                                    target="_blank"
                                    href="https://maps.app.goo.gl/yHTG8pd8d3W3CRbq8"
                                    className="btn btn-primary inline-flex w-auto items-center justify-center gap-2">
                                    <Image
                                        width={14}
                                        height={14}
                                        src="/images/icons/location-white.svg"
                                        alt="Map Poin Icon"
                                    />
                                    <span className="ff-times-new-roman text-[14px] uppercase text-white">
                                        Visit Location
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seated Wedding Dinner */}
                <div className="flex flex-wrap">
                    <div className="order-1 mb-5 w-full lg:order-2 lg:mb-0 lg:w-1/2">
                        <div className="h-[350px] w-full border-0 lg:h-[400px] lg:w-[400px]">
                            <iframe
                                // @ts-ignore
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.299399974155!2d106.82140907475059!3d-6.224196993763868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3fb868429b7%3A0xfff19a4591765cb1!2sArts%20Caf%C3%A9%20by%20Raffles%20Jakarta!5e0!3m2!1sen!2sid!4v1718340952231!5m2!1sen!2sid"
                                className="h-full w-full border-0"></iframe>
                        </div>
                    </div>

                    <div className="order-2 mt-5 flex w-full items-center lg:order-1 lg:mb-0 lg:mt-0 lg:w-1/2">
                        <div>
                            <Image
                                width={40}
                                height={40}
                                src="/images/icons/feather.png"
                                alt="Feather Icon"
                                className="mb-3 lg:mb-5"
                            />

                            <h3 className="ff-playfair mb-3 text-[24px] font-[600] uppercase text-primary lg:mb-5">
                                Seated Wedding Dinner
                            </h3>

                            <div className="mb-3 block py-2 lg:mb-5 lg:flex lg:gap-5">
                                <div className="mb-3 flex items-center gap-2 lg:mb-0">
                                    <div className="grid place-items-center rounded-full bg-secondary p-2">
                                        <Image
                                            width={14}
                                            height={14}
                                            src="/images/icons/date-primary.svg"
                                            alt="Calendar Icon"
                                        />
                                    </div>

                                    <span className="ff-times-new-roman inline-block text-[16px] font-[400] uppercase text-primary-dark">
                                        Sunday, July 14th 2024
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="grid place-items-center rounded-full bg-secondary p-2">
                                        <Image
                                            width={14}
                                            height={14}
                                            src="/images/icons/clock-primary.svg"
                                            alt="Clock Icon"
                                        />
                                    </div>

                                    <span className="ff-times-new-roman inline-block text-[16px] font-[400] uppercase text-primary-dark">
                                        18.00 WIB
                                    </span>
                                </div>
                            </div>

                            <div className="mb-3 lg:mb-5">
                                <span className="ff-times-new-roman mb-3 block text-[16px] font-[700] uppercase text-primary-dark">
                                    Arts Café - Raffles Jakarta Hotel, 1st Floor
                                </span>

                                <span className="ff-times-new-roman block text-[16px] font-[400] text-primary-dark">
                                    Jl. Prof. Dr. Satrio Kav 3-5, Ciputra World 1. 12940. Jakarta Selatan
                                </span>
                            </div>

                            <div className="py-2">
                                <a
                                    target="_blank"
                                    href="https://maps.app.goo.gl/aRAAfCjuQMgYrzrYA"
                                    className="btn btn-primary inline-flex w-auto items-center justify-center gap-2">
                                    <Image
                                        width={14}
                                        height={14}
                                        src="/images/icons/location-white.svg"
                                        alt="Map Poin Icon"
                                    />
                                    <span className="ff-times-new-roman text-[14px] uppercase text-white">
                                        Visit Location
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
