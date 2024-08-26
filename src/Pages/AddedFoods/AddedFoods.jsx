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

const AddedFoods = () => {
  const [addedFoodsData, setAddedFoodsData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios.get(`http://localhost:5000/foods/user/${user?.email}`).then((res) => {
      console.log(res);
      setAddedFoodsData(res.data);
    });
  }, [user?.email]);

  console.log(addedFoodsData);

  return (
    <>
      <div className=" grid grid-cols-3 justify-center items-center w-full gap-x-7 gap-y-12 container mx-auto">
        {/* {addedFoodsData.map((food) => (
            <FoodCard key={food._id} food={food} updateFoods={updateFoods} />
          ))} */}
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
                      className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
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
