import Head from "next/head";

const AppHead = ({ title, children = <></> }) => {
  return (
    <>
      <Head>
        <title>{title} | GoProgrammingHub</title>
        {children}
      </Head>
    </>
  );
};

export default AppHead