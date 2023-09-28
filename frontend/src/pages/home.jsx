import Banner from "../components/banner/banner";
import Cards from "../components/cards/cards";
import MainLayout from "../components/layouts/main.layout";
import MapsMLBB from "../components/maps/mapsMLBB";
import TimelineMLBB from "../components/timeline/timeline";
import TopRank from "../components/top rank/top.rank";

const Home = () => {
  const backgroundStyles = {
    backgroundImage: "url('./assets/background/bg.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  };

  const filterStyles = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    mixBlendMode: "multiply",
    background: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <MainLayout>
      <div style={backgroundStyles} className="-z-50" />
      <div style={filterStyles} className="-z-50" />
      <div className="mx-[50px]">
        <Banner />
        <div className="my-20 flex justify-center gap-10 flex-wrap">
          <Cards.cardVideo />
          <Cards.cardVideo />
          <Cards.cardVideo />
        </div>
        <h2 className="text-[30px] font-semibold">
          <span className="text-blue-900 font-extrabold text-[45px] pr-5">
            |
          </span>
          About Mobile Legends
        </h2>
        <div className="ms-5 mt-10 flex gap-10 mb-16">
          <img
            src="./assets/logo/ml.jpg"
            alt=""
            width={250}
            className="rounded-md"
          />
          <p className="w-[60%] text-[18px]">
            Mobile Legends: Bang Bang is a mobile video game with the
            multiplayer online battle arena (MOBA) genre developed and published
            by Moonton, a subsidiary of ByteDance. Released in 2016, the game
            has grown in popularity worldwide, especially in the Southeast Asia
            region, and has since surpassed 1 billion downloads, with a peak
            monthly player base of 100 million. In 2021, "Mobile Legends: Bang
            Bang" reached revenue Its all-time gross is US$1 billion with 44
            percent of its revenue coming from outside Asia, making it the top
            mobile game of its genre with the most global appeal.
          </p>
        </div>
        <h2 className="text-[25px] font-semibold text-center mb-10">
          <span>-</span> Mobile Legends Journey <span>-</span>
        </h2>
        <TimelineMLBB />
        <h2 className="text-[30px] font-semibold mb-10 mt-16">
          <span className="text-blue-900 font-extrabold text-[45px] pr-5">
            |
          </span>
          Mobile Legends Maps
        </h2>
        <MapsMLBB />
        <h2 className="text-[25px] font-semibold text-center mb-10 mt-16">
          <span>-</span> Top Banned Hero <span>-</span>
        </h2>
        <TopRank.TopBannedHero />
        <h2 className="text-[25px] font-semibold text-center mb-10 mt-16">
          <span>-</span> Top Pick Hero <span>-</span>
        </h2>
        <TopRank.TopPickHero />
      </div>
    </MainLayout>
  );
};

export default Home;
