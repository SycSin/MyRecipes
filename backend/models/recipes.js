const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'root',
    password: 'example',
    database: 'MyRecipes',
    connectionLimit: 5
});

const Recipe = {
    async getAllRecipes() {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM recipes');
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async getRecipeById(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM recipes WHERE recipes_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async addRecipe(recipe) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'INSERT INTO recipes (author, title, description, ingredients, steps, date, image, rating, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [recipe.author, recipe.title, recipe.description, recipe.ingredients, recipe.steps, recipe.date, recipe.image, recipe.rating, recipe.category] // Postman probieren
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async updateRecipe(id, recipe) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'UPDATE recipes SET author = ?, title = ?, description = ?, steps = ?, date = ?, image = ?, rating = ?, category = ? WHERE recipes_UID = ?',
                [recipe.author, recipe.title, recipe.description, recipe.ingredients, recipe.steps, recipe.date, recipe.image, recipe.rating, recipe.category]
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async deleteRecipe(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('DELETE FROM recipes WHERE recipes_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

module.exports = Recipe;