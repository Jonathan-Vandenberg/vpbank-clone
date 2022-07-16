const Timeline2 = () => {
  return (
    <section id="container" className="container mx-auto h-56 p-6">
      <div
        id="calender-container"
        className="ml-0 flex w-1/4 items-center justify-center self-center p-6"
      >
        <div
          id="calender-root"
          className="flex.col mx-auto h-28 w-28 content-center justify-center"
        >
          <div
            id="day"
            className="text-center text-5xl font-bold text-slate-900"
          >
            23
          </div>
          <div id="year" className="text-center text-lg">
            T6 2022
          </div>
        </div>
        <div className="flex.col w-2 content-center items-center justify-center py-2">
          <div className="mt-0 h-10 w-0.5 bg-slate-200"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="mt-0 h-10 w-0.5 bg-slate-200"></div>
        </div>
        <div className="">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline2;
