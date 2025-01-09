import styled from "styled-components";
import Header from "../../components/Header";
import ProfilPicture from "./profilPicture";
import { Helmet } from "react-helmet";

const ProfilWrapper = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Profil() {
  return (
    <>
      <Helmet>
        <title>JOVA | 프로필</title>
      </Helmet>
      <Header />
      <ProfilWrapper>
        <ProfilPicture />
      </ProfilWrapper>
    </>
  );
}

export default Profil;
