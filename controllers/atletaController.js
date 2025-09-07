import pool from '../db/connection.js'

export const listarAtletas = async (req, res) => {
    try {
        const sql = 'SELECT * FROM aluno';
        const [alunos] = await pool.query(sql);

        return alunos
    }
    catch (err) {
        console.error('Erro ao listar alunos:', err);
        throw err;
    }
}
