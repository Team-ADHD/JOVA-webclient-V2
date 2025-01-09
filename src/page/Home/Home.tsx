import Header from "../../components/Header";
import HomeBody from "./HomeBody";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>JOVA | 홈</title>
      </Helmet>
      <Header />
      <HomeBody />
    </>
  );
}

export default Home;
