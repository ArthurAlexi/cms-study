import { Document, Schema, model, models } from "mongoose";

export interface IPage extends Document {
    name: string
    title: string
    subtitle: string
    main_image_url: string
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
    subtitle: {
        type: String,
        required: true,
    },
    main_image_url: {
        type: String,
        required: true,
    },
});


const Page = models.Page ||  model<IPage>('Page', pageSchema);
export default Page;
