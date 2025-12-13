import { useState } from "react";
import DrawSvg from "./animations/drawSvg";
import Sign from "./svgs/sign";

const ContactForm = () => {
    const [play, setPlay] = useState(false);
    return (
        <form className="flex flex-col gap-y-8 mt-auto md:mt-0">
            <fieldset className="flex flex-col gap-y-2">
                <label htmlFor="typeOfBusiness">Vous êtes :</label>
                <div className="flex items-center gap-x-2">
                    <input type="radio" id="autoEntrepreneur" name="typeOfBusiness" className="appearance-none w-4 h-4 border border-gray bg-transparent checked:bg-gray cursor-pointer" />
                    <label htmlFor="typeOfBusiness">Auto-entrepreneur</label>
                </div>
                <div className="flex items-center gap-x-2">
                    <input type="radio" id="pme" name="typeOfBusiness" className="appearance-none w-4 h-4 border border-gray bg-transparent checked:bg-gray cursor-pointer" />
                    <label htmlFor="typeOfBusiness">PME</label>
                </div>
            </fieldset>

            <div className="flex flex-col md:flex-row gap-x-6 gap-y-4">
                <div className="flex-1 flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-4">
                        <div className="relative">
                            <input type="email" id="email" name="email" placeholder=" " className="peer border-b border-gray w-full focus:outline-1 focus:outline-gray" />
                            <label htmlFor="email" className="absolute top-0 left-0 transition-transform duration-300 peer-focus:-translate-y-full peer-[:not(:placeholder-shown)]:-translate-y-full">Email</label>
                        </div>
                        <div className="relative">
                            <input type="text" id="companyName" name="companyName" placeholder=" " className="peer border-b border-gray w-full focus:outline-1 focus:outline-gray" />
                            <label htmlFor="companyName" className="absolute top-0 left-0 transition-transform duration-300 peer-focus:-translate-y-full peer-[:not(:placeholder-shown)]:-translate-y-full">Raison sociale</label>
                        </div>
                        <div className="relative">
                            <input type="tel" id="phone" name="phone" placeholder=" " className="peer border-b border-gray w-full focus:outline-1 focus:outline-gray" />
                            <label htmlFor="phone" className="absolute top-0 left-0 transition-transform duration-300 peer-focus:-translate-y-full peer-[:not(:placeholder-shown)]:-translate-y-full">Num. Tel.</label>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col relative gap-y-2">
                    <textarea id="message" name="message" rows={1} placeholder=" " className="peer border-b border-gray focus:outline-1 focus:outline-gray" />
                    <label htmlFor="message" className="absolute top-0 left-0 transition-transform duration-300 peer-focus:-translate-y-full peer-[:not(:placeholder-shown)]:-translate-y-full">Quels sont vos besoins ?</label>
                </div>
            </div>

            <div onMouseEnter={() => setPlay(true)} onMouseLeave={() => setPlay(false)} className="relative border border-gray p-1 w-[60%] md:w-[30%] cursor-pointer">
                <button type="submit" className="w-full min-h-20 text-left flex align-start justify-start"><span className="">Envoyer</span></button>
                <DrawSvg duration={1} play={play} className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
                    <Sign />
                </DrawSvg>
            </div>
        </form>
    );
};

export default ContactForm;