import React, { Children, useEffect, useRef } from 'react';

const SmoothScroll = () => {
    const scrollWrapperRef = useRef(null);
    const offsetRef = useRef(0);
    const speed = 0.04;

    useEffect(() => {
        const scrollWrap = scrollWrapperRef.current;
        if (!scrollWrap) return;

        const height = scrollWrap.getBoundingClientRect().height - 1;
        document.body.style.height = `${Math.floor(height)}px`;

        const smoothScroll = () => {
            offsetRef.current += (window.pageYOffset - offsetRef.current) * speed;
            const scroll = `translateY(-${offsetRef.current}px) translateZ(0)`;
            scrollWrap.style.transform = scroll;
            requestAnimationFrame(smoothScroll);
        };

        smoothScroll();

        return () => {
            cancelAnimationFrame(smoothScroll);
        };
    }, []);

    return (
        <div className="smooth-scroll-wrapper" ref={scrollWrapperRef}>
            {Children}
        </div>
    );
};

export default SmoothScroll;