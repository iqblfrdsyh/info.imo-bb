import MainLayout from "../components/layouts/main.layout";

const Home = () => {
  const styles = {
    backgroundImage: "url('./assets/background/bg.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  };

  return (
    <MainLayout>
      <div style={styles}></div>
    </MainLayout>
  );
};

export default Home;
