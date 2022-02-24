import React, { useEffect, useReducer, useState } from "react";
import Layout from "../layouts/Layout";
import Scales from "../images/icons/scales.svg";
import Globe from "../images/icons/globe.svg";
import Medical from "../images/icons/medical.svg";
import Maple from "../images/icons/maple.svg";
import Calendar from "../images/icons/calendar.svg";
import Document from "../images/icons/document.svg";
import Left from "../images/icons/left.svg";
import Right from "../images/icons/right.svg";
import Mail from "../images/icons/mail.svg";
import Phone from "../images/icons/phone.svg";
import { StaticImage } from "gatsby-plugin-image";
import { homeBanner } from "../styles/banners.module.css";
import { inside } from "../styles/inside.module.css";
import { Link } from "gatsby";

const servicesBrief = [
  {
    name: "Legal Transcriptions",
    desc: "Police DVDs, 911 calls, personal cell phone calls/videos.",
    icon: <Scales width={75} />,
  },
  {
    name: "Depositions",
    desc: "Depositions in-house and recordings over Zoom conference.",
    icon: <Document width={75} />,
  },
  {
    name: "Medical Transcriptions",
    desc: "Medical office transcriptions and lectures.",
    icon: <Medical width={75} />,
  },
  {
    name: "Year-round",
    desc: "Medical office transcriptions and lectures.",
    icon: <Calendar width={75} />,
  },
  {
    name: "Bilingual",
    desc: "Recordings and transcriptions in English, French, and more.",
    icon: <Globe width={75} />,
  },
  {
    name: "Nationwide",
    desc: "In-house services across Ontario, digital services Canada-wide.",
    icon: <Maple width={75} />,
  },
];

const quotes = [
  {
    name: "Alexei Zaitsev, Esq.",
    org: "Mass Tsang LLP",
    quote: `“Whether I need a transcript for an urgent bail review or an appeal, I can trust that my transcripts will always be delivered on time.  Most importantly, I can trust that my transcripts are always accurate. The customer service is always top notch - prompt, courteous, responsive, and attentive.  You can’t go wrong with choosing Henderson Reporting for all your transcription needs!”`,
  },
  {
    name: "Robert Karrass, Esq.",
    org: "Karrass Law",
    quote: `“I’ve used Henderson Reporting & Transcribing Inc. on a number of occasions.  They are professional, very reliable, and have excellent turnaround time for transcripts.  I will absolutely use them again and I highly recommend them for all your court reporting needs.”`,
  },
];
const MAPS_API_KEY = process.env.GATSBY_MAPS_API_KEY || "";

function reducer(state: number, action: "next" | "prev") {
  switch (action) {
    case "next":
      return state < quotes.length - 1 ? state + 1 : 0;
    case "prev":
      return state !== 0 ? state - 1 : quotes.length - 1;
    default:
      throw new Error();
  }
}

export default function IndexPage() {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [quote, setQuote] = useState("");

  const [quoteIdx, dispatch] = useReducer(reducer, 0);
  useEffect(() => {
    setName(quotes[quoteIdx].name);
    setOrg(quotes[quoteIdx].org);
    setQuote(quotes[quoteIdx].quote);
  }, [quoteIdx]);

  return (
    <Layout page="Home">
      <section
        className={`${homeBanner} ${inside} h-64 md:h-[350px] shadow-inner z-0 overflow-clip`}
      >
        <div
          className="flex flex-col w-fit justify-between h-56 md:pt-12
        sm:block sm:space-y-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl text-teal-800 font-header font-bold">
              Depositions & Transcriptions
            </h1>
            <p className="md:text-lg sm:my-5">
              Based in Toronto, available across Canada.
            </p>
          </div>
          <Link to="/contact" className="mx-auto ">
            <button
              style={{ border: "1px solid green" }}
              className="sm:block sm:mx-auto
        text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
        hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
        font-bold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Get a Free Quote
            </button>
          </Link>
        </div>
      </section>
      <section className="space-y-4 px-4 max-w-4xl mx-auto">
        <hr className="w-1/2 mx-auto" />
        <p className="text-center">
          <b>Henderson Reporting & Transcribing Inc.</b> offers a variety of
          in-demand courtroom services. We uphold a guaranteed standard of
          accuracy, efficiency, and security.
        </p>
        <hr className="w-1/2 mx-auto" />
      </section>
      <section className="space-y-4 px-4 max-w-4xl mx-auto">
        <h2 className="font-header text-3xl font-bold">What we do</h2>
        <div className="grid grid-cols-3 gap-y-6 md:grid-cols-9 auto-cols-min">
          {servicesBrief.map(({ name, desc, icon }) => {
            return (
              <React.Fragment key={name}>
                <div
                  key={name}
                  className="col-span-1 justify-self-center self-center"
                >
                  {icon}
                </div>
                <div className="col-span-2">
                  <h3 className="text-lg font-bold self-end">{name}</h3>
                  <p>{desc}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>
      <section
        className={`${inside} bg-teal-900 text-green-50 px-4 py-16 space-y-4`}
      >
        <h2 className="font-header text-3xl font-bold">Our Clients</h2>
        <div className="sm:flex sm:space-x-4">
          <StaticImage
            src="../images/stock/handshake.jpg"
            alt="handshake"
            width={400}
            className="my-4 rounded-lg drop-shadow-lg"
          />
          <div className="w-5/6 relative space-y-20">
            <blockquote className="py-3">{quote}</blockquote>
            <div className="flex justify-between">
              <div className="absolute bottom-4 left-0">
                <b>{name}</b>
                <br />
                <b>{org}</b>
              </div>
              <div className="flex w-24 my-auto space-x-12 absolute bottom-4 right-0">
                <Left height={30} width={20} onClick={() => dispatch("prev")} />
                <Right
                  height={30}
                  width={20}
                  onClick={() => dispatch("next")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${inside} px-4 space-y-4 d:space-y-0`}>
        <h2 className="font-header text-3xl font-bold">How to Find Us</h2>
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=5000+Yonge+St&key=${MAPS_API_KEY}`}
            alt="Map to to the office"
            className="border-2 border-black md:flex-grow md:h-60 self-center"
          />
          <div className="md:w-1/3 space-y-4">
            <div>
              <h3 className="text-lg font-bold">
                Conveniently located at Yonge & Shepphard
              </h3>
              <p>1901-5000 Yonge Street</p>
              <p>North York, ON, M2N 7E9</p>
            </div>

            <div>
              <h3 className="text-lg font-bold">Office Hours</h3>
              <div className="grid">
                <p>Monday</p>
                <p className="col-start-2"> 9:00AM – 5:00PM</p>
                <p>Tuesday</p>
                <p className="col-start-2"> 9:00AM – 5:00PM</p>
                <p>Wednesday</p>
                <p className="col-start-2"> 9:00AM – 5:00PM</p>
                <p>Thrusday</p>
                <p className="col-start-2"> 9:00AM – 5:00PM</p>
                <p>Friday</p>
                <p className="col-start-2"> 9:00AM – 5:00PM</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>
              We offer your first consultation for free. Our services are
              offerred online or on our premises.
            </p>
            <p className="m-2">
              <Mail alt="mail" className="inline mx-2" />
              sales@hendersonreporting.com
            </p>
            <p className="m-2">
              <Phone alt="phone" className="inline mx-2" />
              416-471-0699
            </p>
            <button
              style={{ border: "1px solid green" }}
              className="w-fit mx-auto block
           text-white font-bold bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
           file:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
           file:font-bold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Book a Consultation Today
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
