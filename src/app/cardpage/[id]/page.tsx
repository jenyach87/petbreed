/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ICard, ICatCard, IBreed, IBreedCat } from "@/interfaces/cardinterfaces";
import { API } from '@/helpers/api';
import Link from 'next/link';

const fetchBreedData = async (id: string, type: string) => {
  console.log(API.getCard.dog)
  const response = await fetch(
    type === 'dog'
      ? `${API.getCard.dog}/${id}`
      : `${API.getCard.cat}/${id}`
  );
  return response.json();
};

const BreedPage = ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const [breedData, setBreedData] = useState<ICard | ICatCard | null>(null);

  useEffect(() => {
    if (params.id && type) {
      fetchBreedData(params.id, type).then(data => setBreedData(data));
    }
  }, [params.id, type]);

  if (!breedData) {
    return <div>Loading...</div>;
  }

  const breed = breedData.breeds[0];

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <button className='my-4 border-2 rounded-lg py-2 px-4 text-white bg-blue-500 hover:bg-blue-700'>
        <Link href="/">Back to main page</Link>
      </button>
      <div className='w-full max-w-md'>
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{breed.name}</h1>
        <img
          src={breedData.url}
          alt={breed.name}
          className='w-full max-w-full h-auto mb-4 object-cover'
        />
        <div className="text-left">
          <p className="text-gray-700 mb-2"><strong>Temperament:</strong> {breed.temperament}</p>
          <p className="text-gray-700 mb-2"><strong>Life Span:</strong> {breed.life_span}</p>
          <p className="text-gray-700 mb-2"><strong>Weight:</strong> {breed.weight.imperial} lbs / {breed.weight.metric} kg</p>
          {type === 'dog' ? (
            <>
              <p className="text-gray-700 mb-2"><strong>Breed Group:</strong> {(breed as IBreed).breed_group}</p>
              <p className="text-gray-700 mb-2"><strong>Height:</strong> {(breed as IBreed).height.imperial} inches / {(breed as IBreed).height.metric} cm</p>
            </>
          ) : (
            <>
              <p className="text-gray-700 mb-2"><strong>Origin:</strong> {(breed as IBreedCat).origin}</p>
              <p className="text-gray-700 mb-2"><strong>Wikipedia:</strong> <a href={(breed as IBreedCat).wikipedia_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Learn more</a></p>
              <p className="text-gray-700 mb-2"><strong>Description:</strong> {(breed as IBreedCat).description}</p>
              <p className="text-gray-700 mb-2"><strong>Adaptability:</strong> {(breed as IBreedCat).adaptability}</p>
              <p className="text-gray-700 mb-2"><strong>Affection Level:</strong> {(breed as IBreedCat).affection_level}</p>
              <p className="text-gray-700 mb-2"><strong>Child Friendly:</strong> {(breed as IBreedCat).child_friendly}</p>
              <p className="text-gray-700 mb-2"><strong>Dog Friendly:</strong> {(breed as IBreedCat).dog_friendly}</p>
              <p className="text-gray-700 mb-2"><strong>Energy Level:</strong> {(breed as IBreedCat).energy_level}</p>
              <p className="text-gray-700 mb-2"><strong>Grooming:</strong> {(breed as IBreedCat).grooming}</p>
              <p className="text-gray-700 mb-2"><strong>Health Issues:</strong> {(breed as IBreedCat).health_issues}</p>
              <p className="text-gray-700 mb-2"><strong>Intelligence:</strong> {(breed as IBreedCat).intelligence}</p>
              <p className="text-gray-700 mb-2"><strong>Social Needs:</strong> {(breed as IBreedCat).social_needs}</p>
              <p className="text-gray-700 mb-2"><strong>Stranger Friendly:</strong> {(breed as IBreedCat).stranger_friendly}</p>
              <p className="text-gray-700 mb-2"><strong>Vocalisation:</strong> {(breed as IBreedCat).vocalisation}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreedPage;
