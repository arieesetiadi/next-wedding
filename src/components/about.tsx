import Image from 'next/image';
import EaseInOutDiv from './motions/ease-in-out-div';

export default function About() {
    return (
        <section className="px-4 py-20">
            <div className="mx-auto max-w-screen-lg">
                {/* Header */}
                <EaseInOutDiv className="mb-20">
                    <div className="mb-2 flex justify-center">
                        <Image width={40} height={40} src="/images/icons/feather.png" alt="Feather Icon" />
                    </div>

                    <h2 className="ff-italiana mb-2 text-center text-[32px] text-primary lg:text-[40px]">
                        Meet the Happy Couple
                    </h2>

                    <span className="ff-times-new-roman block text-center text-[14px] uppercase text-primary-dark">
                        Get to know them even better
                    </span>
                </EaseInOutDiv>

                <>
                    {/* Male */}
                    <EaseInOutDiv className="flex flex-wrap">
                        <div className="mb-5 w-full lg:mb-0 lg:w-1/2">
                            <img
                                src="/images/general/photo-male.webp"
                                alt="Male Profile Picture"
                                className="lg:w-5/6"
                            />
                        </div>

                        <div className="flex w-full items-center lg:w-1/2">
                            <div className="w-full">
                                <h3 className="ff-playfair mb-5 text-[24px] font-[600] text-primary">
                                    Vicky Pradana, S.E.
                                </h3>

                                <span className="ff-times-new-roman mb-5 block uppercase text-primary-dark">
                                    Son of Mr. Iyan Chandra & Mrs. Then Su Tjin
                                </span>

                                <div className="flex gap-2">
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/vickpradana?igsh=a2U0djMxeDNzbmg1"
                                        className="inline-flex items-center rounded-[.4rem] bg-secondary p-2">
                                        <Image
                                            width={20}
                                            height={20}
                                            src="/images/icons/instagram-primary.svg"
                                            alt="Instagram Icon"
                                        />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/vicky-pradana-331511148"
                                        className="inline-flex items-center rounded-[.4rem] bg-secondary p-2">
                                        <Image
                                            width={20}
                                            height={20}
                                            src="/images/icons/linkedin-primary.svg"
                                            alt="LinkedIn Icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </EaseInOutDiv>

                    <EaseInOutDiv className="py-5 lg:py-10">
                        <span className="ff-playfair block text-center text-[32px] uppercase text-danger">&</span>
                    </EaseInOutDiv>

                    {/* Female */}
                    <EaseInOutDiv className="flex flex-wrap">
                        <div className="order-1 mb-5 w-full lg:order-2 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end">
                            <img
                                src="/images/general/photo-female.webp"
                                alt="Male Profile Picture"
                                className="lg:w-5/6"
                            />
                        </div>

                        <div className="order-2 flex w-full items-center lg:order-1 lg:w-1/2">
                            <div className="w-full">
                                <h3 className="ff-playfair mb-5 text-end text-[24px] font-[600] text-primary">
                                    Karina Gani, S.H., M.Kn.
                                </h3>

                                <span className="ff-times-new-roman mb-5 block text-end uppercase text-primary-dark">
                                    Daughter of Mr. Kusnan Gani & Mrs. Anna Susanna Komariah
                                </span>

                                <div className="flex justify-end gap-2">
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/karinagani?igsh=ODgzeDdoaXlkNHAw"
                                        className="inline-flex items-center rounded-[.4rem] bg-secondary p-2">
                                        <Image
                                            width={20}
                                            height={20}
                                            src="/images/icons/instagram-primary.svg"
                                            alt="Instagram Icon"
                                        />
                                    </a>

                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/in/karina-gani-797674156"
                                        className="inline-flex items-center rounded-[.4rem] bg-secondary p-2">
                                        <Image
                                            width={20}
                                            height={20}
                                            src="/images/icons/linkedin-primary.svg"
                                            alt="LinkedIn Icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </EaseInOutDiv>
                </>
            </div>
        </section>
    );
}
