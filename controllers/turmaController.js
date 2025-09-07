import pool from '../db/connection.js'

export const listarTurmas = async (req, res) => {
    try {
        const sql = 'SELECT * FROM turma';
        const [turmas] = await pool.query(sql);

        return turmas
    }
    catch (err) {
        console.error('Erro ao listar turmas:', err);
        throw err;
    }
}