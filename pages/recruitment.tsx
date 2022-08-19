import Head from "next/head";

const RecruitmentPage = () => {
  return (
    <main>
      <Head>
        <title>Recruitment</title>
        <meta
          name="description"
          content="VPBank is looking for talented people to join our team"
        />
      </Head>
      <div className={`grid h-screen grid-cols-1 md:grid-cols-2`}>
        <div></div>
        <div className={`flex w-full items-center justify-center bg-white`}>
          <div className={`w-96 px-5 text-center`}>
            <div className={`text-2xl font-semibold`}>Welcome to App</div>
            <div className={`my-5 text-sm`}>
              Sign up or login to your account
            </div>
            <div className={`mt-10`}>
              <button className={`mb-2 w-full cursor-pointer`}>Google</button>
              <button className={`w-full cursor-pointer`}>Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecruitmentPage;
