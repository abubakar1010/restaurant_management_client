import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const AddedFoods = () => {
  const [addedFoodsData, setAddedFoodsData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios.get(`https://restaurant-management-server-gray.vercel.app/foods/user/${user?.email}`, {withCredentials: true}).then((res) => {
      console.log(res);
      setAddedFoodsData(res.data);
    });
  }, [user?.email]);

  console.log(addedFoodsData);

  return (
    <>
    <Helmet>
        <title>Cooking | Add Foods</title>
      </Helmet>
      <div className=" grid grid-cols-3 justify-center items-center w-full gap-x-7 gap-y-12 container mx-auto">
        {addedFoodsData.map(
          ({
            _id,
            foodImage,
            foodName,
            price,
            foodCategory,
            shortDescription,
            quantity,
          }) => (
            <>
              <Card className="max-w-[470px]">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src={foodImage}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      {foodName}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      ${price}
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    {shortDescription}
                  </Typography>
                  <div className="my-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      {foodCategory}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      Availability:{quantity}
                    </Typography>
                  </div>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link to={`/updateAddedItem/${_id}`}>
                    <Button
                      ripple={false}
                      fullWidth={true}
                      className="mt-6 px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                      Update
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </>
          )
        )}
      </div>
    </>
  );
};

export default AddedFoods;
