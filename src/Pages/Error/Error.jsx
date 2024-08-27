import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <>
        <div className=" bg-[url('https://i.postimg.cc/kMfg17Jj/21586054-Na-Nov-26.jpg')] w-full h-screen bg-cover bg-center bg-no-repeat relative ">
            
                <div className=" w-full text-center pb-12 flex justify-center items-end h-full">
                  <Link to={"/"}>
                    <button className="  px-7 py-2 rounded-sm font-bold text-white text-xl bg-gradient-to-r from-[#d0a260] to-[#c79c60da]">Go Home</button>
                  </Link>
                </div>
              
            </div>
          
        </>
    );
};

export default Error;