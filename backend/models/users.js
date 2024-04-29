const mariadb = require('mariadb');
const jwt = require('jsonwebtoken');

// Initialize Pool Cluster
const clust = mariadb.createPoolCluster();

// Add primary database pool
clust.add('primary', {
    host: process.env.PRIMARY_DB_HOST,
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'MyRecipes',
    connectionLimit: 5
});

// Add replica database pool
clust.add('replica', {
    host: process.env.REPLICA_DB_HOST,
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'MyRecipes',
    connectionLimit: 5
});

const User = {
    async getAllUsers() {
        return await queryData('SELECT * FROM users');
    },
    async getUserById(id) {
        return await queryData('SELECT * FROM users WHERE users_UID = ?', [id]);
    },
    async getUserByEmail(email) {
        return await queryData('SELECT * FROM users WHERE email = ?', [email]);
    },
    async addUser(user) {
        const payload = { email: user.email };
        const token = jwt.sign(payload, user.password);
        return await queryData(
            'INSERT INTO users (email, password, image, authToken) VALUES (?, ?, ?, ?)',
            [user.email, user.password, user.image, token],
            true
        );
    },
    async updateUser(id, user) {
        return await queryData(
            'UPDATE users SET email = ?, password = ?, image = ? WHERE users_UID = ?',
            [user.email, user.password, user.image, id],
            true
        );
    },
    async deleteUser(id) {
        return await queryData(
            'DELETE FROM users WHERE users_UID = ?',
            [id],
            true
        );
    },
    async getSelf(authToken) {
        return await queryData(
            'SELECT * FROM users WHERE authToken = ?',
            [authToken]
        );
    }
};

async function queryData(sql, params = [], usePrimary = false) {
    let conn;
    try {
        conn = await clust.getConnection(usePrimary ? 'primary' : 'replica');
        return await conn.query(sql, params);
    } catch (err) {
        console.error('Database Query Error:', err);
        throw err;
    } finally {
        if (conn) conn.end();
    }
}

module.exports = User;
