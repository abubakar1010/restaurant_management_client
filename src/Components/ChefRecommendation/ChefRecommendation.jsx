import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../FoodCard/FoodCard";

const ChefRecommendation = () => {

    const [topSellingFoods, setTopSellingFoods] = useState([])

    useEffect(() => {

        axios.get('https://restaurant-management-server-gray.vercel.app/top-selling-foods')
        .then(res => {
            setTopSellingFoods(res.data)
        })
    },[])

    return (
        <>
        <div className="text-center mt-28 mb-12 space-y-6">
            <h1 className=" text-3xl font-bold">CHEF RECOMMENDS</h1>
            <p className="  lg:px-24 text-lg mt-2">Indulge in the finest selections handpicked by our expert chefs. Each dish is a masterpiece, designed to tantalize your taste buds and offer a truly unforgettable dining experience.</p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-12 mb-28 ">
            {topSellingFoods.slice(0,3).map( food => <FoodCard key={food._id}  food={food}/>)}
        </div>
        </>
    );
};

export default ChefRecommendation;