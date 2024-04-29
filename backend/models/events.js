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

const Event = {
    async getAllEvents() {
        return await queryData('SELECT * FROM events');
    },
    async getEventById(id) {
        return await queryData('SELECT * FROM events WHERE events_UID = ?', [id]);
    },
    async addEvent(event) {
        return await queryData(
            'INSERT INTO events (author, date, recipe, color) VALUES (?, ?, ?, ?)',
            [event.author, event.date, event.recipe, event.color],
            true
        );
    },
    async updateEvent(id, event) {
        return await queryData(
            'UPDATE events SET author = ?, date = ?, recipe = ?, color = ? WHERE events_UID = ?',
            [event.author, event.date, event.recipe, event.color, id],
            true
        );
    },
    async deleteEvent(id) {
        return await queryData('DELETE FROM events WHERE events_UID = ?', [id], true);
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

module.exports = Event;
