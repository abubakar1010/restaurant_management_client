import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import SearchFood from "../../Components/SearchFood/SearchFood";
import { Helmet } from "react-helmet-async";

const AllFoods = () => {
  const [foodsData, setFoodsData] = useState([]);
  useEffect(() => {
    axios.get(`https://restaurant-management-server-gray.vercel.app/foods`).then((res) => {
      console.log(res);
      setFoodsData(res.data);
    });
  }, []);

  // console.log(foodsData);

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    const url = `https://restaurant-management-server-gray.vercel.app/foods/${name}`;
    axios.get(url).then((res) => setFoodsData(res.data));
  };

  return (
    <>
    <Helmet>
        <title>Cooking | All Foods</title>
      </Helmet>
      <div className=" bg-[url('https://i.postimg.cc/Qxfp7RGr/pexels-cottonbro-4253303.jpg')] w-full h-[320px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
        <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
          <div className="text-white  pt-28">
            <h1 className=" text-4xl font-bold text-center ">
            Explore Our Delicious Food Collection.{" "}
            </h1>
            <div className=" text-center mt-4 text-xl flex justify-center items-center gap-2">
            <p>Home </p>
            <p className=" border-l-[3px] h-4 border-[#d0a260]"></p>
            <p className="">All Foods</p>
            </div>
            
            <div>
              <SearchFood handleSearch={handleSearch} />
            </div>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 justify-center items-center w-full gap-x-7 gap-y-12 container mx-auto">
        {foodsData.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </>
  );
};

export default AllFoods;
