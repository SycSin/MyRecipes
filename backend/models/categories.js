const mariadb = require('mariadb');

// Initialize Pool Cluster
const clust = mariadb.createPoolCluster();

// Adding servers to the cluster
clust.add('primary', {
    host: process.env.PRIMARY_DB_HOST,
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'MyRecipes',
    connectionLimit: 5
});

clust.add('replica', { // Replica server
    host: process.env.REPLICA_DB_HOST,
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'MyRecipes',
    connectionLimit: 5
});

const Categories = {
    async getAllCategories() {
        const sql = 'SELECT * FROM categories ORDER BY categories_UID ASC';
        return await queryData(sql, false);
    },

    async getCategoryById(id) {
        const sql = 'SELECT * FROM categories WHERE categories_UID = ?';
        return await queryData(sql, false, [id]);
    },

    async addCategory(category) {
        const sql = 'INSERT INTO categories (name) VALUES (?)';
        return await queryData(sql, true, [category.name]);
    },

    async updateCategory(id, category) {
        const sql = 'UPDATE categories SET name = ? WHERE categories_UID = ?';
        return await queryData(sql, true, [category.name, id]);
    },

    async deleteCategory(id) {
        const sql = 'DELETE FROM categories WHERE categories_UID = ?';
        return await queryData(sql, true, [id]);
    }
};

async function queryData(sql, usePrimary = true, params = []) {
    let conn;
    try {
        // Get connection from the appropriate pool
        //conn = await clust.getConnection(usePrimary ? 'primary' : /^replica*$/, "RR"); //For multiple replicas
        conn = await clust.getConnection(usePrimary ? 'primary' : 'replica');
        return await conn.query(sql, params);
    } catch (err) {
        console.error("Database Query Error: ", err);
        throw err; // Rethrow the error after logging
    } finally {
        if (conn) conn.end();
    }
}

module.exports = Categories;
