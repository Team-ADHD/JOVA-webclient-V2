import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Notion from "./page/Notion/Notion";
import Profil from "./page/Profil/profil";
import JobVa from "./page/JobPage/JobVaPage";
import Detail from "./page/Detail/Detail";
import GlobalStyle from "./fonts/GlobalStyle";
import Notification from "./page/Notion/notification/Notification";
import JobNotion from "./page/JobPage/JobNotion/JobNotion";
import ProfilCorrection from "./page/Profil/profilcorrection/ProfilCorrection";
import LoginPage from "./page/login/loginPage";
import DetailJob from "./page/DetailJob/DetailJob";
import SignUp from "./page/login/SignUp";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobpage" element={<JobVa />} />
        <Route path="/notion" element={<Notion />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/notion/detail" element={<Detail />} />
        <Route path="/jobpage/detail" element={<DetailJob />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/jobnotion" element={<JobNotion />} />
        <Route path="/profilcorrection" element={<ProfilCorrection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
