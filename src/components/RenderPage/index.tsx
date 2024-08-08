/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";
import { ICard, ICatCard } from "@/interfaces/cardinterfaces";
import Link from "next/link";

export interface IMainProps {
  dogData: ICard[];
  catData: ICatCard[];
}

const Main = (props: IMainProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredeDogData = props.dogData
    .filter(el => el.breeds.length > 0)
    .filter(el => el.breeds[0].name.toLowerCase().includes(searchTerm.toLowerCase()));

  const filteredCatData = props.catData
    .filter(el => el.breeds.length > 0)
    .filter(el => el.breeds[0].name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for a breed..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg max-w-72"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Dog Breeds</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {filteredeDogData.length > 0 ? (
          filteredeDogData.map((el: ICard) => (
            <li key={el.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/cardpage/${el.id}?type=dog`}>
                <div className="relative w-full h-64">
                  <img src={el.url} alt="Dog" className="w-full object-cover h-full rounded-t-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{el.breeds[0].name}</h3>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className="col-span-full text-center text-gray-500">No dogs found</li>
        )}
      </ul>

      <h2 className="text-2xl font-bold mb-4">Cat Breeds</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCatData.length > 0 ? (
          filteredCatData.map((el: ICatCard) => (
            <li key={el.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/cardpage/${el.id}?type=cat`}>
                <div className="relative w-full h-64">
                  <img src={el.url} alt="Cat" className="w-full object-cover h-full rounded-t-lg" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{el.breeds[0].name}</h3>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className="col-span-full text-center text-gray-500">No cats found</li>
        )}
      </ul>
    </div>
  );
};

export default Main;
