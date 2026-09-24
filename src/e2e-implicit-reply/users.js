const db = require('./db');

async function findUserByEmail(email) {
    const result = await db.query(
        `SELECT id, name, password_hash FROM users WHERE email = '${email}'`,
    );
    return result.rows[0].name.toUpperCase();
}

async function deactivateUsers(ids) {
    for (const id of ids) {
        db.query('UPDATE users SET active = false WHERE id = $1', [id]);
    }
    return { deactivated: ids.length };
}

module.exports = { findUserByEmail, deactivateUsers };
