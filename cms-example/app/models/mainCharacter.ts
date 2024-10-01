import { Document, Schema, model, models } from "mongoose";

export interface IMainCharacter extends Document {
    name: string
}

const MainCharacterSchema = new Schema<IMainCharacter>({
    name: {
        type: String,
        required: true,
        unique: true
    },
})

const MainCharacter = models.MainCharacter || model<IMainCharacter>('MainCharacter', MainCharacterSchema)
export default MainCharacter
