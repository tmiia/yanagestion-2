import { useEffect, useState } from "react";
import Square from "./svgs/square";
import useNavigation from "../hooks/useNavigation";

interface NavigationProps {
    nbSections : number
}

const Navigation = ({ nbSections } : NavigationProps) => {
    const { currentActive, goTo, updateCurrentActiveOnScroll } = useNavigation();

    useEffect(() => {
        window.addEventListener("scroll", updateCurrentActiveOnScroll);
        return () => window.removeEventListener("scroll", updateCurrentActiveOnScroll);
    }, []);

    return (
        <div className="fixed top-2.5 left-2.5 flex flex-col gap-y-2.5">
            {Array.from({ length: nbSections }).map((_, index) => (
                <button key={index} onClick={() => goTo(index)} className="cursor-pointer">
                    <Square key={index} width={12} height={12} color={currentActive === index ? "#5D5D5D" : "transparent"} className={currentActive === index ? "scale-150" : "scale-100"} />
                </button>
            ))}
        </div>  
    );
};

export default Navigation;