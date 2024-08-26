import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const DetailsCard = ({ food }) => {

    const {
        foodImage,
        foodName,
        price,
        shortDescription,
        foodOrigin,
        madeBy
      } = food;

      const minutes = Math.floor((Math.random() * 60) + 1)
      const hour = Math.floor((Math.random() * 3) + 1)
      const notes = Math.floor((Math.random() * 100) + 1)
      
      
  return (
    <>
      <div>
        <Card className="w-full flex-row-reverse justify-between pr-24 pl-36 items-center shadow-none rounded-none">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-[60%] shrink-0 rounded-r-none"
          >
            <img
              src={foodImage}
              alt="card-image"
              className=" rounded-md w-full h-[400px] object-cover"
            />
          </CardHeader>
          <CardBody className=" border-b-2 border-black">
            <Typography variant="h6" color="gray" className="mb-2 uppercase">
              {foodName}
            </Typography>
            <Typography color="gray" className="mb-2 font-normal">
              By {madeBy}
            </Typography>
            
          </CardBody>
        </Card>

        <div className=" flex justify-between gap-64 mt-12 w-full pl-6 pr-20">
            <div className=" flex gap-9 shrink-0 items-center ">
                <div className=" flex flex-col justify-center gap-3">
                    <p>Total Time:</p>
                    <p>Origin:</p>
                    <p>Price:</p>
                    <p>Notes:</p>
                </div>
                <div className=" flex flex-col justify-center gap-3">
                    <p>{hour} hour {minutes} minutes</p>
                    <p>{foodOrigin}</p>
                    <p>${price}</p>
                    <p>Read {notes} community notes</p>
                </div>
            </div>
            <div className=" shrink-1 ">
                <p>{shortDescription}There’s no trick to these loaded potato skins, and making them is a breeze. Pile them high with toppings and broil until they look like something you may have eaten at an Irish bar in the bad part of town during college, the game playing on a big screen above the bathroom doors. That bar was pretty good, you know.</p>
            </div>
            </div>
            <div>
            <Link to={"/purchase"} className="inline-block">
              <Button variant="text" className="flex gap-2">
                Add To Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
            </div>
      </div>
    </>
  );
};

DetailsCard.propTypes = {
  food: PropTypes.object,
};

export default DetailsCard;
