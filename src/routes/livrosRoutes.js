import express from "express";
import LivrosController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/busca", LivrosController.listarLivroPorTitulo)
    .get("/livros/:id", LivrosController.listarLivrosPorId)
    .post("/livros", LivrosController.cadastrarLivros)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.excluirLivro)


export default router;