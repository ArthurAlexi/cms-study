import { NextResponse } from 'next/server';
import General, { IGeneral } from "@/models/general";
import Customer, { ICustomer } from "@/models/Customer";
import Page, { IPage } from "@/models/page";
import { NextApiRequest, NextApiResponse } from "next";

import { ZodError, z } from "zod";

const CustomerSchema = z.object({
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

interface BodyRequest {
    Customer: ICustomer
    page: IPage
    general: IGeneral
}

export async function POST(req: Request) {
    console.log('called request to create a main character')

    const { Customer, page, general } = await req.json() as BodyRequest

    try {
        CustomerSchema.parse(Customer)
        pageSchema.parse(page)
        generalSchema.parse(general)

        const newCustomer = new Customer({
            name: Customer.name,
        })

        await newCustomer.save()

        const newGeneral = new General({
            url_logo: general.url_logo,
            primary_color: general.primary_color,
            secondary_color: general.secondary_color,
            background_color: general.background_color,
            foreground_color: general.foreground_color,
            text_color: general.text_color,
            main_character_name: newCustomer.name,
        })

        await newGeneral.save()

        const newPage = new Page({
            name: 'landing_page',
            title: page.title,
            path: '/',
            sub_title: page.sub_title,
            main_image_url: page.main_image_url,
            main_character_name: newCustomer.name,
        })

        await Promise.all([
            newGeneral.save(),
            newPage.save()
        ])

        return new NextResponse(
            JSON.stringify({
                CustomerName: Customer.name
            }),
            {
                status: 201
            }
        )

    } catch (error: any) {

        if (error instanceof ZodError) {
            return new NextResponse(
                JSON.stringify({
                    message: 'Validation error',
                    error: error.errors
                }),
                {
                    status: 400
                }
            )
        }

        console.log(error)
        return new NextResponse(
            JSON.stringify({
                message: 'Error saving the data',
                error: error.errors
            }),
            {
                status: 500
            }
        )
    }
}
