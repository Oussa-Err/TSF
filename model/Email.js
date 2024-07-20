import { Schema, models, model } from "mongoose";
import validator from "validator";

const EmailModel = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [validator.isEmail, "please enter a valid email"]
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true,
        toJSON: {
            versionKey: false,
            virtuals: true,
            transform: (_, ret) => {
                delete ret._id;
            },
        },
    },
)

const Email = models.Email || model('Email', EmailModel);

export default Email