import React, { useContext } from "react";
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
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
 

const GalleryModal = () => {

    const [open, setOpen] = React.useState(false);
    const {user} = useContext(AuthContext)

 
    const handleOpen = () => setOpen(!open);
    const handleGalleryForm = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const text = form.text.value;

        const galleryInfo = {
            name,
            photoURL,
            text
        }

        console.log(galleryInfo);
        
        axios.post('http://localhost:5000/gallery',galleryInfo)
        .then( res => {
            console.log(res);
            
        })

    }

    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
        Add Product
      </Button>
      <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
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
        <DialogBody className="space-y-4 pb-6">
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
          <Button type="submit" className="ml-auto" onClick={handleOpen}>
            Add Product
          </Button>
        </DialogFooter>
        </form>
      </Dialog>
        </>
    );
};

export default GalleryModal;

