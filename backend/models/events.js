const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'mariadb.mariadb.svc.cluster.local',
    user: 'root',
    password: process.env.DB_ROOT_PASSWORD,
    database: 'MyRecipes',
    connectionLimit: 5
});

const Event = {
    async getAllEvents() {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM events');
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async getEventById(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('SELECT * FROM events WHERE events_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async addEvent(event) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'INSERT INTO events (author, date, recipe, color) VALUES (?, ?, ?, ?)',
                [event.author, event.date, event.recipe, event.color]
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async updateEvent(id, event) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query(
                'UPDATE events SET author = ?, date = ?, recipe = ?, color = ? WHERE events_UID = ?',
                [event.author, event.date, event.recipe, event.color, id]
            );
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async deleteEvent(id) {
        try {
            const conn = await pool.getConnection();
            const rows = await conn.query('DELETE FROM events WHERE events_UID = ?', [id]);
            conn.release();
            return rows;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
};

module.exports = Event;