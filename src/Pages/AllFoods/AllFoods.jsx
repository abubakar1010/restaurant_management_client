import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../../Components/FoodCard/FoodCard";
import SearchFood from "../../Components/SearchFood/SearchFood";

const AllFoods = () => {
  const [foodsData, setFoodsData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/foods`).then((res) => {
      console.log(res);
      setFoodsData(res.data);
    });
  }, []);


  // console.log(foodsData);


  const handleSearch = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    console.log(name);
    const url = `http://localhost:5000/foods/${name}`
    axios.get(url)
    .then( res => setFoodsData(res.data))
    
}

  return (
    <>
    <div>
      <SearchFood handleSearch={handleSearch}/>
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
