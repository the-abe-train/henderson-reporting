import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../layouts/Layout";
import { aboutBanner } from "../styles/banners.module.css";
import { inside } from "../styles/inside.module.css";

export default function AboutPage() {
  return (
    <Layout page="About">
      <section
        className={`${aboutBanner} ${inside} 
        p-4 h-64 flex flex-col justify-between shadow-inner relative`}
      >
        <h1 className="text-4xl text-teal-100 font-header font-bold absolute bottom-0">
          About
        </h1>
      </section>
      <section className={`space-y-4 ${inside}`}>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <StaticImage
            src="../images/stock/transcription pen.jpg"
            alt="Writing with pen"
            width={1200}
            layout="constrained"
            className="my-4 rounded-lg drop-shadow-lg"
          />
          <div className="h-min self-center space-y-2">
            <h2 className="font-header text-2xl font-bold">
              Transcriptions & Depositions
            </h2>
            <p>
              Henderson offers its clients an accurate and efficient
              transcription service. Assignments range from one-off
              transcriptions through to the outsourcing of a client’s entire
              transcription unit. We specialize in the transcription of highly
              sensitive content, where accuracy is of paramount importance.
              Industry sectors include:
            </p>
            <p>
              <b>Legal:</b> transcriptions of court proceedings and discoveries{" "}
            </p>
            <p>
              <b>Medical:</b> transcriptions of medical documentation{" "}
            </p>
            <p>
              <b>Defence:</b> transcriptions of classified meetings and planning
              sessions
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse md:space-x-4">
          <StaticImage
            src="../images/stock/transcription laptop.jpg"
            alt="Writing with laptop"
            width={2200}
            className="my-4 rounded-lg drop-shadow-lg "
          />
          <div className="h-min self-center space-y-2">
            <h2 className="font-header text-2xl font-bold">Staffing</h2>
            <p>
              Our highly-trained team uses the latest equipment for each
              transcription assignment. Transcription is offered on-site or at
              our premises. Clients can tap into our suite of conference rooms
              for discoveries, and recordings may be stored at our facilities.
              We pride ourselves on minimal turnaround time – our team of staff
              Reporters and Transcribers can be on-site shortly after placing
              your order and upon request transcripts can be produced 24/7.
            </p>
            <p>
              Henderson also provides specialized staffing solutions for Courts
              and Law Offices. Our expertise in court and other legal
              transcriptions makes us ideally placed to understand the calibre
              of support staff required by the legal profession. We place
              permanent and contract staff, such as Courtroom Clerks, and other
              support staff.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
