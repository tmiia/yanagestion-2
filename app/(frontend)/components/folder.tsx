'use client';
import { useEffect } from "react";
import FolderTip from "./svgs/folderTip";
import ContactForm from "./contactForm";

interface FolderContentType {
    title: string;
    content: string;
}

export interface FolderType {
    index: number;
    order: number;
    title: string;
    description: string;
    contents: FolderContentType[];
    addContactForm: boolean;
}

interface FolderProps {
    folder: FolderType;
    index: number;
}

const STACK_OFFSET = 10;

const splitTitle = (title: string): [string, string] => {
  const words = title.split(' ');
  const midPoint = Math.floor(words.length / 2);
  return [
    words.slice(0, midPoint).join(' '),
    words.slice(midPoint).join(' ')
  ];
};

const Folder = ({ folder, index }: FolderProps) => {
  const topOffset = STACK_OFFSET;
  const [titleLeft, titleRight] = splitTitle(folder.title);

  useEffect(() => {
    console.log(folder.title, folder.order);
    console.log(`addContactForm in ${folder.title} : ${folder.addContactForm}`);
  }, []);
  
  return (
    <section 
      id={`folder-${index}`}
      className="container-grid p-9! pr-6! pt-20! bg-foreground text-[var(--text-primary)] min-h-[85dvh] md:min-h-[80dvh] sticky mt-20 flex flex-col justify-between font-mono text-xs"
      style={{ 
        top: `calc(var(--folder-top-base) + ${topOffset}px)`,
        zIndex: index + 1,
        boxShadow: '0 0 4px 0 rgba(93, 93, 93, 0.4)',
      }}
    >
      <FolderTip className="absolute top-0 left-0 w-[82px] h-[24px] md:w-[123px] md:h-[36px]" dataIndex={index} />
        <header className="flex flex-col gap-8 justify-between">
            <strong className="text-2xl font-light">({folder.index + 2})</strong>
            <hgroup className="grid-layout gap-y-8!">
                <h2 className="col-span-full grid grid-cols-5 uppercase">
                  <span className="col-span-2 col-start-1 md:col-span-1 md:col-start-1">{titleLeft}</span>
                  <span className="col-span-2 col-start-4 md:col-span-1 md:col-start-2">{titleRight}</span>
                </h2>
                <p className="col-span-3 col-start-2 md:col-span-1 md:col-start-3 font-light uppercase">{folder.description}</p>
            </hgroup>
        </header>

        <div className={`grid md:grid-cols-5 ${folder.addContactForm ? 'flex-1' : ''} gap-x-8`}>
            {folder.contents?.map((content, idx) => (  
                <div key={idx} className={`hidden md:block md:col-start-${3 + idx}`}>
                    <p>{content.content}</p>
                </div>
            ))}

            <div className={`col-start-1 col-span-2 self-end flex-col gap-y-4 ${folder.addContactForm ? 'hidden md:flex' : 'flex'}`}>
                {folder.contents?.map((content, idx) => (  
                    <p key={idx} className="font-light uppercase">{content.title}</p>
                ))}
            </div>

            {folder.addContactForm && 
            <div className="col-start-1 col-end-6 md:col-start-3 md:col-end-6 h-full flex flex-col gap-y-4 pt-4 md:pt-0">
                <ContactForm />
            </div>
            }
        </div>
    </section>
  );
};

export default Folder;