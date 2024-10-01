import { Document, Schema, model, models } from "mongoose";

export interface IPage extends Document {
    name: string
    title: string
    path?: string
    sub_title: string
    main_image_url: string
    main_character_name: string
}

export const pageSchema = new Schema<IPage>({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,  
    },
    sub_title: {
        type: String,
        required: true,
    },
    main_image_url: {
        type: String,
        required: true,
    },
    main_character_name: {
        type: String,
        required: true,
        index: true,
    },
});


const Page = models.Page ||  model<IPage>('Page', pageSchema);
export default Page;
