import { Document, Schema, model, models } from "mongoose";

export interface ICustomer extends Document {
    name: string
}

const CustomerSchema = new Schema<ICustomer>({
    name: {
        type: String,
        required: true,
        unique: true
    },
})

const Customer = models.Customer || model<ICustomer>('Customer', CustomerSchema)
export default Customer
