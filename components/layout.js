import { useContext } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { GlobalContext } from "../pages/_app";

const Layout = ({ children }) => {
  const { footer_address_email_phone ,footer_sub} = useContext(GlobalContext);

  return (
    <>
      <Header />
      {children}
      <Footer footer_address_email_phone={footer_address_email_phone} footer_sub={footer_sub}/>
    </>
  );
};

export default Layout;
