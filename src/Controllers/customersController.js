import connection from "../db.js";

export async function getCustomers(req, res){
    let filter = req.query.cpf;
    filter = filter ? filter + "%" : "%";

    try{
        const result = await connection.query(
            `SELECT * FROM customers
            WHERE cpf LIKE $1
            `,
            [filter]
        );

        res.status(200).send(result.rows);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
        return;
    }
}

export async function getCustomer(req, res){
    const id = req.params.id;

    try{
        const result = await connection.query(
            `SELECT * FROM customers
            WHERE id=$1
            `,
            [id]
        );

        res.status(200).send(result.rows);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
        return;
    }
}