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

        if(result.rows.length === 0){
            res.sendStatus(404);
            return;
        }

        res.status(200).send(result.rows);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
        return;
    }
}

export async function sendCustomer(req, res) {
    const { name, phone, cpf, birthday } = req.body;

    try {
        const customer = await connection.query(
            `SELECT * FROM customers
            WHERE cpf = $1
            `,
            [cpf]
        );

        if (customer.rows.length > 0) {
            res.sendStatus(409);
            return;
        }

        await connection.query(
            `INSERT INTO customers 
            (name, phone, cpf, birthday)
            VALUES ($1, $2, $3, $4)
            `,
            [name, phone, cpf, birthday]
        );

        res.sendStatus(201);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}