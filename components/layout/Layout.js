import Header from "./header";
import Head from "next/head";

export default function Layout(props) {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>psy-test</title>
        <meta name="description" content="What is today's psycology test?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="sticky top-0" handleReset={props.handleReset} />
      <div className="flex-1 overflow-auto">{props.children}</div>
    </div>
  );
}
