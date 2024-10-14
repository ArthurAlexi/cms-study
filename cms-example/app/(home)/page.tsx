import Image from "next/image";

const BG_IMAGE_URL = 'https://images.unsplash.com/photo-1726257537688-df80c0c4c6fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'

export default async function Home() {

  // 

  return (
    <div className="  min-h-[70vh] space-y-4">
      <section className="h-[90vh] border w-full flex items-center justify-center flex-col gap-3 relative">

        <Image alt="bg-section" src={BG_IMAGE_URL} height={0} width={0} sizes="100vw" fill style={{ zIndex: -1, objectFit: 'cover' }} />
        <h1 className="text-8xl font-bold text-textColor">
          Fake Enterprise
        </h1>
        <h2 className="text-5xl font-semibold text-secondary">
          This is a beta test
        </h2>
      </section>

      <section className="h-[90vh] border-b border-t w-full flex justify-center items-center">
        <h2 className="text-4xl italic w-[500px] text-center">
          “
          Preciso ir ao oftalmologista, mas não consigo enxergar o momento ideal.
          ”
        </h2>
      </section>

      <section className="relative h-[90vh] border-b border-t w-full flex  items-center justify-center bg-foreground">
        <div className=" flex flex-wrap gap-4 justify-center flex-1">
          
          <div className="w-80">
            <h2 className="text-4xl text-center mb-6">
              Lorem, ipsum.
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro autem, saepe deleniti velit corrupti non voluptates excepturi dicta dolorem, id quia architecto? Eligendi omnis incidunt nobis nesciunt, ullam deleniti perspiciatis!
            </p>
          </div>

          <div>
            <Image
              width={420}
              height={200}
              src="https://plus.unsplash.com/premium_vector-1722062328146-ef3ecf7b31b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpbGx1c3RyYXRpb25zLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D"
              alt="section_image"
              className="rounded-md"
              />
          </div>
        </div>
      </section>

      <footer className="h-80">

      </footer>
    </div>
  );
}
