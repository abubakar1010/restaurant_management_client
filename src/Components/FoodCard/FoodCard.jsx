import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FoodCard = ({food }) => {
  const {
    _id,
    foodImage,
    foodName,
    price,
    foodCategory,
    shortDescription,
    quantity,
  } = food;
  return (
    <>
      <Card className=" max-h-[550px] w-full">
        <CardHeader shadow={false} floated={false} className="">
          <img
            src={foodImage}
            alt="card-image"
            className="h-[280px] w-full object-cover"
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
            className="font-normal opacity-75 shrink-1"
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
          <Link to={`/foodsDetails/${_id}`}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              DEtails
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object,
};

export default FoodCard;
