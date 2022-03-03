import { Link } from "gatsby";
import React, { ReactNode, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Burger from "../images/icons/hamburger.svg";
import Phone from "../images/icons/phone.svg";
import Mail from "../images/icons/mail.svg";
import LinkedIn from "../images/icons/linked-in.svg";
import { inside } from "../styles/inside.module.css";

type Props = {
  children: ReactNode;
  page: string;
};

export default function Layout({ children, page }: Props) {
  const [open, setOpen] = useState(false);

  const pageName = (name: string) =>
    page === name ? <b className="text-red-800">{name}</b> : name;
  return (
    <div className="absolute w-full top-0 bottom-0 flex flex-col">
      <header className="z-10 py-2 px-4 bg-white drop-shadow relative">
        <div className="flex justify-between md:w-full md:max-w-4xl md:mx-auto">
          <div className="h-full w-auto">
            <StaticImage
              src="../images/logos/light_logo.png"
              alt="light logo"
              className="h-auto w-28"
            />
          </div>
          <button className="sm:hidden" onClick={() => setOpen(!open)}>
            <Burger alt="burger" className="self-center" />
          </button>
          <nav
            className={`${
              !open && "hidden"
            } absolute bg-white right-0 p-4 border-2 border-black
            sm:static sm:block sm:border-0`}
          >
            <ul
              className="flex flex-col z-10 space-y-2 
            sm:space-y-0 sm:z-0 sm:flex-row sm:space-x-10 sm:items-center h-full "
            >
              <Link to="/">{pageName("Home")}</Link>
              <Link to="/services">{pageName("Services")}</Link>
              <Link to="/contact">{pageName("Contact")}</Link>
              <Link to="/about">{pageName("About Us")}</Link>
              <Link to="/careers">{pageName("Careers")}</Link>
            </ul>
          </nav>
          <button
            className="hidden sm:block border-2 rounded-lg px-2 min-h-[40px]
          self-center border-red-800 text-red-800"
          >
            <Link to="/contact" className="mx-auto ">
              Book a Free Consultation
            </Link>
          </button>
        </div>
      </header>
      <main className="flex-grow relative sm:space-y-8 ">{children}</main>
      <footer
        className={`${inside} bg-black text-green-50 text-sm mt-8 space-y-4
       items-center`}
      >
        <div
          className="grid gap-y-4 mx-auto
        sm:flex sm:justify-between sm:max-w-4xl sm:gap-x-2"
        >
          <div className="col-span-2">
            <div className="w-52">
              <StaticImage
                src="../images/logos/dark_logo.png"
                alt="dark logo"
                className="justify-self-center"
              />
              <div>
                <p>© Henderson Reporting {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold">Address</h4>
            <p>
              1901-5000 Yonge St., <br />
              North York, ON, M2N 7E9
            </p>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold">Hours</h4>
            <p>M 8:00AM – 5:00PM</p>
            <p>T 8:00AM – 5:00PM</p>
            <p>W 8:00AM – 5:00PM</p>
            <p>T 8:00AM – 5:00PM</p>
            <p>F 8:00AM – 5:00PM</p>
          </div>
          <div className="col-span-2 sm:col-span-1 ">
            <h4 className="font-bold">Pages</h4>
            <nav className="flex flex-row space-x-4 md:space-x-0 sm:flex-col">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/careers">Careers</Link>
            </nav>
          </div>
          <div className="col-span-2 sm:col-span-1 space-y-1">
            <h4 className="font-bold">Contact</h4>
            <p>
              <Mail alt="mail" className="inline mx-2" />
              sales@hendersonreporting.com
            </p>
            <p>
              <Phone alt="phone" className="inline mx-2" />
              416-471-0699
            </p>
            <p>
              <LinkedIn alt="LinkedIn" className="inline mx-2" />
              <a href="https://www.linkedin.com/company/henderson-reporting/">
                linkedin.com/henderson-reporting
              </a>
            </p>
          </div>
        </div>
        <p>
          Website designed and coded by{" "}
          <a className="underline" href="https://the-abe-train.com">
            The Abe Train
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
