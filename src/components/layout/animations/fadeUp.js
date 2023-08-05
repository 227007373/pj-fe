import { useRef, useEffect } from 'react';
const FadeUp = ({ children }) => {
    const elementRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const element = elementRef.current;
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;

                if (elementTop < window.innerHeight && elementBottom >= 0) {
                    element.classList.add('scroll-animation-fadeUp');
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div ref={elementRef}>{children}</div>;
};
export default FadeUp;
