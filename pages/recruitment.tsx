const RecruitmentPage = () => {
  return (
    <>
      <div className={`h-screen grid grid-cols-1 md:grid-cols-2`}>
        <div
          className={`hidden flex md:flex justify-center items-center md:block`}
        ></div>
        <div className={`w-full bg-white flex justify-center items-center`}>
          <div className={`w-96 text-center px-5`}>
            <div className={`font-semibold text-2xl`}>Welcome to App</div>
            <div className={`text-sm my-5`}>
              Sign up or login to your account
            </div>
            <div className={`mt-10`}>
              <button className={`w-full mb-2 cursor-pointer`}>Google</button>
              <button className={`w-full cursor-pointer`}>Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitmentPage;
