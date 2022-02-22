import * as React from "react";
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
];
const MAPS_API_KEY = process.env.MAPS_API_KEY || "";

export default function IndexPage() {
  return (
    <Layout>
      <section
        className={`${homeBanner} p-4 h-64 flex flex-col justify-between shadow-inner`}
      >
        <div>
          <h1 className="text-4xl text-teal-800 font-header font-bold">
            Depositions & Transcriptions
          </h1>
          <p className="my-4">Based in toronto, available across Canada.</p>
        </div>
        <button
          style={{ border: "1px solid green" }}
          className="w-fit mx-auto
        text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
        hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
        font-bold rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Get a Free Quote
        </button>
      </section>
      <section className="space-y-4 px-4">
        <hr className="w-1/2 mx-auto" />
        <p className="text-center">
          <b>Henderson Reporting & Transcribing Inc.</b> offers a variety of
          in-demand courtroom services. We uphold a guaranteed standard of
          accuracy, efficiency, and security.
        </p>
        <hr className="w-1/2 mx-auto" />
      </section>
      <section className="space-y-4 px-4 ">
        <h2 className="font-header text-3xl font-bold">What we do</h2>
        <div className="grid">
          {servicesBrief.map(({ name, desc, icon }) => {
            return (
              <>
                <div className="row-span-2 col-span-1 self-center align-middle mx-2 my-5">
                  {icon}
                </div>
                <h3 className="text-lg font-bold row-span-1 col-start-2 self-end">
                  {name}
                </h3>
                <p className="row-span-1 ">{desc}</p>
              </>
            );
          })}
        </div>
      </section>
      <section className="bg-teal-900 text-green-50 px-4 py-6">
        <h2 className="font-header text-3xl font-bold">Our Clients</h2>
        <StaticImage
          src="../images/stock/handshake.jpg"
          alt="handshake"
          className="my-4 rounded-lg drop-shadow-lg"
        />
        {quotes.map(({ name, org, quote }) => {
          return (
            <div key={name}>
              <blockquote className="py-3">{quote}</blockquote>
              <div className="flex justify-between">
                <div>
                  <b>{name}</b>
                  <br />
                  <b>{org}</b>
                </div>
                <div className="flex w-24 my-auto space-x-12">
                  <Left height={30} width={20} />
                  <Right height={30} width={20} />
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="px-4 space-y-4">
        <h2 className="font-header text-3xl font-bold">How to Find Us</h2>
        <div>
          <h3 className="text-lg font-bold">
            Conveniently located at Yonge & Shepphard
          </h3>
          <p>1901-5000 Yonge Street</p>
          <p>North York, ON, M2N 7E9</p>
        </div>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=5000+Yonge+St&key=${MAPS_API_KEY}`}
          alt="Map to to the office"
          className="border-2 border-black"
        />
        <div className="w-2/3">
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
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>
            We offer your first consultation for free. Our services are offerred
            online or on our premises.
          </p>
          <p className="m-2">
            <Mail alt="mail" className="inline mx-2" />
            sales@hendersonreporting.com
          </p>
          <p className="m-2">
            <Phone alt="phone" className="inline mx-2" />
            416-471-0699
          </p>
        </div>
        <button
          style={{ border: "1px solid green" }}
          className="w-fit mx-auto block
        text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
        hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
        font-bold rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Book a Consultation Today
        </button>
      </section>
    </Layout>
  );
}
