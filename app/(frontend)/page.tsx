import Hero from "@/(frontend)/components/hero";
import Background from "@/(frontend)/components/background";
import { client } from "@/../sanity/lib/client";

const READER_QUERY = `*[_type == "reader"][0]{
  paragraphs,
  speed
}`;

export default async function Home() {
  const readerData = await client.fetch(READER_QUERY);

  return (
    <main className="min-h-screen">
      <Background />
      <Hero paragraphs={readerData?.paragraphs || []} speed={readerData?.speed || 1} />
    </main>
  );
}
