import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../layouts/Layout";
import { careersBanner } from "../styles/banners.module.css";
import { inside } from "../styles/inside.module.css";

export default function CareersPage() {
  return (
    <Layout page="Careers">
      <section
        className={`${careersBanner} ${inside} p-4 h-64 flex flex-col
        justify-between shadow-inner relative`}
      >
        <h1 className="text-4xl text-teal-100 font-header font-bold absolute bottom-0">
          Careers
        </h1>
      </section>
      <section
        className={`${inside} px-4 space-y-4 sm:space-y-0 sm:flex justify-between`}
      >
        <div
          className="p-4 h-fit space-y-4 drop-shadow-xl
        bg-green-50 rounded max-w-sm"
        >
          <StaticImage
            src="../images/stock/canada court.jpg"
            alt="Court room"
            height={250}
            className="drop-shadow-md rounded mx-auto block"
          />
          <h2 className="font-header text-2xl font-bold">Courtroom Monitor</h2>
          <div>
            <h3 className="font-bold">Job Description</h3>
            <ul className="list-disc list-inside">
              <li>On-call</li>
              <li>
                Responsible for recording/note-taking in a courthouse using
                Liberty Court Recorder
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Acceptance Criteria</h3>
            <ul className="list-disc list-inside">
              <li>1st or 3rd year undergraduate students</li>
              <li>Full day availability 2-4 days per week year-round</li>
              <li>Must be fluent in English</li>
              <li>Cannot have a criminal record or outstanding warrants</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Assets (not required)</h3>
            <ul className="list-disc list-inside">
              <li>Access to a car</li>
              <li>Fluency in French</li>
              <li>Weekend availability</li>
            </ul>
          </div>
        </div>
        <div className="p-4 space-y-4 drop-shadow-xl bg-green-50 rounded max-w-sm">
          <StaticImage
            src="../images/stock/writer.jpg"
            alt="Court room"
            height={250}
            className="drop-shadow-md rounded mx-auto block"
          />
          <h2 className="font-header text-2xl font-bold">
            Certified Transcriptionist
          </h2>
          <div>
            <h3 className="font-bold">Job Description</h3>
            <ul className="list-disc list-inside">
              <li>
                Use a Windows based computer and Microsoft Word to type up court
                proceedings from recording media
              </li>
              <li>Pay is based on completed pages and not hours worked</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">
              Acceptance Criteria (same applies to English and French)
            </h3>
            <ul className="list-disc list-inside">
              <li>ACT Certified</li>
              <li>Access to a computer with Microsoft Office and a printer</li>
              <li>Fluent in English</li>
              <li>Must have ability to listen to difficult case matter</li>
              <li>Must be flexible with work hours</li>
              <li>Cannot have a criminal record or outstanding warrants</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Assets (not required)</h3>
            <ul className="list-disc list-inside">
              <li>Access to a car</li>
              <li>Fluency in French</li>
              <li>Weekend availability</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
