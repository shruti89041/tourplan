import { useState } from "react";
import data from "./data";
import TourCard from "./components/Card";

function App() {
  const [dataset, setDataset] = useState(data);

  function notInterested(i) {
    const newData = dataset.filter((d) => d.id != i);
    setDataset(newData);
  }

  function handleRefresh() {
    setDataset(data);
  }

  if (dataset.length === 0) {
    return (
      <div className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center ">
        <p className=" m-4 text-4xl font-bold "> No Tour Left </p>
        <button
          className="p-2 bg-slate-300 
             border-blue-600 border-2 rounded-md hover:bg-slate-700 hover:text-white"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="">
      <h1 className="mt-5 text-4xl text-center font-bold">Tour Plans</h1>
      <div className="p-8 flex gap-4 flex-wrap justify-evenly">
        {dataset[0] && (
          <TourCard data={dataset[0]} notInterested={notInterested} />
        )}
        {dataset[1] && (
          <TourCard data={dataset[1]} notInterested={notInterested} />
        )}
        {dataset[2] && (
          <TourCard data={dataset[2]} notInterested={notInterested} />
        )}
        {dataset[3] && (
          <TourCard data={dataset[3]} notInterested={notInterested} />
        )}
        {dataset[4] && (
          <TourCard data={dataset[4]} notInterested={notInterested} />
        )}
        {dataset[5] && (
          <TourCard data={dataset[5]} notInterested={notInterested} />
        )}
        {dataset[6] && (
          <TourCard data={dataset[6]} notInterested={notInterested} />
        )}
      </div>
    </div>
  );
}

export default App;
