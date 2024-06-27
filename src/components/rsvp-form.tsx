import toast from 'react-hot-toast';

export default function RsvpForm() {
    async function storeRsvp(e: any) {
        e.preventDefault();
        toast.success('Thank you for your confirmation and blessing!');
        // toast.error('You already submitted an RSVP.');
    }

    return (
        <form onSubmit={storeRsvp}>
            {/* Input Name */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Full name"
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary p-3 text-[14px] text-dark focus:outline-primary"
                />
            </div>

            {/* Input Phone */}
            <div className="mb-4">
                <input
                    type="tel"
                    placeholder="Phone number"
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary p-3 text-[14px] text-dark focus:outline-primary"
                />
            </div>

            {/* Input Confirmation */}
            <div className="mb-4">
                <select className="ff-times-new-roman w-full rounded-[8px] border border-primary px-2 py-4 text-[14px] text-dark focus:outline-primary">
                    <option value="">Confirm of Attendance</option>
                    <option value="1">Will Attend</option>
                    <option value="0">Cannot Attend</option>
                </select>
            </div>

            {/* Input Number of PAX */}
            <div className="mb-4">
                <select className="ff-times-new-roman w-full rounded-[8px] border border-primary px-2 py-4 text-[14px] text-dark focus:outline-primary">
                    <option value="">Number of Guest</option>

                    {[1, 2, 3, 4, 5].map((i) => (
                        <option key={i} value={i}>{i} PAX</option>
                    ))}
                </select>
            </div>

            {/* Input Greetings */}
            <div className="mb-4">
                <textarea
                    rows={5}
                    placeholder="Give greetings and prayers"
                    className="ff-times-new-roman w-full rounded-[8px] border border-primary p-3 text-[14px] text-dark focus:outline-primary"></textarea>
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
