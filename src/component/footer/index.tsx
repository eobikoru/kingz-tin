import Image from "next/image";
import logo from "../../assets/logo/Tinaus Kingz Engineering Icon.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si"; // TikTok icon
import footerImg from "../../assets/images/windmill.jpeg";

const socialLinks = [
  {
    icon: SiTiktok,
    href: "https://www.tiktok.com/@tinauskingzengineering",
    label: "TikTok",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/share/17WMZnQE7Y/",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/tinauskingzengineering?utm_source=qr&igsh=bTQzejlqbHgzOWt0",
    label: "Instagram",
  },
];

const Footer = () => {
  const date = new Date().getFullYear();
  const heroStyle = {
    backgroundImage: `url(${footerImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "0.75rem",
  };

  return (
    <div className="relative mt-60">
      <div className="absolute -top-44">
        <div
          className="h-[370px] mx-1 md:max-w-[85%] lg:max-w-[70%] md:mx-auto text-white"
          style={heroStyle}
        >
          <div className="h-full flex items-center bg-black/70 justify-center text-white py-12 bg-no-repeat bg-cover rounded-xl w-full">
            <div className="h-full w-full md:px-4 lg:px-5 mx-auto flex justify-center flex-col items-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-9">
                Elevate your home with Tinaus Kings.
              </h1>
              <p className="mb-4 px-1 md:px-0 md:w-3/5 leading-relaxed text-center">
                At Tinuas Kingz, we believe in the power of connection to drive
                innovation and collaboration. Join our growing community of
                forward-thinkers, industry leaders, and passionate individuals
                who are shaping the future of electronic communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="pb-10 bg-blue-950 p-4 text-white/80 lg:text-xs md:text-sm text-base lg:leading-loose flex flex-col md:flex-row items-start md:items-center justify-around w-full md:h-full md:pt-[13rem] lg:pt-[17rem]">
        <section className="mx-2 mt-60 md:mt-10 md:py-0">
          <Image src={logo} alt="logo" width={40} height={40} className="mb-[.3rem]" />
          <p>&copy; {date} Tinaus Kingz Engineering Inc.</p>
          <p>All Rights Reserved</p>
          <p>Privacy Policy | Terms of Use</p>
          <p>Cookies Preferences</p>
        </section>

        <section className="mx-3 my-2 md:mt-14">
          <ul>
            <li className="mt-3">Electrical</li>
            <div className="w-[1.2rem] h-[.4px] bg-white/40 rounded"></div>
            <li className="my-2">Domestic</li>
            <li className="my-2">Industrial</li>
            <li className="my-2">Solar/Inverter</li>
          </ul>
        </section>

        <section className="mx-3 my-2 md:mt-14">
          <ul>
            <li className="mt-3">Electronics</li>
            <div className="w-[1.2rem] h-[.4px] bg-white/40 rounded"></div>
            <li className="my-2">Security (CCTV)</li>
            <li className="my-2">Network</li>
            <li className="my-2">Contact Us</li>
          </ul>
        </section>

        <section className="mx-3 my-2 md:mt-14">
          <ul>
            <li className="mt-3">Partnership</li>
            <div className="w-[1.2rem] h-[.4px] bg-white/40 rounded"></div>
            <li className="my-2">Interior Design</li>
          </ul>
        </section>

        <section className="mx-3 my-2 md:mt-14">
          <ul>
            <li className="mt-3">FOLLOW US ON SOCIAL MEDIA</li>
            <div className="w-[1.2rem] h-[.4px] bg-white/40 rounded"></div>
            <span className="flex gap-3 mt-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-[1px] p-2 border-white/80 rounded-full flex items-center justify-center w-10 h-10"
                >
                  <Icon size={20} />
                </a>
              ))}
            </span>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
