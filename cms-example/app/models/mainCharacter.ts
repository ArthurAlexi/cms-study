import { Document, Schema, model, models } from "mongoose";
import { IGeneral, generalSchema } from './general';
import { IPage, pageSchema } from "./page";

interface IMainCharacter extends Document {
    name: string
    general: IGeneral
    page?: IPage[]
}

const MainCharacterSchema = new Schema<IMainCharacter>({
    name: {
        type: String,
        required: true,
    },
    general: {
        type: generalSchema,
        required: true,
    },
    page: {
        type: [pageSchema],
    },
})

const MainCharacter = models.MainCharacterSchema || model<IMainCharacter>('MainCharacter', MainCharacterSchema)
export default MainCharacter
