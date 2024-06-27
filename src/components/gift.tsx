import Image from 'next/image';
import toast from 'react-hot-toast';

export default function Gift() {
    const bankAccount1 = '1234567890';
    const bankAccount2 = '0987654321';

    async function copyToClipboard(content: string) {
        try {
            await navigator.clipboard.writeText(content);
            toast.success('Copied!');
        } catch (err) {
            toast.error('Failed to Copy!');
            console.error(err);
        }
    }

    return (
        <section className="px-4 py-20">
            <div className="mx-auto max-w-screen-lg">
                {/* Header */}
                <div className="mb-10">
                    <div className="mb-2 flex justify-center">
                        <Image width={40} height={40} src="/images/icons/feather.png" alt="Feather Icon" />
                    </div>

                    <h2 className="ff-italiana mb-2 text-center text-[32px] text-primary lg:text-[40px]">
                        Wedding Gift
                    </h2>

                    <span className="ff-times-new-roman block text-center text-[20px] text-primary-dark">
                        Your blessing is a very meaningful gift for us. However, if giving is an expression of your
                        love, you can give cashless gifts.
                    </span>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap sm:gap-5 lg:gap-10">
                    <div className="mb-10 w-full sm:w-1/2">
                        <div className="overflow-hidden rounded-[8px] border border-primary">
                            <div className="flex items-center justify-center border-b border-primary p-4">
                                <Image width={77} height={24} src="/images/icons/bank-bca.png" alt="BCA Icon" />
                            </div>

                            <div className="bg-light p-4">
                                <span className="ff-dm-mono mb-3 block text-center text-[20px] font-[500] text-black lg:mb-2">
                                    {bankAccount1}
                                </span>

                                <span className="ff-times-new-roman mb-3 block text-center text-[20px] font-[400] text-primary-dark lg:mb-3">
                                    a.n. Robert Emerson
                                </span>

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => copyToClipboard(bankAccount1)}
                                        type="button"
                                        className="btn btn-rounded btn-primary w-full sm:w-auto">
                                        <div className="flex items-center justify-center gap-2">
                                            <Image
                                                width={16}
                                                height={16}
                                                src="/images/icons/copy-white.svg"
                                                alt="Copy Icon"
                                            />

                                            <span className="ff-times-new-roman text-[14px] font-[400] uppercase text-white">
                                                Copy Account Number
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                        <div className="overflow-hidden rounded-[8px] border border-primary">
                            <div className="flex items-center justify-center border-b border-primary p-4">
                                <Image width={77} height={24} src="/images/icons/bank-bca.png" alt="BCA Icon" />
                            </div>

                            <div className="bg-light p-4">
                                <span className="ff-dm-mono mb-3 block text-center text-[20px] font-[500] text-black lg:mb-2">
                                    {bankAccount2}
                                </span>

                                <span className="ff-times-new-roman mb-3 block text-center text-[20px] font-[400] text-primary-dark lg:mb-3">
                                    a.n. Emma Raducanu
                                </span>

                                <div className="flex justify-center">
                                    <button
                                        onClick={() => copyToClipboard(bankAccount2)}
                                        type="button"
                                        className="btn btn-rounded btn-primary w-full sm:w-auto">
                                        <div className="flex items-center justify-center gap-2">
                                            <Image
                                                width={16}
                                                height={16}
                                                src="/images/icons/copy-white.svg"
                                                alt="Copy Icon"
                                            />

                                            <span className="ff-times-new-roman text-[14px] font-[400] uppercase text-white">
                                                Copy Account Number
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
