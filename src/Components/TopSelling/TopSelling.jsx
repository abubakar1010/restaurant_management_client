import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";

const TopSelling = () => {

    const [topSellingFoods, setTopSellingFoods] = useState([])

    useEffect(() => {

        axios.get('https://restaurant-management-server-gray.vercel.app/top-selling-foods')
        .then(res => {
            setTopSellingFoods(res.data)
        })
    },[])
    
    return (
        <>
        <div className=" mt-24 text-center mb-12">
            <h1 className=" text-3xl font-bold">Our Top Selling Foods</h1>
            <p className=" text-lg mt-2">We are delighted to welcome you to our restaurant for an extraordinary culinary experience </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-12 ">
            {topSellingFoods.map( food => <FoodCard key={food._id}  food={food}/>)}
        </div>
        <div className=" w-full text-center mt-12">
                  <Link to={"/allFoods"}>
                    <button className=" mt-6 px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]">All Foods</button>
                  </Link>
                </div>
        </>
    );
};

export default TopSelling;