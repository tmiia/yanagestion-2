'use client';
import { useEffect, useRef } from "react";

interface DrawSvgProps {
    children: React.ReactElement<SVGSVGElement>;
    duration: number;
    play: boolean;
    className?: string;
}

const DrawSvg = ({ children, duration, play, className }: DrawSvgProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        if (!containerRef.current || !play) return;

        const svg = containerRef.current.querySelector('svg');
        const paths = svg?.querySelectorAll('path');

        if (!paths) return;

        paths?.forEach((path) => {
            const length = (path as SVGGeometryElement).getTotalLength?.();
            if (length) {
                (path as SVGElement).style.strokeDasharray = "420";
                (path as SVGElement).style.strokeDashoffset = "450";
                (path as SVGElement).style.animation = `draw ${duration}s ease-in-out forwards`;
            }
        });

    }, [play, duration]);

    return (
        <div ref={containerRef} style={{ display: play ? 'inline-block' : 'none' }} className={className}>
            {children}
        </div>
    )
};

export default DrawSvg;