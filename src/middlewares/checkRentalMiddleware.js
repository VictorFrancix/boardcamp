import connection from "../db.js";

export async function checkRentalExists(req, res, next) {
    const id = req.params.id;

    try {
        const rentalResult = await connection.query(
            `SELECT * FROM rentals
            WHERE id = $1`,
            [id]
        );

        if (rentalResult.rows.length > 0) {
            res.locals.rental = rentalResult.rows[0];
            next();
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}