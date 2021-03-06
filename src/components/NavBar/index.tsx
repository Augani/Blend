import React, { ReactElement } from "react";
import { CartContext } from "../../context";
import Button from "../Button";
interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function index({ className, children }: Props): ReactElement {
  return (
    <nav
      className={`w-full h-24 flex flex-row justify-between items-center sticky top-0 z-30 dark:bg-gray-800 bg-gray-50  px-10 ${className}`}
    >
      <a
        href="/"
        className="tracking-widest no-underline dark:text-gray-50 text-gray-800 font-bold text-3xl uppercase"
      >
        Blend
      </a>
      <div className="h-full flex-row flex items-center">
        {children}
        <CartContext.Consumer>
          {(ctx) => (
            <Button className="bg-red-500 w-32 flex flex-row justify-center items-center rounded-full shadow-lg hover:bg-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-50 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="font-semibold text-lg text-center text-gray-50">
                {ctx.cart.length > 0 ? ctx.cart.length : "Empty"}
              </p>
            </Button>
          )}
        </CartContext.Consumer>
      </div>
    </nav>
  );
}

export default index;
