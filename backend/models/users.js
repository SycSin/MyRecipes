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
    }
    ,
    async addUser(user) {
        try {
            const conn = await pool.getConnection();
            let rows;
            if(user.image != null) {
                rows = await conn.query(
                    'INSERT INTO users (email, password, image) VALUES (?, ?, ?)',
                    [user.email, user.password, user.image]
                );
            }
            else{
                 rows = await conn.query(
                    'INSERT INTO users (email, password) VALUES (?, ?)',
                    [user.email, user.password]
                );
            }
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
    async deleteUser(email) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('DELETE FROM users WHERE email = ?', [email]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

module.exports = User;