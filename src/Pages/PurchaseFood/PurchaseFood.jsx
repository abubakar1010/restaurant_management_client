import { Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";


const PurchaseFood = () => {

    const {user} = useContext(AuthContext)
    // console.log(user);
    const {id} = useParams()

    const [foodItem, setFoodItem] = useState([]);

    useEffect( () => {

      axios.get(`https://restaurant-management-server-gray.vercel.app/food/${id}`)
      .then( res => {
        setFoodItem(res.data)
      })
      .catch( error => {
        console.log(error);
        
      })
    },[])
    // console.log(data);
    const {
        _id,
        foodName,
        price,
        quantity,
        foodImage,
        totalPurchase,
        foodCategory,
        email
      } = foodItem;
    //   console.log(foodItem);
    // console.log(quantity);
    const navigate = useNavigate();
    const location = useLocation()
    
      const handlePurchase = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const foodCategory = form.foodCategory.value;
        const date = moment().format('MMMM Do YYYY, h:mm:ss a');
        const purchaseData = {foodName, price,name, email,quantity,date,totalPurchase, foodImage,foodCategory}
        // console.log(purchaseData);
        
        axios.post(`https://restaurant-management-server-gray.vercel.app/purchase/${_id}`, purchaseData)
        .then( res => {
            if (res.status === 200) {
                console.log(res);
                toast.success("Congratulations! You've successfully purchased item");
                setTimeout(() => {
                    navigate(location?.state? location.state : '/')
                    // navigate(0)
                }, 1100);
            }
            // console.log("res in purchase -->",res)
        })
        .catch( () => {
            toast.error(
                "Oops! Failed Purchased Item. Please try again."
              );
            // console.log("Error in purchase -->",error);
            
        })
      }

    //   console.log("disabled",user?.email,email);
    //   if (quantity === 0 || email === user?.email) {
        
    //   }
    
    return (
        <>
        <Helmet>
        <title>Cooking | Purchase</title>
      </Helmet>
                <div>
            <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form
                onSubmit={handlePurchase}
              className="mt-8 mb-2 w-full"
            >
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
                Food Category
                </Typography>
                <Input
                  size="lg"
                  defaultValue={foodCategory}
                  placeholder="Food Category"
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
                  User Name
                </Typography>
                <Input
                  size="lg"
                  readOnly
                  defaultValue={user?.displayName}
                  placeholder="name"
                  name="name"
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
                  Your Email
                </Typography>
                <Input
                  size="lg"
                  readOnly
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  required
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full mt-8"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                </div>
                <div className=" w-full">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Quantity
                </Typography>
                <Input
                  size="lg"
                  defaultValue={quantity}
                  placeholder="quantity"
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
              </div>
              
              <div className=" mt-12">
              <button
                type="submit"
                className={`mt-6 bg-gradient-to-r  from-[#d0a260] to-[#c79c60da] disabled:opacity-40  w-full py-3 rounded-lg font-bold text-white  text-xl`}
                disabled={quantity === 0 || email === user?.email ? true : false}
              >
                Purchase
              </button>
              <p className=" text-center mt-3 text-red-600">{quantity === 0 && 'This item is not available for purchase as it is out of stock' || email === user?.email && "You cannot purchase an item that you have added yourself."}</p>
              </div>
            </form>
          </Card>
        </div>
        <ToastContainer autoClose={1000} />
        </>
    );
};

export default PurchaseFood;


