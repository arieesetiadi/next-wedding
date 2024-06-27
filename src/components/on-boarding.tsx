import { Dispatch, SetStateAction } from 'react';

type Props = {
    isOpened: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>;
};

export default function OnBoarding({ isOpened, setIsOpened }: Props) {
    return (
        <div
            className={`${isOpened ? 'bottom-[100%]' : 'bottom-0'} absolute z-50 h-screen w-screen bg-[url('/images/general/photo-quotes-1.webp')] bg-cover bg-[center_55%] bg-no-repeat transition-all duration-1000 ease-in-out`}>
            <div className="relative h-screen w-screen bg-[linear-gradient(180deg,_#FFFFFF00_30%,_#52231AE6_100%)]">
                <div className="absolute left-1/2 top-[60%] w-screen -translate-x-1/2 -translate-y-1/2 lg:top-1/2">
                    <span className="ff-times-new-roman mb-2 block text-center text-[20px] uppercase text-white lg:mb-5">
                        The Wedding Of
                    </span>

                    <h1 className="ff-playfair mb-2 block text-center text-[32px] font-[700] uppercase text-white lg:mb-5 lg:text-[48px]">
                        Vicky & Karina
                    </h1>

                    <div className="flex items-center justify-center gap-2">
                        <img src="/images/icons/date-white.svg" alt="Date Icon" />
                        <span className="ff-inter block text-center text-[20px] uppercase text-white">
                            Sunday, July 14th 2024
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 mb-5 w-screen -translate-x-1/2 px-5 lg:bottom-[5%]">
                    <p className="ff-times-new-roman mb-5 block text-center text-[16px] text-white lg:mb-10">
                        Dear Beloved Friends and Family <br />
                        We warmly invite you to join us on our special day as we celebrate our wedding
                    </p>

                    <div className="flex justify-center">
                        <button
                            onClick={() => setIsOpened(true)}
                            className="btn btn-light flex w-full justify-center lg:w-auto">
                            <div className="flex gap-2">
                                <img
                                    width={14}
                                    height={14}
                                    src="/images/icons/envelope-primary.svg"
                                    alt="Envelope Icon"
                                />
                                <span className="ff-times-new-roman text-[14px] uppercase text-primary">
                                    Open Invitation
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
