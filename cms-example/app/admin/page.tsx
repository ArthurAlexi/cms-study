import { createFirstCharacter } from "@/_utils/createFirstCharacter"

export default async function Admin() {
    // await createFirstCharacter()
    return (
        <div className="container space-y-6 mx-auto mt-5">
            <button className="px-6 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-500">
                Create a default Main Character
            </button>
            <hr />
            <form className="px-4 py-2 space-y-4 border border-zinc-600 rounded-md text-center">
                <h2 className="text-xl font-semibold">
                    Form to create a new Main Character
                </h2>

                <hr />

                <h3 className="font-semibold text-lg">
                    General
                </h3>
                <div className="flex justify-start flex-wrap gap-8">
                    <div className="flex items-center flex-col">
                        <label htmlFor="name" className="self-start">Main character name</label>
                        <input type="text" id="name" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " />
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="url_logo" className="self-start">URL logo</label>
                        <input type="url" id="url_logo" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " />
                    </div>
                </div>

                <hr />

                <h3 className="font-semibold text-lg">
                    Theme
                </h3>

                <div className="flex justify-start flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                        <label htmlFor="primary_color">Primary color</label>
                        <input type="color" id="primary_color" className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="secondary_color">Secondary color</label>
                        <input type="color" id="secondary_color" className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="background_color">Background color</label>
                        <input type="color" id="background_color" className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="foreground_color">Forenground color</label>
                        <input type="color" id="foreground_color" className="cursor-pointer" />
                    </div>
                </div>

                <hr />

                <h3 className="font-semibold text-lg">
                    Landing page content
                </h3>

                <div className="flex justify-start flex-wrap gap-8">
                    <div className="flex items-center flex-col">
                        <label htmlFor="page_name" className="self-start">Name page</label>
                        <input type="text" id="page_name" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " />
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="title" className="self-start">title</label>
                        <input type="text" id="title" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " />
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="sub_title" className="self-start">SubTitle</label>
                        <input type="text" id="sub_title" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " />
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="main_image_url" className="self-start">Main image UR</label>
                        <input type="text" id="main_image_url" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " />
                    </div>
                </div>

                <br /><br />
                <button className="px-6 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-500">
                    Create
                </button>
            </form>
        </div>
    )
}