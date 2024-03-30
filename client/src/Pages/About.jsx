import React from "react";
import about from "../assets/about.webp";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About <b className="text-green-700">SleekRide</b>
      </h1>
      <div className="w-full my-4  mb-8 border border-4  shadow-xl h-[550px]">
        <img
          className="w-full rounded-lg shadow-2xl h-full"
          src={about}
          alt="about_img"
        />
      </div>
      <div>
        <p className="mb-4 text-slate-700">
          Welcome to SleekRide, where your journey to finding the perfect
          vehicle is effortlessly streamlined. At SleekRide, we understand the
          importance of simplicity and ease when it comes to selecting your
          ideal ride. Our platform is meticulously designed to provide you with
          a seamless browsing experience, allowing you to uncover your dream
          vehicle with minimal effort.
        </p>
        <p className="mb-4 text-slate-700">
          With a vast selection of top-notch cars, from sleek sedans to powerful
          SUVs, SleekRide offers something for every taste and preference. Our
          user-friendly interface and advanced search features enable you to
          quickly narrow down your options and pinpoint the exact vehicle that
          matches your criteria.
        </p>
        <p className="mb-4 text-slate-700">
          But SleekRide is more than just a car models website – it's a trusted
          companion on your journey to automotive satisfaction. Our team of
          experts is dedicated to providing you with unparalleled support and
          guidance every step of the way. Whether you're a seasoned car
          enthusiast or a first-time buyer, we're here to make your experience
          as smooth and enjoyable as possible
        </p>
        <p className="mb-4 text-blue-600">
          So why wait? Start your journey with SleekRide today and uncover your
          ideal vehicle with minimal effort. With us by your side, the road to
          automotive bliss has never been smoother.
        </p>
      </div>
    </div>
  );
}
