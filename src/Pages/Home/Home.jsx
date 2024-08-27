import Banner from "../../Components/Banner/Banner";
import Chef from "../../Components/Chef/Chef";
import TopSelling from "../../Components/TopSelling/TopSelling";



const Home = () => {
    return (
        <>
        <div>
            <Banner/>
            <TopSelling />
            <Chef />
        </div>
        </>
    );
};

export default Home;