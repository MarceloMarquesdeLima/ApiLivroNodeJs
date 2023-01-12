import mongoose from "mongoose";

mongoose.connect("mongodb+srv://marcelo:123@marcelo.zdzf14m.mongodb.net/ApiLivro");

let db = mongoose.connection;

export default db;