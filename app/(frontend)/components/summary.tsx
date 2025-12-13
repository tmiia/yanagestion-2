import classNames from "classnames";
import { useContext, useEffect } from "react";
import useNavigation from "../hooks/useNavigation";
import { IntroContext } from "../contexts/IntroContext";
import { motion } from "framer-motion";

interface SummaryProps {
  className?: string;
  summary: string[];
}

const Summary = ({ className, summary }: SummaryProps) => {
    const { currentActive, goTo, updateCurrentActiveOnScroll } = useNavigation();
    const introContext = useContext(IntroContext);
    const isLottieComplete = introContext?.isLottieComplete;

    useEffect(() => {
        window.addEventListener("scroll", updateCurrentActiveOnScroll);
        return () => window.removeEventListener("scroll", updateCurrentActiveOnScroll);
    }, []);

    return (
        <div 
        className={classNames("flex flex-col w-full overflow-hidden", className)}>
        {summary.map((item, index) => (
            <motion.div 
            key={index} 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isLottieComplete ? 0 : 10, opacity: isLottieComplete ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "backOut", delay: index * 0.1 }}
            onClick={() => goTo(index)}
            className={classNames("flex items-baseline pr-2.5 gap-1 w-full min-w-0 transition-colors duration-300 cursor-pointer", currentActive === index ? "text-dark-gray" : "text-gray")}>
                <span className="text-sm font-semibold whitespace-nowrap shrink-0">{item}</span>
                <span className="flex-1 overflow-hidden text-xs min-w-0 leading-px">
                    {"·".repeat(200)}
                </span>
                <span className="text-sm font-semibold shrink-0">{index + 1}</span>
            </motion.div>
        ))}
        </div>
    );
};

export default Summary;