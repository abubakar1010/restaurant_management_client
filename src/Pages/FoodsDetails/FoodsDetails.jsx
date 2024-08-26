import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";


const FoodsDetails = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <>
            <div className=" my-12">
                
                    <DetailsCard food={food} /> 
                
            </div>
        </>
    );
};

export default FoodsDetails;