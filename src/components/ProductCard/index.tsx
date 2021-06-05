import React, { ReactElement } from "react";
import Button from "../Button";
import {CartContext} from '../../context';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  currencyCode: string;
  currencySymbol: string;
  quantity: number;
  imageLocation: string;
  status: string;
}

export interface CartProduct extends Product {
    quantityBought: number;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: Product;
}

function ProductCard({ data }: Props): ReactElement {
  const [view, setView] = React.useState<boolean>(false);
  const [val, setVal] = React.useState<number>(1);
  const { cart, updateCart } = React.useContext(CartContext);
  const {
    imageLocation,
    price,
    name,
    currencySymbol,
    quantity,
    description,
  } = data;
  let Stock = new Array(quantity);
  console.log(quantity);
  const Toggle = () => {
    setView(!view);
  };
  const onChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setVal(parseInt(e.currentTarget.value));
  };
  return (
    <div className="flex flex-col shadow-2xl bg-gray-800 rounded-md transition mb-auto  w-4/5 lg:w-3/5  py-4">
      <div className="flex flex-col items-center justify-center">
        <img src={imageLocation} className="w-1/2 rounded-md object-cover" />
      </div>
      <div className="flex flex-row items-center justify-around">
        <p className="font-semibold text-lg capitalize">{name}</p>
        <p className="font-semibold text-lg">
          {currencySymbol}
          {price}
        </p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Button
          onClick={Toggle}
          text={view ? "Close" : "View"}
          className="bg-red-500 rounded-full w-3/4 focus:border-none border-none focus:outline-none"
        />
      </div>
      {view && (
        <div className="w-full flex flex-col p-4">
          <p className="font-semibold text-lg capitalize">{description}</p>
          <p className="font-semibold text-lg capitalize">
            Quantity: {quantity}
          </p>
          <div className="flex flex-row w-full items-center">
            <label
              className="font-semibold text-lg mr-2"
              htmlFor="productQuantity"
            >
              Select quantity
            </label>
            <input
              type="number"
              max={quantity}
              value={val}
              onChange={onChanged}
              className="border border-gray-50 text-center rounded-sm bg-transparent h-10 w-16"
            />
            {Stock.length < 1 ? (
              <p className="font-semibold text-lg capitalize">Out of stock</p>
            ) : null}
          </div>
          <div className="flex flex-row items-center justify-center">
            <Button
            onClick={()=>updateCart({...data, quantityBought: val})}
              text="Add to cart"
              className="bg-gray-400 mt-4 rounded-full w-3/4"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
