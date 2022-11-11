import Head from "next/head";

import Featured from "../components/Featured";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lalapan Shop in Your City</title>
        <meta name="description" content="Best lalapan in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
    
    </div>
  );
}
