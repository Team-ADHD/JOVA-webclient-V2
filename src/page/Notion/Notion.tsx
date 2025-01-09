import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import NotionBody from "./NotionBody";

function Notion() {
  return (
    <>
      <Helmet>
        <title>JOVA | 공지</title>
      </Helmet>
      <Header />
      <NotionBody />
    </>
  );
}

export default Notion;
