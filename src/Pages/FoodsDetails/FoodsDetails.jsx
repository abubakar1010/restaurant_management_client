import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";
import { Helmet } from "react-helmet-async";


const FoodsDetails = () => {
    const food = useLoaderData()
    console.log(food);
    return (
        <>
        <Helmet>
        <title>Cooking | Foods Details</title>
      </Helmet>
            <div className=" my-12">
                
                    <DetailsCard food={food} /> 
                
            </div>
        </>
    );
};

export default FoodsDetails;