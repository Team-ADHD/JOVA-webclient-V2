import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import InfoBox from "./infoBox";
import Header from "../../components/Header";

function Detail() {
  const location = useLocation();
  const { Author, Title, EndsAt, Content } = location.state || {}; // 전달된 데이터 수신

  return (
    <div>
      <Helmet>
        <title>JOVA | {Title}</title>
      </Helmet>
      <Header />
      <InfoBox
        Name={Author}
        Title={Title}
        TimeDate={EndsAt}
        Contents={Content}
      />
    </div>
  );
}

export default Detail;
