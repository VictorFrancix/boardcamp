import connection from "../db.js";

export async function checkGameExists(req, res, next) {
    const name = req.body.name;

    try {
        const result = await connection.query(
            `SELECT * FROM games
            WHERE name = $1
            `,
            [name]
        );

        if (result.rows.length > 0) {
            res.sendStatus(409);
            return;
        }
        next();
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}