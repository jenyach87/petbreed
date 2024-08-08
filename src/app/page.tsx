import Main from "@/components/RenderPage";
import { getRandomCatImages } from "@/helpers/catAPI";
import { getRandomDogData } from "@/helpers/dogAPI";

export default async function Home() {
 const dogData = await getRandomDogData(15);
 const catData = await getRandomCatImages(90)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main dogData={dogData} catData={catData} />
    </main>
  );
}
