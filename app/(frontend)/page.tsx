import { type SanityDocument } from "next-sanity";
import { client } from "@/../sanity/lib/client";
import { FOLDER_QUERY, READER_QUERY } from "../../sanity/lib/queries/queries";
import Hero from "@/(frontend)/components/hero";
import Background from "@/(frontend)/components/background";

const options = { next: { revalidate: 10 } };

export default async function Home() {
  const readerData = await client.fetch<SanityDocument[]>(READER_QUERY, {}, options);
  const folderData = await client.fetch<SanityDocument[]>(FOLDER_QUERY, {}, options);

  const paragraphs = readerData.map((doc: SanityDocument) => doc.paragraphs || []);
  const summary = folderData.map((doc: SanityDocument) => doc.title || []);

  console.log(folderData);

  return (
    <main className="min-h-screen">
      <Background />
      <Hero paragraphs={paragraphs} summary={summary} />
    </main>
  );
}
