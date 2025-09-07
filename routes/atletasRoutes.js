import express from "express"
import { listarAtletas } from "../controllers/atletaController.js"

const router = express.Router()

router.get('/alunos', async (req, res) => {
    try {
        const alunos = await listarAtletas()
        res.render('alunos', { alunos })
    } catch (err) {
        console.error(err)
        res.status(500).send('Erro ao listar alunos')
    }
});

export default router