import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  Card,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { toast } from "react-toastify";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios.get(`https://restaurant-management-server-gray.vercel.app/purchase/${user?.email}`, {withCredentials: true}).then((res) => {
      console.log(res);
      setOrdersData(res.data);
    });
  }, [user?.email]);

  const handleDeleteItem = (id) => {
    // console.log("deleted");
    axios.delete(`https://restaurant-management-server-gray.vercel.app/purchase/delete/${id}`)
      .then((res) => {
        // console.log("res in purchase -->",res)
        const updatedItem = ordersData.filter((item) => item._id !== id);
        setOrdersData(updatedItem);
        if (res.status === 200) {
          toast.success("Congratulations! successfully Update Item.");
        }
      })
      .catch(() => {
        // console.log("er in purchase -->",error)
        toast.error("Oops! Update failed. Please try again.");
      });
  };

  //

  const TABLE_HEAD = ["Foods", "Price", "Email", "Date", ""];

  return (
    <>
      <Card className="h-full w-full">
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ordersData.map(
                ({ foodImage, foodName, price, date, _id }, index) => {
                  const isLast = index === ordersData.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={foodImage}
                            alt={foodName}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {foodName}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user?.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>

                      <td
                        onClick={() => handleDeleteItem(_id)}
                        className={classes}
                      >
                        <Tooltip content="Delete Item">
                          <IconButton variant="text">
                            <RiDeleteBin6Fill className=" h-4 w-4 text-red-600"></RiDeleteBin6Fill>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default Orders;
