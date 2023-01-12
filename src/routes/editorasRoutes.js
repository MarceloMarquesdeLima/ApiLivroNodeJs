import express from "express";
import editorasController from "../controllers/editorasController.js"

const router = express.Router();

router
    .get("/editoras", editorasController.listarEditora)
    .get("/editoras/:id", editorasController.listarEditoraPorId)
    .post("/editoras", editorasController.cadastrareditoras)
    .put("/editoras/:id", editorasController.atualizareditora)
    .delete("/editoras/:id", editorasController.excluireditora)


export default router;