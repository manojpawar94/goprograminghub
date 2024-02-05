import Head from "next/head";

const AppHead = ({ title, children = <></> }) => {
  const appTitleName = `${title} | Go Programming Hub`
  return (
    <>
      <Head>
        <title>{appTitleName}</title>
        {children}
      </Head>
    </>
  );
};

export default AppHead