import React, { ReactElement } from 'react'
import Button from '../Button'

interface Product {
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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    data: Product;
}

function index({data}: Props): ReactElement {
    const {imageLocation, price, name, currencySymbol} = data;
    return (
        <div className="grid grid-rows-3 shadow-lg">
            <div className="flex flex-col items-center justify-center">
                <img src={imageLocation} className="w-4/5 rounded-md object-cover" />
            </div>
            <div className="flex flex-row items-center justify-around">
                <p className="font-semibold text-lg capitalize">{name}</p>
                <p className="font-semibold text-lg"> {currencySymbol}{price}</p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <Button text="View" className="bg-red-500 rounded-full w-3/4" />
            </div>
        </div>
    )
}

export default index
