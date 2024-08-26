import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";


const FoodsDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <>
            <div className=" my-12">
                {
                    data.map( food => <DetailsCard key={food._id} food={food} />)
                }
            </div>
        </>
    );
};

export default FoodsDetails;