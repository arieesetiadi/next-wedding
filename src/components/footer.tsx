import EaseInOutDiv from './motions/ease-in-out-div';

export default function Footer() {
    return (
        <footer className="relative h-screen w-screen bg-[url('/images/general/photo-last.webp')] bg-cover bg-center bg-no-repeat before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-10 before:bg-[rgba(68,29,22,0.2)]">
            <img
                src="/images/illustrations/wave-bottom-transparent.png"
                alt="Wave Bottom Image"
                className="absolute z-20 h-[80px] w-full object-cover object-bottom"
            />

            <EaseInOutDiv className="relative z-20 flex h-full items-center justify-center">
                <div className="content">
                    <span className="ff-times-new-roman mb-3 block text-center text-[20px] uppercase text-white lg:mb-4 lg:text-[24px]">
                        Thank You
                    </span>

                    <h1 className="ff-playfair mb-3 text-center text-[32px] font-[700] uppercase text-white lg:mb-4 lg:text-[96px]">
                        Vicky & Karina
                    </h1>
                </div>
            </EaseInOutDiv>
        </footer>
    );
}
