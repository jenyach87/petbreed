export  interface IBreed {
  id: number;
  name: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
}

export  interface ICard {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: IBreed[];
}

export interface IBreedCat {
  adaptability: number;
  affection_level: number;
  alt_names: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  id: string;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  name: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vetstreet_url: string;
  vocalisation: number;
  weight: {
    imperial: string;
    metric: string;
  };
  wikipedia_url: string;
}

export interface ICatCard {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: IBreedCat[];
}

