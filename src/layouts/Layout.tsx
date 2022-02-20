import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Burger from "../images/icons/hamburger.svg";
import Phone from "../images/icons/phone.svg";
import Mail from "../images/icons/mail.svg";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="absolute w-full top-0 bottom-0 flex flex-col">
      <header className="flex w-full z-10 justify-between py-2 px-4 bg-white drop-shadow">
        <StaticImage
          src="../images/logos/light_logo.png"
          alt="light logo"
          height={40}
        />
        <Burger alt="burger" className="self-center" />
        <nav className="hidden">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Careers</Link>
        </nav>
        <button className="hidden">Book a Free Consultation</button>
      </header>
      <main className="flex-grow relative space-y-8">{children}</main>
      <footer className="bg-black text-green-50 text-sm space-y-2 mt-8 p-4">
        <StaticImage
          src="../images/logos/dark_logo.png"
          alt="dark logo"
          height={40}
        />
        <p>© Henderson Reporting 2022</p>
        <div>
          <h4 className="font-bold">Address</h4>
          <p>
            1901-5000 Yonge St., <br />
            North York, ON, M2N 7E9
          </p>
        </div>
        <div>
          <h4 className="font-bold">Hours</h4>
          <p>
            M 9:00AM – 5:00PM <br />
            T 9:00AM – 5:00PM <br />
            W 9:00AM – 5:00PM <br />
            T 9:00AM – 5:00PM <br />
            F 9:00AM – 5:00PM <br />
          </p>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p>
            <Mail alt="mail" className="inline mx-2" />
            sales@hendersonreporting.com
          </p>
          <p>
            <Phone alt="phone" className="inline mx-2" />
            416-471-0699
          </p>
        </div>
      </footer>
    </div>
  );
}
