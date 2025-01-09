import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import InfoBoxJob from "./infoBoxJob";
import Header from "../../components/Header";

function DetailJob() {
  const location = useLocation();
  const { Author, Title, EndsAt, Content } = location.state || {}; // 전달된 데이터 수신

  return (
    <div>
      <Helmet>
        <title>JOVA | {Title}</title>
      </Helmet>
      <Header />
      <InfoBoxJob
        Name={Author}
        Title={Title}
        TimeDate={EndsAt}
        Contents={Content}
      />
    </div>
  );
}

export default DetailJob;
