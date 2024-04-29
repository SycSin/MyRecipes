const mariadb = require('mariadb');

// Initialize Pool Cluster
const clust = mariadb.createPoolCluster();

// Add database server pools
clust.add('primary', {
    host: process.env.PRIMARY_DB_HOST,
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'MyRecipes',
    connectionLimit: 5
});

clust.add('replica', {
    host: process.env.REPLICA_DB_HOST,
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'MyRecipes',
    connectionLimit: 5
});

const Recipe = {
    async getAllRecipes() {
        return await queryData('SELECT * FROM recipes');
    },
    async getRecipeById(id) {
        return await queryData('SELECT * FROM recipes WHERE recipes_UID = ?', [id]);
    },
    async addRecipe(recipe) {
        return await queryData(
            'INSERT INTO recipes (author, title, description, ingredients, steps, date, image, rating, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [recipe.author, recipe.title, recipe.description, recipe.ingredients, recipe.steps, recipe.date, recipe.image, recipe.rating, recipe.category],
            true
        );
    },
    async updateRecipe(id, recipe) {
        return await queryData(
            'UPDATE recipes SET author = ?, title = ?, description = ?, ingredients = ?, steps = ?, date = ?, image = ?, rating = ?, category = ? WHERE recipes_UID = ?',
            [recipe.author, recipe.title, recipe.description, recipe.ingredients, recipe.steps, recipe.date, recipe.image, recipe.rating, recipe.category, id],
            true
        );
    },
    async deleteRecipe(id) {
        return await queryData('DELETE FROM recipes WHERE recipes_UID = ?', [id], true);
    }
};

module.exports = Recipe;
