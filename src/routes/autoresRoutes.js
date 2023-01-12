import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutor)
    .get("/autores/:id", AutoresController.listarAutorPorId)
    .post("/autores", AutoresController.cadastrarAutores)
    .put("/autores/:id", AutoresController.atualizarAutor)
    .delete("/autores/:id", AutoresController.excluirAutor)


export default router;