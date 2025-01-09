import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import JobBody from "./JobBody";

function JobVa() {
  return (
    <>
      <Helmet>
        <title>JOVA | 구인구직</title>
      </Helmet>
      <Header />
      <JobBody />
    </>
  );
}

export default JobVa;
