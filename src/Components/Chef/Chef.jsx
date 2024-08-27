import ChefCard from "../ChefCard/ChefCard";


const Chef = () => {

    const chefsInfo = [
        {
            "name": "Elif Yilmaz",
            "title": "Executive Chef",
            "image_url": "https://i.postimg.cc/tgB7nwsL/chef-7.jpg"
        },
        {
            "name": "Emre Yilmaz",
            "title": "Head Chef",
            "image_url": "https://i.postimg.cc/ZRgRVNFH/chef-5.jpg"
        },
        {
            "name": "Orhan Demir",
            "title": "Pastry Chef",
            "image_url": "https://i.postimg.cc/CMzmvfVq/chef-6.jpg-887827.jpg"
        },
        {
            "name": "David O'Hara",
            "title": "Sous Chef",
            "image_url": "https://i.postimg.cc/PJwqcqSj/chef-4.jpg.jpg"
        },
        {
            "name": "Ayumi Nakamura",
            "title": "Sushi Chef",
            "image_url": "https://i.postimg.cc/7Yht7ntB/chef-8.jpg"
        },
        {
            "name": "Marco Rossi",
            "title": "Pasta Chef",
            "image_url": "https://i.postimg.cc/JtChWWFB/chef-2.jpg"
        }
    ]

    return (
        <>
        <div className=" text-center mb-12 my-28 space-y-6">
            <h1 className=" text-2xl lg:text-5xl font-bold">Meet Our Culinary Masters</h1>
            <p className=" lg:px-24">we believe that great food starts with great people. Our team of culinary masters is dedicated to crafting unforgettable dining experiences that delight and inspire. Each chef brings a unique blend of skill, passion, and cultural heritage to our kitchen, ensuring that every dish we serve is a masterpiece in its own right.</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-12">
            {
                chefsInfo.map( chef => <ChefCard key={chef.name} chef={chef} /> )
            }
        </div>
        </>
    );
};

export default Chef;