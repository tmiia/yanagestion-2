import Folder, { type FolderType } from "./folder";

interface FoldersProps {
    folders: FolderType[];
}

const Folders = ({ folders }: FoldersProps) => {
  return (
    <section className="w-[80%] mx-auto">
        {folders.sort((a: FolderType, b: FolderType) => a.order - b.order).map((folder, index) => (
            <Folder key={index} folder={folder} index={index} />
        ))}
        <div className="h-[80dvh]" aria-hidden="true" />
    </section>
  );
};

export default Folders;