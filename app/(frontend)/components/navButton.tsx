import DrawSvg from "./animations/drawSvg";
import Check from "./svgs/check";
import { useState } from "react";

interface NavButtonProps {
    text: string;
    target: string;
    className?: string;
}

const NavButton = ({ text, target, className }: NavButtonProps) => {
    const [play, setPlay] = useState(false);

    const goto = (target: string) => {
        let targetElement = document.getElementById(target);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <button className={`flex items-center justify-center w-fit gap-x-2 cursor-pointer ${className}`} onClick={() => goto(target)} onMouseEnter={() => setPlay(true)} onMouseLeave={() => setPlay(false)}>
            <div className="w-2.5 h-2.5 bg-transparent border border-primary">
                <DrawSvg duration={1} play={play} className="absolute top-1/2 left-0 -translate-y-1/2">
                    <Check width={16} height={16} className="w-full h-full" />
                </DrawSvg>
            </div>
            <span className="text-xs font-mono font-light uppercase">{text}</span>
        </button>
    );
};

export default NavButton;