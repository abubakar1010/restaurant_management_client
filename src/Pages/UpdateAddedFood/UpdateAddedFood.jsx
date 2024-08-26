import { Card, Input, Textarea, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdateAddedFood = () => {
//   const { user } = useContext(AuthContext);
  // console.log(user);
  const foodItem = useLoaderData();
  // console.log(data);
  const { _id,foodName, foodOrigin, madeBy, price, foodCategory, foodImage } =
    foodItem;
  //   console.log(foodItem);
  // console.log(quantity);

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodOrigin = form.foodOrigin.value;
    const madeBy = form.madeBy.value;
    const price = form.price.value;
    const foodCategory = form.foodCategory.value;
    const foodImage = form.foodImage.value;
    const shortDescription = form.shortDescription.value;
    const purchaseData = {
      foodName,
      foodOrigin,
      madeBy,
      price,
      foodCategory,
      foodImage,
      shortDescription
      
    };
    console.log(purchaseData);

    axios
      .patch(`http://localhost:5000/update/${_id}`, purchaseData)
      .then((res) => console.log(res));
  };

  return (
    <div>
      <Card color="transparent" shadow={false}>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form onSubmit={handlePurchase} className="mt-8 mb-2 w-full">
          <div className="mb-1 grid grid-cols-2 gap-x-12 gap-y-16 w-full ">
            <div className=" w-full">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Food Name
              </Typography>
              <Input
                size="lg"
                defaultValue={foodName}
                placeholder="Food Name"
                name="foodName"
                type="text"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full mt-8"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className=" w-full">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Price
              </Typography>
              <Input
                size="lg"
                defaultValue={price}
                placeholder="Price"
                name="price"
                type="text"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full mt-8"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className=" w-full">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Food Category
              </Typography>
              <Input
                size="lg"
                defaultValue={foodCategory}
                placeholder="food Category"
                name="foodCategory"
                type="text"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full mt-8"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className=" w-full">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Food Image
              </Typography>
              <Input
                size="lg"
                defaultValue={foodImage}
                type="url"
                name="foodImage"
                required
                placeholder="https://example.jpg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full mt-8"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className=" w-full">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Made By
              </Typography>
              <Input
                size="lg"
                defaultValue={madeBy}
                placeholder="Made By"
                name="madeBy"
                type="text"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full mt-8"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className=" w-full">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Food Origin
              </Typography>
              <Input
                size="lg"
                defaultValue={foodOrigin}
                placeholder="Food Origin"
                name="foodOrigin"
                type="text"
                required
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full mt-8"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>

          <div className="w-full mt-16">
            <Textarea name="shortDescription" label="Message" />
          </div>

          <div className=" mt-12">
            <button
              type="submit"
              className="mt-6 bg-gradient-to-r from-[#d0a260] to-[#c79c60da]  w-full py-3 rounded-lg font-bold text-white  text-xl"
            >
              Update
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default UpdateAddedFood;
