import "./footer.scss";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../Logo.jsx/Logo";

const companyLinks = [
  "About us",
  "Contact us",
  "Terms of use",
  "Privacy policy",
  "Customer support",
  "Reviews",
];
const quickLinks = [
  "Home",
  "My account",
  "Popular",
  "Add new",
  "Edit profile",
  "Become a seller",
  "",
];
const socialIcons = [
  <FaXTwitter key={1} />,
  <FaFacebookF key={2} />,
  <FaInstagram key={3} />,
  <FaLinkedinIn key={4} />,
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main-group">
        {/* all the links will be inside this footer group */}
        <div className="logo-box">
          <Logo />
        </div>
        <div className="footer-sub-group">
          <div className="company-box">
            <h2 className="heavy-text">Company</h2>
            <ul>
              {companyLinks.map((link, index) => {
                return (
                  <li key={index} className="cursor-pointer td-underline">
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="quick-links-box">
            <h2 className="heavy-text">Quick links</h2>
            <ul>
              {quickLinks.map((link, index) => {
                return (
                  <li key={index} className="cursor-pointer td-underline">
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="social-box">
          <h2>Social media</h2>
          <p>For all the latest updates follow us on</p>
          <ul className="social-links">
            {socialIcons.map((icon, index) => {
              return (
                <li key={index} className="cursor-pointer">
                  {icon}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <h1 className="copyright-text">©Al-Eaqarat. All rights reserved.</h1>
    </div>
  );
};

export default Footer;
