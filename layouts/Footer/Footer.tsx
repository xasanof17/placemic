import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-500 from-10% to-blue-500 to-100%">
      <div className="container flex flex-col space-y-8 py-6 sm:py-10">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
