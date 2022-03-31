import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../layouts/Layout";
import { servicesBanner } from "../styles/banners.module.css";
import Scales from "../images/icons/scales.svg";
import Globe from "../images/icons/globe.svg";
import Medical from "../images/icons/medical.svg";
import Maple from "../images/icons/maple.svg";
import Calendar from "../images/icons/calendar.svg";
import Document from "../images/icons/document.svg";
import { inside } from "../styles/inside.module.css";

export default function ServicesPage() {
  return (
    <Layout page="Services">
      <section
        className={`${servicesBanner} ${inside}
         p-4 h-64 flex flex-col items-centerjustify-between shadow-inner relative`}
      >
        <h1 className="text-4xl text-teal-100 font-header font-bold absolute bottom-0">
          Services
        </h1>
      </section>
      <section>
        <div
          className={`${inside} flex flex-col items-center sm:flex-row space-x-4 `}
        >
          <StaticImage
            src="../images/stock/video interview.jpg"
            alt="Video interview"
            className="my-4 rounded-sm drop-shadow-lg block"
            layout="constrained"
            width={1000}
          />
          <div className="space-y-2 md:w-[2000px]">
            <h2 className="text-xl font-header">Audio/video transcription</h2>
            <p>
              We provide high fidelity transcriptions of audio and video
              recordings. Our ACT certified transcriptionists don’t let anything
              fall through the cracks, and work with great efficiency to meet
              strict deadlines. We perform a variety of transcription services,
              including legal (courtroom proceedings, police DVDs, 911 calls,
              personal cell phone calls/videos) and medical (office
              transcriptions and lectures).
            </p>
          </div>
        </div>
        <div
          className={`${inside} flex flex-col items-center sm:flex-row space-x-4 `}
        >
          <StaticImage
            src="../images/stock/table interview.jpg"
            alt="Table interview"
            className="my-4 rounded-sm drop-shadow-lg block"
            width={1000}
          />
          <div className="space-y-2 md:max-w-xl">
            <h2 className="text-xl font-header">Discoveries and Depositions</h2>
            <p>
              Our team tackles highly sensitive discovery proceedings with the
              utmost reverence and professionalism. We do depositions in our
              office using all state-of-the-art software and recording equipment
              that can accommodate up to 8 speakers. Or if preferred, we can
              also bring all the equipment to your office, or even handle the
              recordings over video conference (e.g. Zoom or Skype).
            </p>
          </div>
        </div>
        <div
          className={`${inside} flex flex-col items-center sm:flex-row space-x-4 `}
        >
          <StaticImage
            src="../images/stock/letters.jpg"
            alt="Letter tiles"
            className="my-4 rounded-sm drop-shadow-lg block"
            width={1000}
          />
          <div className="space-y-2 md:max-w-xl">
            <h2 className="text-xl font-header">Translations</h2>
            <p>
              Our team is fluently bilingual and conducts flawless translations
              between French and English, and other languages on request. For
              live depositions, our certified translators can operate online or
              in-person. For recordings or files, we translate written documents
              as well as audio and video.
            </p>
          </div>
        </div>
        <div
          className={`${inside} flex flex-col items-center sm:flex-row space-x-4 `}
        >
          <StaticImage
            src="../images/stock/staff laptops.jpg"
            alt="Staff laptops"
            className="my-4 rounded-sm drop-shadow-lg"
            width={1000}
          />
          <div className="space-y-2 md:max-w-xl">
            <h2 className="text-xl font-header">
              Availability and Accessibility
            </h2>
            <p>
              Our courtroom and staffing services are available 365 days a year
              to both weekday and WASH courts.. Our staff maintains high
              availability by working flexible hours so that your needs are met
              on time, in full, and meet the highest standards of quality. Our
              team offers in-house services available across Ontario, and
              digital services across Canada. We also work with clients in the
              United States upon request.
            </p>
          </div>
        </div>
        <div
          className={`${inside} flex flex-col items-center sm:flex-row space-x-4 `}
        >
          <StaticImage
            src="../images/stock/niagara falls 2.jpg"
            alt="Niagara falls"
            className="my-4 rounded-sm drop-shadow-lg block"
            width={1000}
          />
          <div className="space-y-2 md:w-[2000px]">
            <h2 className="text-xl font-header">Customized Projects</h2>
            <p>
              If you require a service that was not listed above, we provide
              customized solutions upon request. Our team is well versed in
              Canadian legal matters and are equipped to personalize your
              project. Send us a message to request a tailor-made service to
              suit your needs!
            </p>
          </div>
        </div>
        <div className={`${inside} `}>
          <div className="grid grid-cols-3 sm:grid-cols-6 items-center justify-items-center gap-4 mt-4 mb-8">
            <Scales />
            <Globe />
            <Medical />
            <Maple />
            <Calendar />
            <Document />
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
        </div>
      </section>
    </Layout>
  );
}
