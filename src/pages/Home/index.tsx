import React, { ReactElement } from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import "./Home.css";

interface Props {}

function index({}: Props): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <main className="w-full grid grid-rows-2 gap-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-2 gap-8">
        <section className=" place-items-center flex flex-col h-full   items-center">
          <h1 className="lg:text-8xl text-4xl font-bold tracking-widest text-center uppercase leading-snug ">
            Stay alive! <br /> Buy more <br/> gems at a <br/> Staggering <br /> 20% discount
          </h1>
          <hr className="my-10 border-gray-600" />
          <Button className="text-gray-50 font-semibold text-xl border-none rounded-sm h-12 lg:w-1/4 w-4/5 shadow-xl transform duration-200 hover:scale-105 justify-center flex flex-row items-center hover:bg-red-600 bg-red-500 ">
            <a href="#store" className="text-lg mr-2 font-semibold no-underline tracking-wider">Browse</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </section>
        <section className="flex flex-col  items-center clip">
        <img className="object-cover lg:w-1/2 w-5/6 shadow-xl" src="https://res.cloudinary.com/augani/image/upload/v1622808010/5mcVx5ku_400x400.jpg" />
        <img className="object-cover lg:w-1/2 w-5/6 shadow-xl" src="https://res.cloudinary.com/augani/image/upload/v1622808881/Call-of-Duty.jpg" />
       
        </section>
        </div>
        <div id="store" className="bg-gray-800 w-full flex flex-col items-center p-4">
            <h1 className="text-7xl tracking-wider text-gray-50 uppercase">Browse Gems</h1>
        </div>
       
      </main>
    </div>
  );
}

export default index;
