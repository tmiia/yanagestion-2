import classNames from "classnames";
import { useState } from "react";

interface SummaryProps {
  className?: string;
  summary: string[];
}

const Summary = ({ className, summary }: SummaryProps) => {
    const [currentActive, setCurrentActive] = useState(0);

    return (
        <div className={classNames("flex flex-col w-full overflow-hidden", className)}>
        {summary.map((item, index) => (
            <div key={index} className={classNames("flex items-baseline pr-2.5 gap-1 w-full min-w-0", currentActive === index ? "text-dark-gray" : "text-light-gray")}>
            <span className="text-xs font-semibold whitespace-nowrap shrink-0">{item}</span>
            <span className="flex-1 overflow-hidden text-xs min-w-0 leading-px">
                {"·".repeat(200)}
            </span>
            <span className="text-xs font-semibold shrink-0">{index + 1}</span>
            </div>
        ))}
        </div>
    );
};

export default Summary;