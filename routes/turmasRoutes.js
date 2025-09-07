import express from "express"
import { listarTurmas } from "../controllers/turmaController.js"

const routerTurmas = express.Router()

routerTurmas.get('/turmas', async (req, res) => {
    try {
        const turmas = await listarTurmas()
        res.render('turmas', { turmas })
    } catch (err) {
        console.error(err)
        res.status(500).send('Erro ao listar turmas')
    }
});

export default routerTurmas