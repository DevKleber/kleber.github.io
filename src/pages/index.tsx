import { GetStaticProps } from "next";
import Head from "next/head";
import { api } from "../services/api";

import styles from "./home.module.scss";

export default function Home({ data }: any) {
  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        {/* {JSON.stringify(data[0].type)} */}
        <section className={styles.content}>
          <span dangerouslySetInnerHTML={{ __html: data[0][data[0].type].text[0].text.content.replace(/\n/g, "<br />") }}></span>
          <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: data[1][data[1].type].text[0].text.content.replace(/\n/g, "<br />") }}></h1>

          <p>
            <div dangerouslySetInnerHTML={{ __html: data[2][data[2].type].text[0].text.content.replace(/\n/g, "<br />") }} />
            <br />
            <span dangerouslySetInnerHTML={{ __html: data[3][data[3].type].text[0].text.content }}></span>
          </p>
        </section>
        <img src="http://john.wethemez.com/static/media/man.107d9562.png" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("blocks/1df498f6-e4ea-4423-b57b-7f1680a5ff0c/children");
  console.log(data.results);

  return {
    props: {
      data: data.results,
    },
    //Quanto tempo em segundos devo refazer a busca na API
    revalidate: 60 * 60 * 24, // 24 Horas
  };
};
