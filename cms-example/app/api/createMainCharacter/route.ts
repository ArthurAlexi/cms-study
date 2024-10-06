import General, { IGeneral } from "@/models/general";
import MainCharacter, { IMainCharacter } from "@/models/mainCharacter";
import Page, { IPage } from "@/models/page";
import { NextApiRequest, NextApiResponse } from "next";
import { ZodError, z } from "zod";

const mainCharacterSchema = z.object({
    name: z.string().min(1, "Name is required")
})

const pageSchema = z.object({
    title: z.string().min(1, "Title is required"),
    sub_title: z.string().optional(),
    main_image_url: z.string().url("Invalid URL for main image")
})

const generalSchema = z.object({
    url_logo: z.string().url("Invalid URL for logo"),
    primary_color: z.string().min(1, "Primary color is required"),
    secondary_color: z.string().optional(),
    background_color: z.string().min(1, "Background color is required"),
    foreground_color: z.string().optional(),
    text_color: z.string().min(1, "Text color is required")
})

// Interface da BodyRequest
interface BodyRequest {
    mainCharacter: IMainCharacter
    page: IPage
    general: IGeneral
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { mainCharacter, page, general } = req.body as BodyRequest

    try {
        mainCharacterSchema.parse(mainCharacter)
        pageSchema.parse(page)
        generalSchema.parse(general)

        const newMainCharacter = new MainCharacter({
            name: mainCharacter.name,
        })

        await newMainCharacter.save()

        const newGeneral = new General({
            url_logo: general.url_logo,
            primary_color: general.primary_color,
            secondary_color: general.secondary_color,
            background_color: general.background_color,
            foreground_color: general.foreground_color,
            text_color: general.text_color,
            main_character_name: newMainCharacter.name,
        })

        await newGeneral.save()

        const newPage = new Page({
            name: 'landing_page',
            title: page.title,
            path: '/',
            sub_title: page.sub_title,
            main_image_url: page.main_image_url,
            main_character_name: newMainCharacter.name,
        })

        await Promise.all([
            newGeneral.save(),
            newPage.save()
        ])
         
        return res.status(201).json({
            mainCharacterName: mainCharacter.name
        })
    } catch (error: any) {

        if (error instanceof ZodError) {
            return res.status(400).json({
                message: 'Validation error',
                error: error.errors
            })
        }

        console.log(error)
        return res.status(500).json({
            message: 'Error saving the data'
        })
    }
}
