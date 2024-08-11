import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('cursor');

        const handleMouseMove = (e) => {
            const scrollX = window.scrollX || document.documentElement.scrollLeft;
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            
            cursor.style.left = `${e.clientX + scrollX}px`;
            cursor.style.top = `${e.clientY + scrollY}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div
                id="cursor"
                className="absolute bg-blue-600 opacity-30 "
                style={{
                    borderRadius: '50%',
                    boxShadow: '10px 10px 100px 120px rgba(38, 132, 255, 0.7)', // Blue shadow effect
                }}
            />
        </>
    );
};

export default CustomCursor;
