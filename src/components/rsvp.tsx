import Image from 'next/image';
import RsvpForm from './rsvp-form';

export default function Rsvp() {
    return (
        <section id="rsvp" className="pt-10 px-4 pb-20">
            <div className="mx-auto max-w-screen-lg">
                {/* Header */}
                <div className="mb-10">
                    <div className="mb-2 flex justify-center">
                        <Image width={40} height={40} src="/images/icons/feather.png" alt="Feather Icon" />
                    </div>

                    <h2 className="ff-italiana mb-2 text-center text-[32px] text-primary lg:text-[40px]">RSVP</h2>

                    <span className="ff-times-new-roman block text-center text-[20px] text-primary-dark">
                        Please RSVP to confirm your attendance at our special day
                    </span>
                </div>

                <div className="mx-auto max-w-lg">
                    <RsvpForm />
                </div>
            </div>
        </section>
    );
}
