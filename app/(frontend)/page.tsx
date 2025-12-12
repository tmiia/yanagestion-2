import { type SanityDocument } from "next-sanity";
import { client } from "@/../sanity/lib/client";
import { FOLDER_QUERY, READER_QUERY } from "../../sanity/lib/queries/queries";
import Hero from "@/(frontend)/components/hero";
import Background from "@/(frontend)/components/background";
import Folders from "./components/folders";

const options = { next: { revalidate: 10 } };

export default async function Home() {
  const readerData = await client.fetch<SanityDocument[]>(READER_QUERY, {}, options);
  const folderData = await client.fetch<SanityDocument[]>(FOLDER_QUERY, {}, options);

  const paragraphs = readerData.map((doc: SanityDocument) => doc.paragraphs || []);
  const sortedFolderData = [...folderData].sort((a, b) => (a.order || 0) - (b.order || 0));
  const summary = sortedFolderData.map((doc: SanityDocument) => doc.title || '');
  const folders = sortedFolderData.map((doc: SanityDocument, index: number) => ({
    index,
    order: doc.order || 0,
    title: doc.title || '',
    description: doc.description || '',
    contents: doc.contents || [],
    addContactForm: doc.addContactForm || false
  }));

  return (
    <main className="relative min-h-screen">
      <Background />
      <Hero paragraphs={paragraphs} summary={summary} />
      <div className="min-h-40"></div>
      <Folders folders={folders} />
    </main>
  );
}
