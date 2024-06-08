import "./Profile.scss";
import Header from "../../widgets/Header/Header.jsx";
import Footer from "../../widgets/Footer/Footer.jsx";
import UserHeader from "../../widgets/user/UserHeader/UserHeader.jsx";
import UserMain from "../../widgets/user/UserMain/UserMain.jsx";

export default function Profile() {
  return (
    <>
      <Header />
      <main>
        <UserHeader name={"Имя"} nickname={"ник"}/>
        <UserMain/>
      </main>
      <Footer />
    </>
  );
}
