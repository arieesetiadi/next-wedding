import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Invitation } from '@prisma/client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import * as invitationApi from '@/lib/api/invitation.api';
import * as rsvpApi from '@/lib/api/rsvp.api';
import toast from 'react-hot-toast';

type Inputs = {
    name: string;
    phone: string;
    isAttend: boolean;
    guestCount: number;
    greetings: string;
};

export default function RsvpForm() {
    const [invitation, setInvitation] = useState<Invitation | null>(null);

    const router = useRouter();
    const guestCode = router.query.guest as string;

    const form = useForm<Inputs>({
        resolver: zodResolver(
            z.object({
                name: z.string().min(1, 'This field is required'),
                phone: z.string().min(1, 'This field is required'),
                isAttend: z.enum(['0', '1'], { message: 'Please confirm your attendance' }),
                guestCount: z.number({ message: 'Please select a valid value' }),
                greetings: z.string().min(1, 'This field is required'),
            }),
        ),
    });

    async function storeRsvp(data: Inputs) {
        try {
            await rsvpApi.store({
                phone: data.phone,
                isAttend: !!data.isAttend,
                greetings: data.greetings,
                invitationId: invitation?.id as number,
            });

            toast.success('Thank you for your confirmation and blessing!');
            form.reset();
        } catch (error) {
            toast.error('Something went wrong. Please try again!');
            console.error(error);
        }
    }

    useEffect(() => {
        (async function fetchInvitation() {
            const results = await invitationApi.findByCode(guestCode);
            setInvitation(results);
        })();
    }, [guestCode]);

    useEffect(() => {
        form.setValue('name', invitation?.name as string);
        form.setValue('guestCount', invitation?.guestCount as number);
    }, [invitation]);

    return (
        <form onSubmit={form.handleSubmit(storeRsvp)}>
            {/* Input Name */}
            <div className="mb-4">
                <input
                    {...form.register('name')}
                    type="text"
                    placeholder="Full name"
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary p-3 text-[14px] text-dark focus:outline-primary"
                />

                {form.formState.errors.name && (
                    <span className="text-sm text-primary">{form.formState.errors.name.message}</span>
                )}
            </div>

            {/* Input Phone */}
            <div className="mb-4">
                <input
                    {...form.register('phone')}
                    type="tel"
                    placeholder="Phone number"
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary p-3 text-[14px] text-dark focus:outline-primary"
                />

                {form.formState.errors.phone && (
                    <span className="text-sm text-primary">{form.formState.errors.phone.message}</span>
                )}
            </div>

            {/* Input Confirmation */}
            <div className="mb-4">
                <select
                    {...form.register('isAttend')}
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary px-2 py-4 text-[14px] text-dark focus:outline-primary">
                    <option hidden value="">
                        Confirm of Attendance
                    </option>
                    <option value={1}>Will Attend</option>
                    <option value={0}>Cannot Attend</option>
                </select>

                {form.formState.errors.isAttend && (
                    <span className="text-sm text-primary">{form.formState.errors.isAttend.message}</span>
                )}
            </div>

            {/* Input Number of PAX */}
            <div className="mb-4">
                <select
                    {...form.register('guestCount')}
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary px-2 py-4 text-[14px] text-dark focus:outline-primary">
                    <option hidden value="">
                        Number of Guest
                    </option>

                    {[1, 2, 3, 4, 5].map((i) => (
                        <option key={i} value={i}>
                            {i} PAX
                        </option>
                    ))}
                </select>

                {form.formState.errors.guestCount && (
                    <span className="text-sm text-primary">{form.formState.errors.guestCount.message}</span>
                )}
            </div>

            {/* Input Greetings */}
            <div className="mb-4">
                <textarea
                    {...form.register('greetings')}
                    rows={5}
                    placeholder="Give greetings and prayers"
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary p-3 text-[14px] text-dark focus:outline-primary"></textarea>

                {form.formState.errors.greetings && (
                    <span className="text-sm text-primary">{form.formState.errors.greetings.message}</span>
                )}
            </div>

            <div className="flex justify-center">
                <button className="btn btn-primary flex items-center">
                    <span className="ff-times-new-roman inline-block text-center text-[14px] uppercase text-white">
                        Submit
                    </span>
                </button>
            </div>
        </form>
    );
}
