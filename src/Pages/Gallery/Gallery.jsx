import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GalleryModal from "../../Components/GalleryModal/GalleryModal";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";


const Gallery = () => {
    const data = useLoaderData()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(data);

    // post info for gallery 

    const handleGalleryForm = (e) => {
        e.preventDefault();
        const form = e.target;
    
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const text = form.text.value;
    
        const galleryInfo = {
          name,
          photoURL,
          text,
        };
    
        console.log(galleryInfo);
    
        axios.post("https://restaurant-management-server-gray.vercel.app/gallery", galleryInfo)
        .then((res) => {
                // console.log("res in purchase -->",res)
          if (res.status === 200) {
            toast.success("Congratulations! You've successfully Added Item.");
            setTimeout(() => {
                navigate(0)
                // navigate(location?.state ? location.state : "/");
              }, 1100);
          }
        })
        .catch( () => {
                // console.log("er in purchase -->",error)
            toast.error(
                "Oops! Login failed.Wrong email and password. Please check your information and try again."
              );
        })
      };
    
    return (
        <>

        <div className=" bg-[url('https://i.postimg.cc/qB2GpYWx/pexels-fauxels-3184192.jpg')] w-full h-[320px] bg-cover bg-center bg-no-repeat my-8 rounded-xl relative ">
                <div className="absolute inset-0 grid h-full w-full bg-[#1d1d1d70] rounded-xl">
                <div className="text-white  pt-28">
                    <h1 className=" text-4xl font-bold text-center ">
                    Explore Our Enormous Food Gallery.{" "}
                    </h1>
                    <div className=" text-center mt-4 text-xl flex justify-center items-center gap-2">
                    <p>Cooking </p>
                    <p className=" border-l-[3px] h-4 border-[#d0a260]"></p>
                    <p className="">Food Gallery</p>
                    </div>
                    
                </div>
                </div>
            </div>
        
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
            <GalleryModal handleGalleryForm={handleGalleryForm} />
        </div>
        <ToastContainer autoClose={1000} />
        </>
    );
};

export default Gallery;

    
   
   