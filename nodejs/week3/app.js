// I modified this js file instead of modification of "multipleStatements: true" in db configuaryion part,since
//  we have been asked  not to change that configuration,I tried to use multiple queries where script should  execute only the sort query
//  and ignore whatever is passing as second query in browser.

import express from 'express';
const apiRouter = express.Router();
import db from "./database.js";
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api", apiRouter);
const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);
contactsAPIRouter.get("/", async (req, res) => {
    let query = db.select("*").from("contacts");
    if ("sort" in req.query) {
        const orderBy = req.query.sort.toString().split(" ");
        console.log(orderBy)
        if (orderBy[1]) {
            console.log('hello')
            if ((orderBy[0].includes('last_name') && orderBy[1].includes('desc'))) query = query.orderBy('last_name', 'desc')
            else if ((orderBy[0].includes('first_name') && orderBy[1].includes('desc'))) query = query.orderBy('first_name', 'desc')
            else if (orderBy[0].includes('last_name')) query = query.orderBy('last_name')
            else {
                query = query.orderBy('first_name')
            }
        }
        else {
            query = query.orderBy(orderBy[0])
        }
    }


    console.log("SQL", query.toSQL().sql);
    try {
        const data = await query;
        res.json({ data });
    } catch (e) {
        res.status(500).send({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


