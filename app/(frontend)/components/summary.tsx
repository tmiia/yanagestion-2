import classNames from "classnames";
import { useEffect, useState } from "react";
import useNavigation from "../hooks/useNavigation";

interface SummaryProps {
  className?: string;
  summary: string[];
}

const Summary = ({ className, summary }: SummaryProps) => {

    const { currentActive, goTo, updateCurrentActiveOnScroll } = useNavigation();

    useEffect(() => {
        window.addEventListener("scroll", updateCurrentActiveOnScroll);
        return () => window.removeEventListener("scroll", updateCurrentActiveOnScroll);
    }, []);

    return (
        <div className={classNames("flex flex-col w-full overflow-hidden", className)}>
        {summary.map((item, index) => (
            <div 
            key={index} 
            onClick={() => goTo(index)}
            className={classNames("flex items-baseline pr-2.5 gap-1 w-full min-w-0 transition-colors duration-300 cursor-pointer", currentActive === index ? "text-dark-gray" : "text-gray")}>
                <span className="text-sm font-semibold whitespace-nowrap shrink-0">{item}</span>
                <span className="flex-1 overflow-hidden text-xs min-w-0 leading-px">
                    {"·".repeat(200)}
                </span>
                <span className="text-sm font-semibold shrink-0">{index + 1}</span>
            </div>
        ))}
        </div>
    );
};

export default Summary;