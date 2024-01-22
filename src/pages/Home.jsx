import CardSection from "../Components/Cards";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Stocks from "../Components/Stocks";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <main>
        <Hero />
        <Stocks/>
        <CardSection/>
      </main>
    </div>
  );
}

export default Home;
