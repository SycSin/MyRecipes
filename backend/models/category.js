const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'db',
    category: 'root',
    password: 'example',
    database: 'MyRecipes',
    connectionLimit: 5
});

const Category = {
    async getAllCategorys() {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM categories');
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async getCategoryById(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM categories WHERE categories_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async addCategory(category) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'INSERT INTO categories (name) VALUES (?)',
                [category.name]
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async updateCategory(id, category) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'UPDATE categories SET name = ? WHERE categories_UID = ?',
                [category.name, id]
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async deleteCategory(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('DELETE FROM categories WHERE categories_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

module.exports = Category;