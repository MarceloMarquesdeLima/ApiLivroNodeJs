import livros from "../models/Livro.js";

class LivrosController {

    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .populate('editora')
            .exec((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
            .populate('autor', 'nome')
            .populate('editora', 'nomeEditora')
            .exec((err, livros) => {
                if(err){
                    res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
                }else{
                    res.status(200).send(livros)
                }
        })
    }

    static listarLivroPorTitulo = (req, res) => {
        const titulo = req.query.titulo

        livros.find({'titulo': titulo}, {}, (err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - Titulo do livro não localizado.`})
            }else{
                res.status(200).send(livros);
            }
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso!'})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivrosController;