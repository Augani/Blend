import React, { ReactElement } from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import "./Home.css";
import ProductCard, { Product } from "../../components/ProductCard";
import Context from "../../context";

interface Props {}

async function Http(request: RequestInfo): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

function Home({}: Props): JSX.Element {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    const getData = async function () {
      try {
        let resProducts = await Http(
          "https://my-json-server.typicode.com/carry1stdeveloper/mock-product-api/productBundles"
        );
        setProducts(resProducts);
      } catch (e) {}
    };
    getData();
  }, []);
  return (
    <div className="w-full h-full flex flex-col relative">
      <NavBar />
      <main className="w-full lg:grid flex flex-col lg:grid-rows-2 gap-4">
        <div className="w-full lg:grid flex flex-col lg:grid-cols-2 gap-2">
          <section className="flex flex-col justify-center my-10 lg:my-0 items-center">
            <h1 className="2xl:text-8xl md:text-6xl text-4xl font-bold tracking-widest text-center uppercase leading-snug ">
              Stay alive! <br /> Buy more <br /> gems at a <br /> Staggering
              <br /> 20% discount
            </h1>
            <hr className="my-4 border-gray-600" />
            <Button className="text-gray-50 font-semibold text-xl border-none rounded-sm h-12 lg:w-1/4 w-4/5 shadow-xl transform duration-200 hover:scale-105 justify-center flex flex-row items-center hover:bg-red-600 bg-red-500 ">
              <a
                href="#store"
                className="text-lg mr-2 font-semibold no-underline tracking-wider"
              >
                Browse
              </a>
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
          <section className="flex flex-col justify-center items-center clip">
            <img
              className="object-cover lg:w-1/2 w-5/6 shadow-xl"
              src="https://res.cloudinary.com/augani/image/upload/v1622808010/5mcVx5ku_400x400.jpg"
            />
            <img
              className="object-cover lg:w-1/2 w-5/6 shadow-xl"
              src="https://res.cloudinary.com/augani/image/upload/v1622808881/Call-of-Duty.jpg"
            />
          </section>
        </div>
        <div
          id="store"
          className="bg-gray-800 w-full flex flex-col items-center p-4"
        >
          <h1 className="lg:text-7xl   text-2xl text-center tracking-wider text-gray-50 uppercase mb-4">
            Browse Gems
          </h1>
          <section className="w-full grid lg:grid-cols-4 grid-cols-1  place-items-center  gap-6 text-gray-50">
            {products.length > 0 &&
              products.map((p, index) => {
                return <ProductCard data={p} />;
              })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
