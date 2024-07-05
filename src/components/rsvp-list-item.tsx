import { getDatetimeDiff } from '@/lib/helpers/date.helper';
import { RsvpWithInvitation } from '@/lib/types/rsvp.type';
import Image from 'next/image';

type Props = {
    rsvp: RsvpWithInvitation;
};

export default function RsvpListItem({ rsvp }: Props) {
    return (
        <div className="border-b border-danger py-5">
            <div className="mb-2 flex gap-5">
                <span className="ff-times-new-roman text-[16px] font-[700] uppercase text-primary">
                    {rsvp.invitation.name}
                </span>

                <div className="flex items-center gap-1 rounded-full bg-secondary px-2 py-1">
                    <Image
                        width="14"
                        height="14"
                        src={`/images/icons/${rsvp.isAttend ? 'check' : 'times'}-primary.svg`}
                        alt="Attendance Icon"
                    />
                    <span className="ff-times-new-roman text-[12px] text-primary lg:text-[14px]">
                        {rsvp.isAttend ? 'Will Attend' : 'Cannot Attend'}
                    </span>
                </div>
            </div>

            <p className="ff-times-new-roman mb-2 text-[16px] font-[400] text-primary-dark">{rsvp.greetings}</p>

            <div className="flex gap-2">
                <Image width="14" height="14" src="/images/icons/clock-primary-dark.svg" alt="Clock Icon" />
                <span className="ff-times-new-roman text-[12px] text-primary-dark lg:text-[14px]">
                    {getDatetimeDiff(rsvp.createdAt)}
                </span>
            </div>
        </div>
    );
}
