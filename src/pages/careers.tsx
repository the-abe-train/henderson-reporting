import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../layouts/Layout";
import { careersBanner } from "../styles/banners.module.css";

export default function CareersPage() {
  return (
    <Layout>
      <section
        className={`${careersBanner} p-4 h-64 flex flex-col 
        justify-between shadow-inner relative`}
      >
        <div
          className="w-fill absolute bottom-0 left-0 right-0 px-4 pt-2"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        >
          <h1 className="text-4xl py-2 text-teal-100 font-header font-bold">
            Careers
          </h1>
        </div>
      </section>
      <section className="px-4 space-y-4">
        <div className="p-4 space-y-2 drop-shadow-lg bg-white rounded">
          <StaticImage
            src="../images/stock/canada court.jpg"
            alt="Court room"
            className="drop-shadow-md rounded"
          />
          <h2 className="font-header text-3xl font-bold">Courtroom Monitor</h2>
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
        <div className="p-4 space-y-2 drop-shadow-lg bg-white rounded">
          <StaticImage
            src="../images/stock/writer.jpg"
            alt="Court room"
            className="drop-shadow-md rounded"
          />
          <h2 className="font-header text-3xl font-bold">
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
