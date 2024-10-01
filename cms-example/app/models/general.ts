import  { Document, Schema, model, models }  from "mongoose";

export interface IGeneral extends Document {
    url_logo: string
    primary_color: string
    secondary_color: string
    background_color: string
    foreground_color: string
    text_color: string
    main_character_name: string
}

export const generalSchema = new Schema<IGeneral>({
    url_logo: {
        type: String,
        required: true, 
    },
    primary_color: {
        type: String,
        required: true, 
    },
    secondary_color: {
        type: String,
        required: true, 
    },
    background_color: {
        type: String,
        required: true, 
    },
    foreground_color: {
        type: String,
        required: true, 
    },
    text_color: {
        type: String,
        required: true, 
    },
    main_character_name: {
        type: String,
        required: true, 
        index: true,
    }
});

const General =  models.General || model<IGeneral>('General', generalSchema);
export default General;
