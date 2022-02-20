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
import { banner } from "../styles/banner.module.css";

const servicesBrief = [
  {
    name: "Legal Transcriptions",
    desc: "Police DVDs, 911 calls, personal cell phone calls/videos.",
    icon: <Scales />,
  },
  {
    name: "Depositions",
    desc: "Depositions in-house and recordings over Zoom conference.",
    icon: <Document />,
  },
  {
    name: "Medical Transcriptions",
    desc: "Medical office transcriptions and lectures.",
    icon: <Medical />,
  },
  {
    name: "Year-round",
    desc: "Medical office transcriptions and lectures.",
    icon: <Calendar />,
  },
  {
    name: "Bilingual",
    desc: "Recordings and transcriptions in English, French, and more.",
    icon: <Globe />,
  },
  {
    name: "Nationwide",
    desc: "In-house services across Ontario, digital services Canada-wide.",
    icon: <Maple />,
  },
];

const quotes = [
  {
    name: "Alexei Zaitsev, Esq.",
    org: "Mass Tsang LLP",
    quote: `“Whether I need a transcript for an urgent bail review or an appeal, I can trust that my transcripts will always be delivered on time.  Most importantly, I can trust that my transcripts are always accurate. The customer service is always top notch - prompt, courteous, responsive, and attentive.  You can’t go wrong with choosing Henderson Reporting for all your transcription needs!”`,
  },
];

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section
        className={`${banner} p-4 h-64 flex flex-col justify-between shadow-inner`}
      >
        <div>
          <h1 className="text-4xl text-green-800 font-header font-bold">
            Depositions & Transcriptions
          </h1>
          <p className="my-4">Based in toronto, available across Canada.</p>
        </div>
        <button className="mx-auto border-2 px-3 py-1 bg-green-50 rounded-md">
          Get a Free Quote Today!
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
      <section className="space-y-4 px-4">
        <h2 className="font-header text-3xl font-bold">What we do</h2>
        {servicesBrief.map(({ name, desc, icon }) => {
          return (
            <div key={name} className="flex space-x-4 h-24">
              <div className="w-20 mx-auto">
                {icon}
                {/* <img src={icon} alt={name} /> */}
              </div>
              <div className="w-fit">
                <h3 className="text-lg font-bold">{name}</h3>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
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
              <blockquote className="py-3 ">{quote}</blockquote>
              <div className="flex justify-between">
                <div>
                  <b>{name}</b>
                  <br />
                  <b>{org}</b>
                </div>
                <div className="flex w-16">
                  <Left />
                  <Right />
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="px-4 space-y-3">
        <h2 className="font-header text-3xl font-bold">How to Find Us</h2>
        <div>
          <h3 className="text-lg font-bold">
            Conveniently located at Yonge & Shepphard
          </h3>
          <p>1901-5000 Yonge Street, North York, ON, M2N 7E9</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Office Hours</h3>
          <p>Monday 9:00AM – 5:00PM</p>
          <p>Tuesday 9:00AM – 5:00PM</p>
          <p>Wednesday 9:00AM – 5:00PM</p>
          <p>Thrusday 9:00AM – 5:00PM</p>
          <p>Friday 9:00AM – 5:00PM</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>
            We offer your first consultation for free. Our services are offerred
            online or on our premises.
          </p>
          <p>
            <Mail alt="mail" className="inline mx-2" />
            sales@hendersonreporting.com
          </p>
          <p>
            <Phone alt="phone" className="inline mx-2" />
            416-471-0699
          </p>
        </div>
        <button className="bg-red-100 border-2 py-1 px-2 mx-auto block drop-shadow">
          Book a Consultation Today
        </button>
      </section>
    </Layout>
  );
};

export default IndexPage;
