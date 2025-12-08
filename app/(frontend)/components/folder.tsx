interface FolderContentType {
    title: string;
    content: string;
}

export interface FolderType {
    index: number;
    title: string;
    description: string;
    contents: FolderContentType[];
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
  
  return (
    <section 
      className="container-grid p-9! pr-6! pt-20! bg-foreground text-[var(--text-primary)] min-h-[80dvh] sticky mt-20 shadow-md flex flex-col justify-between font-mono text-xs"
      style={{ 
        top: `calc(5rem + ${topOffset}px)`,
        zIndex: index + 1,
      }}
    >
        <header className="flex flex-col gap-8 justify-between">
            <strong className="text-2xl font-light">({folder.index + 2})</strong>
            <hgroup className="grid-layout gap-y-8!">
                <h2 className="col-span-full grid grid-cols-5 uppercase">
                  <span>{titleLeft}</span>
                  <span>{titleRight}</span>
                </h2>
                <p className="col-start-3 font-light uppercase">{folder.description}</p>
            </hgroup>
        </header>

        <div className="grid grid-cols-5 gap-x-8">
            {folder.contents?.map((content, idx) => (  
                <div key={idx} className={`col-start-${3 + idx}`}>
                    <p>{content.content}</p>
                </div>
            ))}

            <div className="col-start-1 col-span-2 self-end flex flex-col gap-y-4">
                {folder.contents?.map((content, idx) => (  
                    <p key={idx} className="font-light uppercase">{content.title}</p>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Folder;