import { useEffect, useState } from "react";

const useNavigation = () => {
    const [currentActive, setCurrentActive] = useState(0);

    const updateCurrentActiveOnScroll = () => {
        let posY = window.scrollY;
        let targets = document.querySelectorAll(".tag");
        targets.forEach((target) => {

            if ((target?.getBoundingClientRect().top + window.pageYOffset - window.innerHeight / 2) <= posY) {
                setCurrentActive(parseInt(target.id.split("-")[1]));
            }
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", updateCurrentActiveOnScroll);
        return () => window.removeEventListener("scroll", updateCurrentActiveOnScroll);
    }, []);

    const goTo = (index: number) => {
        if (index < 1) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            let target = document.getElementById(`tag-${index}`);
            if (target) {
               target.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

    return { currentActive, goTo, updateCurrentActiveOnScroll };
};

export default useNavigation;
