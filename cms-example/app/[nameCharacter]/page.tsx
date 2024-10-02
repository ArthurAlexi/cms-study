
import Page, { IPage } from "@/models/page"
import { HydratedDocument } from "mongoose"
import Image from "next/image"

type Params = {
    params: {
      nameCharacter: string
    }
  }

export default async function CustomPage({ params }: Params) {

    const { nameCharacter } = params
    const pageData = await Page.findOne({ main_character_name: nameCharacter }) as HydratedDocument<IPage> || null

    if (!pageData) {
        return (
            <h1>
                main_character_name not found
            </h1>
        )
    }

    return (
        <main className="container mx-auto flex h-[70vh] items-center  justify-around flex-wrap gap-4">

            <div className="max-w-md space-y-6">
                <h1 className="text-6xl font-bold text-primary">
                    {
                       pageData.title
                    }
                </h1>
                <h2 className="text-xl font-semibold text-secondary">
                    {
                        pageData.sub_title
                    }
                </h2>

                <button className="px-8 py-2 bg-primary rounded-md text-white hover:bg-primary/80">
                    Lorem
                </button>
            </div>

            <Image
                width={420}
                height={200}
                src={pageData.main_image_url}
                alt="enterpise image" />
        </main>
    )
}