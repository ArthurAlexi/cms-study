'use client'

import { FormEvent } from "react"



export default function Admin() {
    
    async function createCustomer(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        
        const main_character_name =  data.get('main_character_name')?.toString()
        
        const  url_logo = data.get('url_logo')?.toString()
        const  primary_color = data.get('primary_color')?.toString()
        const  secondary_color = data.get('secondary_color')?.toString()
        const  background_color = data.get('background_color')?.toString()
        const  foreground_color = data.get('foreground_color')?.toString()
        const  text_color = data.get('text_color')?.toString()
        
        const  page_name = data.get('page_name')?.toString()
        const  title = data.get('title')?.toString()
        const  sub_title = data.get('sub_title')?.toString()
        const  main_image_url = data.get('main_image_url')?.toString()

        const body = {
            Customer: {
                name: main_character_name
            },
            general: {
                url_logo,
                primary_color,
                secondary_color,
                background_color,
                foreground_color,
                text_color
            },
            page: {
                title,
                sub_title,
                main_image_url
            }
        }
        
        try {
            console.log(body)
            const response = await fetch('/api/createCustomer', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            })
            
            if(response.status >= 300){
                alert('Error!')
                return
            }

            alert('success!')
            
        } catch (error: any) {
            alert('Error!')
            console.log(error)
        }
    }
    return (
        <div className="container space-y-6 mx-auto mt-5">
            <button className="px-6 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-500">
                Create a default Main Character
            </button>
            <hr />
            <form onSubmit={createCustomer} className="px-4 py-2 space-y-4 border border-zinc-600 rounded-md text-center">
                <h2 className="text-xl font-semibold">
                    Form to create a new Main Character
                </h2>

                <hr />

                <h3 className="font-semibold text-lg">
                    General
                </h3>
                <div className="flex justify-start flex-wrap gap-8">
                    <div className="flex items-center flex-col">
                        <label htmlFor="main_character_name" className="self-start">Main character name</label>
                        <input type="text" id="main_character_name" name="main_character_name" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " required/>
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="url_logo" className="self-start">URL logo</label>
                        <input type="url" id="url_logo" name="url_logo" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " required/>
                    </div>
                </div>

                <hr />

                <h3 className="font-semibold text-lg">
                    Theme
                </h3>

                <div className="flex justify-start flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                        <label htmlFor="primary_color">Primary color</label>
                        <input type="color" id="primary_color" name="primary_color" className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="secondary_color">Secondary color</label>
                        <input type="color" id="secondary_color" name="secondary_color" className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="background_color">Background color</label>
                        <input type="color" id="background_color" name="background_color" className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="foreground_color">Forenground color</label>
                        <input type="color" id="foreground_color" name="foreground_color" className="cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <label htmlFor="text_color">text color</label>
                        <input type="color" id="text_color" name="text_color" className="cursor-pointer" />
                    </div>
                </div>

                <hr />

                <h3 className="font-semibold text-lg">
                    Landing page content
                </h3>

                <div className="flex justify-start flex-wrap gap-8">
                    <div className="flex items-center flex-col">
                        <label htmlFor="page_name" className="self-start" >Name page</label>
                        <input type="text" id="page_name" name="page_name" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " required />
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="title" className="self-start">title</label>
                        <input type="text" id="title" name="title" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " required />
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="sub_title" className="self-start">SubTitle</label>
                        <input type="text" id="sub_title" name="sub_title" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " required/>
                    </div>

                    <div className="flex items-center flex-col">
                        <label htmlFor="main_image_url" className="self-start">Main image UR</label>
                            <input type="text" id="main_image_url" name="main_image_url" className="px-3 py-1 border border-zinc-600 rounded-md focus:outline-none " required/>
                    </div>
                </div>

                <br /><br />
                <button className="px-6 py-2 bg-zinc-600 text-white rounded-md hover:bg-zinc-500" type="submit">
                    Create
                </button>
            </form>
        </div>
    )
}