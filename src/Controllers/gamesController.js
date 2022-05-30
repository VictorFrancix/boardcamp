import connection from "./../db.js";

export async function getGames(req, res) {
    let filter = req.query.name?.toLowerCase();
    filter = filter ? filter + "%" : "%";

    console.log(filter)

    try {
        const result = await connection.query(
            `SELECT games.*, categories.name AS "categoryName" 
            FROM games
            JOIN categories ON games."categoryId" = categories.id
            WHERE LOWER(games.name) 
            LIKE $1
        `,
            [filter]
        );

        res.send(result.rows);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
        return;
    }
}