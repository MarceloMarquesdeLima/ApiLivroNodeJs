import editoras from "../models/Editora.js";

class editorasController {
    
    static listarEditora = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        })
    }
    
    static listarEditoraPorId = (req, res) => {
        const id = req.params.id;
        editoras.findById(id, (err, editoras) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do editora não localizado.`})
            }else{
                res.status(200).send(editoras)
            }
        })
    }

    static cadastrareditoras = (req, res) => {
        let editora = new editoras(req.body);
        editora.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar editora.`})
            }else{
                res.status(201).send(editora.toJSON())
            }
        })
    }

    static atualizareditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'editora atualizado com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluireditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'editora removido com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default editorasController;