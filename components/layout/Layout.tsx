import Header from "./header";
import Head from "next/head";
import NavBar from "./navbar";
import { Dispatch, SetStateAction } from "react";

interface LayoutProps {
  handleReset: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element[] | JSX.Element;
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>psy-test</title>
        <meta name="description" content="What is today's psychology test?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header handleReset={props.handleReset} />
      <NavBar />
      <div className="flex-1 overflow-auto">{props.children}</div>
    </div>
  );
}
