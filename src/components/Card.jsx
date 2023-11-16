import { useState } from "react";

export default function Card({
  data = { id: "", name: "", price: "", info: "", image: "" },
  notInterested,
}) {
  const id = data.id;
  const name = data.name;
  const price = data.price;
  const info = data.info;
  const img = data.image;

  const [showmore, setShowmore] = useState(true);
  const [desc, setDesc] = useState(info.substring(0, 200));

  function handleShowmore() {
    setShowmore(!showmore);
    if (!showmore) {
      setDesc(info.substring(0, 200));
    } else {
      setDesc(info);
    }
  }
  

  const finalinfo = info.substring(0, 200) + "...show more";
  console.log(finalinfo);
  return (
    <div className=" w-80 h-fit shadow-lg shadow-neutral-500 p-3 rounded-md ">
      <div className="card-info">
        <img className="w-[100%] aspect-[5/3]" src={img} alt="img" />
        <p className="font-bold text-blue-400 ">{price}</p>
        <h3 className="font-bold text-2xl">{name}</h3>
        <span className="">{desc}</span>
        <span
          className=" cursor-pointer text-blue-500 font-semibold hover:font-bold "
          onClick={handleShowmore}
        >
          {showmore ? "...show more" : " show less"}
        </span>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          className="p-2 bg-red-100 
             border-red-400 border-2 rounded-md hover:bg-red-600 hover:text-white "
          onClick={() => {
            notInterested(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
}
