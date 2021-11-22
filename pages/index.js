import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl">
        <p>Este es mi portafolio</p>
        <p>
          (Actualmente una prueba, basada en{" "}
          <a
            href="https://nextjs.org/learn"
            className="text-blue-500 hover:text-blue-800 hover:underline"
          >
            el tutorial de Next.js
          </a>
          .)
        </p>
      </section>
      <section className="text-xl">
        <h2 className="font-bold">Blog</h2>
        <ul className="flex flex-col">
          {allPostsData.map(({ id, date, title }) => (
            <li className="font-normal list-none text-left my-1" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:text-blue-800 visited:underline">
                  {title}
                </a>
              </Link>
              <br />
              <small className="font-light text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
