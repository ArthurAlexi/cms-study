import MainCharacter from "@/models/mainCharacter";
import Image from "next/image";

export default async function Home() {

  const mainTheme = await MainCharacter.findById('66fb269f920cf14e7dd9bbc5')
  console.log(mainTheme)

  
  if (mainTheme?.page && mainTheme.page?.length < 0) {
    return <h1>Não há paginas criadas</h1>
  }

  return (
    <main className="container mx-auto flex h-[70vh] items-center  justify-around flex-wrap gap-4">
      <div className="max-w-md space-y-6">
        <h1 className="text-6xl font-bold text-primary">
          {
            mainTheme && mainTheme.page![0].title
          }
        </h1>
        <h2 className="text-xl font-semibold text-secondary">
          {
            mainTheme && mainTheme.page![0].subtitle
          }
        </h2>

        <button className="px-8 py-2 bg-primary rounded-md text-white hover:bg-primary/80">
          Lorem
        </button>
      </div>

      <Image
        width={420}
        height={200}
        src={mainTheme.page![0].main_image_url}
        alt="enterpise image" />
    </main>
  );
}
