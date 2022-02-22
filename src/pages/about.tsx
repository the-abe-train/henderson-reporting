import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../layouts/Layout";
import { aboutBanner } from "../styles/banners.module.css";

export default function AboutPage() {
  return (
    <Layout>
      <section
        className={`${aboutBanner} p-4 h-64 flex flex-col justify-between shadow-inner relative`}
      >
        <h1 className="text-4xl text-teal-100 font-header font-bold absolute bottom-0">
          About
        </h1>
      </section>
      <section className="m-4 rounded-md space-y-4">
        <h2 className="font-header text-2xl">Transcriptions & Depositions</h2>
        <StaticImage
          src="../images/stock/transcription pen.jpg"
          alt="Writing with pen"
          className="my-4 rounded-lg drop-shadow-lg"
        />
        <p>
          Henderson offers its clients an accurate and efficient transcription
          service. Assignments range from one-off transcriptions through to the
          outsourcing of a client’s entire transcription unit. We specialise in
          the transcription of highly sensitive content, where accuracy is of
          paramount importance. Industry sectors include:
        </p>
        <p>
          <b>Legal:</b> transcriptions of court proceedings and discoveries{" "}
        </p>
        <p>
          <b>Medical:</b> transcriptions of medical documentation{" "}
        </p>
        <p>
          <b>Defence:</b> transcriptions of classified meetings and planning
          sessions{" "}
        </p>
      </section>
      <section className="m-4 rounded-md space-y-4">
        <h2 className="font-header text-2xl">Staffing</h2>
        <StaticImage
          src="../images/stock/transcription laptop.jpg"
          alt="Writing with laptop"
          className="my-4 rounded-lg drop-shadow-lg"
        />
        <p>
          Our highly-trained team uses the latest equipment for each
          transcription assignment. Transcription is offered on-site or at our
          premises. Clients can tap into our suite of conference rooms for
          discoveries, and recordings may be stored at our facilities. We pride
          ourselves on minimal turnaround time – our team of staff Reporters and
          Transcribers can be on-site shortly after placing your order and upon
          request transcripts can be produced 24/7.
        </p>
        <p>
          Henderson also provides specialised staffing solutions for Courts and
          Law Offices. Our expertise in court and other legal transcriptions
          makes us ideally placed to understand the calibre of support staff
          required by the legal profession. We place permanent and contract
          staff, such as Courtroom Clerks, and other support staff.
        </p>
      </section>
    </Layout>
  );
}
