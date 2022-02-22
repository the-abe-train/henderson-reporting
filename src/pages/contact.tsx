import React from "react";
import Layout from "../layouts/Layout";
import { contactBanner } from "../styles/banners.module.css";
import Mail from "../images/icons/mail.svg";
import Phone from "../images/icons/phone.svg";
import Map from "../images/icons/map.svg";

const MAPS_API_KEY = process.env.MAPS_API_KEY || "";

export default function ContactPage() {
  return (
    <Layout>
      <section
        className={`${contactBanner} p-4 h-64 flex flex-col 
        justify-between shadow-inner relative`}
      >
        <div
          className="w-fill absolute bottom-0 left-0 right-0 px-4 pt-2"
          style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
        >
          <h1 className="text-4xl py-2 text-teal-100 font-header font-bold">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="px-4">
        <p>
          Your first consultation is free! Use the form below to send us a
          message and we will get back to you as soon as possible.
        </p>
        <div className="grid w-2/3 items-center gap-4 m-4">
          <Mail alt="mail" className="inline" />
          <p className="col-start-2">sales@hendersonreporting.com</p>
          <Phone alt="phone" className="inline" />
          <p>416-471-0699</p>
          <Map alt="map" className="inline" height={24} />
          <div>
            <p>1901-5000 Yonge Street </p>
            <p> North York, ON, M2N 7E9</p>
          </div>
        </div>
        <form action="" className="grid my-8 grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="border-2 border-gray-600 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-2 border-gray-600 p-2 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="border-2 border-gray-600 p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-gray-600 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border-2 border-gray-600 p-2 rounded-md col-span-2"
          />
          <textarea
            placeholder="How may we help you?"
            className="border-2 border-gray-600 p-2 col-span-2 h-48 resize-y"
          />
          <button
            style={{ border: "1px solid green" }}
            type="submit"
            className="w-fill col-span-2
        text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
        hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
        font-bold rounded-lg text-sm px-10 py-2.5 text-center"
          >
            Send
          </button>
        </form>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=5000+Yonge+St&key=${MAPS_API_KEY}`}
          alt="Map to to the office"
          className="border-2 border-black"
        />
      </section>
    </Layout>
  );
}
