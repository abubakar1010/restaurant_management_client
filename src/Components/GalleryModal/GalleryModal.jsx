import React, { useContext } from "react";
import PropTypes from 'prop-types'
import {
  Input,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const GalleryModal = ({handleGalleryForm}) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);


  return (
    <>
      <Button
        onClick={() => {
          if (!user?.email) {            
            return navigate('/login', {state: '/gallery'})
          }
          handleOpen();
        }}
        className="mt-6 px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]"
      >
        Add Item
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen} className=" px-4 py-2">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Manage Item
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Keep your records up-to-date and organized.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <form onSubmit={handleGalleryForm} action="">
          <DialogBody className="space-y-4 ">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Name
              </Typography>
              <Input
                color="gray"
                readOnly
                defaultValue={user?.displayName}
                size="lg"
                placeholder="eg. White Shoes"
                name="name"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Phot URL
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="eg. White Shoes"
                name="photoURL"
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
              >
                Description
              </Typography>
              <Textarea
                name="text"
                rows={3}
                placeholder="eg. This is a white shoes with a comfortable sole."
                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button type="submit" className="ml-auto px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]" onClick={handleOpen}>
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

GalleryModal.propTypes={
    handleGalleryForm: PropTypes.func
}

export default GalleryModal;
