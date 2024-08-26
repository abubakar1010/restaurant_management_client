import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";
import GalleryModal from "../../Components/GalleryModal/GalleryModal";


const Gallery = () => {
    const data = useLoaderData()
    const {user} = useContext(AuthContext)
    console.log(data);

    const handleAddOnGallery = () => {}
    
    return (
        <>
        
            < div className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-12 md:grid-cols-3">
        {data.map(({_id, photoURL, text }) => (
          <div className="relative" key={_id}>
            <img
              className="h-56  w-full max-w-full rounded-lg object-cover object-center"
              src={photoURL}
              alt="gallery-photo"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity  flex flex-col justify-center items-center text-white p-4 duration-500 hover:duration-500 ">
        <h3 className="text-xl font-bold">{user?.displayName}</h3>
        <p className="text-sm">{text}</p>
      </div>
          </div>
        ))}

            </div>
        <div className=" my-12 text-center">
            <GalleryModal />
        </div>
        </>
    );
};

export default Gallery;

    
   
   