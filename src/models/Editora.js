import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: {type: String},
    nomeEditora: {type: String, required: true},
    cideade: {type: String, required: false}
},{
    versionKey: false
})

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras;