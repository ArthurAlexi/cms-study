import Image from "next/image";

export default async function Home() {

  

  return (
    <main className="container mx-auto flex h-[70vh] items-center  justify-around flex-wrap gap-4">
      <div className="max-w-md space-y-6">
        <h1 className="text-6xl font-bold text-primary">
          Fake Enterprise
        </h1>
        <h2 className="text-xl font-semibold text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repudiandae praesentium quibusdam minus temporibus inventore,
        </h2>

        <button className="px-8 py-2 bg-primary rounded-md text-white hover:bg-primary/80">
          Lorem
        </button>
      </div>

      <Image
        width={420}
        height={200}
        src='https://medrectech.com/image/enterprise.png'
        alt="enterpise image" />
    </main>
  );
}
