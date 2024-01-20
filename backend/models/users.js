const mariadb = require('mariadb');
const jwt = require('jsonwebtoken');

const pool = mariadb.createPool({
    host: 'mariadb.mariadb',
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
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
    async getUserByEmail(email) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async getTokenFromUser(email){
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT authToken FROM users WHERE email = ?', [email]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    ,
    async addUser(user) {
        try {
            const conn = await pool.getConnection();
            const payload = user.email;
            const secret = user.password;
            const token = jwt.sign(payload, secret);
            let rows;
            if(user.image != null) {
                rows = await conn.query(
                    'INSERT INTO users (email, password, image, authToken) VALUES (?, ?, ?, ?)',
                    [user.email, user.password, user.image, token]
                );
            }
            else{
                 rows = await conn.query(
                    'INSERT INTO users (email, password, authToken) VALUES (?, ?, ?)',
                    [user.email, user.password, token]
                );
            }
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    ,
    async updateUser(id, user) {
        try {
            const conn = await pool.getConnection();
            let rows;
            if(user.image != null){
                rows = await conn.query(
                    'UPDATE users SET email = ?, password = ?, image = ? WHERE users_UID = ?',
                    [user.email, user.password, user.image, id]
                );
            }
            else{
                rows = await conn.query(
                    'UPDATE users SET email = ?, password = ? WHERE users_UID = ?',
                    [user.email, user.password, id]
                );
            }
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
    },
    async getSelf(authToken){
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM users WHERE authToken = ?', [authToken]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

module.exports = User;