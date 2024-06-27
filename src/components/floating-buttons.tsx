import React from 'react';

export default function FloatingButtons() {
    return (
        <div className="floating-buttons fixed right-[20px] top-1/2 z-50 -translate-y-1/2">
            <button role="button" className="btn-primary mb-2 flex items-center rounded-lg p-2">
                <img width={14} height={14} src="/images/icons/arrow-top-white.svg" alt="Arrow Top Icon" />
            </button>

            <a id="btn-comment" className="btn-primary mb-2 flex items-center rounded-lg p-2">
                <img width={14} height={14} src="/images/icons/message-white.svg" alt="Message Icon" />
            </a>

            <button id="btn-backsound-toggler" className="btn-primary flex items-center rounded-lg p-2">
                <img
                    width={14}
                    height={14}
                    src="/images/icons/volume-up-line-white.svg"
                    alt="Volume Icon"
                    className="up"
                />
                {/* <img
                    width={14}
                    height={14}
                    src="/images/icons/volume-mute-line-white.svg"
                    alt="Mute Icon"
                    className="mute d-none"
                /> */}
            </button>
        </div>
    );
}
