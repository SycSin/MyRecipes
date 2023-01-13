const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'MyRecipes',
    connectionLimit: 5
});

const User = {
    async getAllUsers() {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM users');
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async getUserById(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM users WHERE users_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async addUser(user) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'INSERT INTO users (email, password) VALUES (?, ?)',
                [user.email, user.password]
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async updateUser(id, user) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'UPDATE users SET email = ?, password = ? WHERE users_UID = ?',
                [user.email, user.password, id]
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async deleteUser(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('DELETE FROM users WHERE users_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

module.exports = User;