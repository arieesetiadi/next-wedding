import * as rsvpApi from '@/lib/api/rsvp.api';
import { useState } from 'react';
import { useQuery } from 'react-query';
import EaseInOutDiv from './motions/ease-in-out-div';
import RsvpListItem from './rsvp-list-item';

export default function RsvpList() {
    const [limit, setLimit] = useState<number>(5);

    const { data: rsvps, isLoading } = useQuery({
        queryKey: ['rsvps'],
        queryFn: async () => {
            return await rsvpApi.get(limit);
        },
    });

    return (
        <>
            <div className="h-[80px] w-full bg-[url('/images/illustrations/wave-top.png')] bg-cover bg-top bg-no-repeat"></div>

            <section className="bg-secondary-light px-4 py-20">
                {rsvps ? (
                    <>
                        <EaseInOutDiv className="mx-auto mb-5 max-w-screen-lg">
                            {
                                // @ts-ignore
                                rsvps.map((rsvp) => (
                                    <RsvpListItem key={rsvp.id} rsvp={rsvp} />
                                ))
                            }
                        </EaseInOutDiv>

                        <EaseInOutDiv className="flex justify-center">
                            <button disabled={isLoading} type="button" className="btn btn-primary flex items-center">
                                <span className="ff-times-new-roman inline-block text-center text-[14px] uppercase text-white">
                                    Load More
                                </span>
                            </button>
                        </EaseInOutDiv>
                    </>
                ) : (
                    <span className="ff-playfair block text-center text-sm italic text-primary">Invitation RSVP</span>
                )}
            </section>
        </>
    );
}
