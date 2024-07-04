import * as invitationApi from '@/lib/api/invitation.api';
import { InvitationWithRsvps } from '@/lib/types/invitation.type';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EaseInOutDiv from './motions/ease-in-out-div';
import RsvpForm from './rsvp-form';

export default function Rsvp() {
    const [invitation, setInvitation] = useState<InvitationWithRsvps | null>(null);

    const router = useRouter();
    const guestCode = router.query.guest as string;

    useEffect(() => {
        if (guestCode) {
            (async function fetchInvitation() {
                const results = await invitationApi.findByCode(guestCode);
                setInvitation(results);
            })();
        }
    }, [guestCode]);

    return (
        <>
            {!!invitation && (
                <section id="rsvp" className="px-4 pb-20 pt-10">
                    <div className="mx-auto max-w-screen-lg">
                        {/* Header */}
                        <EaseInOutDiv className="mb-10">
                            <div className="mb-2 flex justify-center">
                                <Image width={40} height={40} src="/images/icons/feather.png" alt="Feather Icon" />
                            </div>

                            <h2 className="ff-italiana mb-2 text-center text-[32px] text-primary lg:text-[40px]">
                                RSVP
                            </h2>

                            <span className="ff-times-new-roman block text-center text-[20px] text-primary-dark">
                                Please RSVP to confirm your attendance at our special day
                            </span>
                        </EaseInOutDiv>

                        <EaseInOutDiv className="mx-auto max-w-lg">
                            <RsvpForm invitation={invitation} />
                        </EaseInOutDiv>
                    </div>
                </section>
            )}
        </>
    );
}
