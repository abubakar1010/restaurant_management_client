import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Chef from "../../Components/Chef/Chef";
import TopSelling from "../../Components/TopSelling/TopSelling";
import ChefRecommendation from "../../Components/ChefRecommendation/ChefRecommendation";



const Home = () => {
    return (
        <>
         <Helmet>
        <title>Cooking | Home</title>
      </Helmet>
        <div>
            <Banner/>
            <TopSelling />
            <Chef />
            <ChefRecommendation />
        </div>
        </>
    );
};

export default Home;