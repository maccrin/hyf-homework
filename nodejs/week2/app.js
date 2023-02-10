const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const jsonRead = require('./jsonRead')
const data = jsonRead("./document.json")

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is a search engine");
});
app.get("/search", (req, res) => {
    const q = req.query.q;
    const output = [];
    try {
        if (q === undefined || q === null || q === '') {
            res.status(200).send(data)
        }
        else {
            data.forEach(e => {
                Array.from(Object.values(e)).map(String).forEach(x => {
                    if (x.toUpperCase().includes(q.toUpperCase())) {
                        output.push(e)
                    }
                })
            })
            output.length === 0 ? res.status(200).send('No such data with given param') : res.status(200).send(output)
        }
    }

    catch (e) {
        res.status(404).send(e.messge)
    }

});

app.get("/documents/:id", (req, res) => {
    try {
        const result = data.filter(eachData => eachData.id === parseInt(req.params.id));
        result.length > 0 ? res.status(200).send(result) : res.status(200).send(`No such data with id`)
    }
    catch (e) {
        res.status(404).send(e.messge)
    }
})

app.post('/search', (req, res) => {
    const q = req.query.q;
    const fild = req.body.fields;
    const output = []
    try {
        if (q && fild) res.status(400).send(`bad query`)
        if (q) {
            data.forEach(e => {
                Array.from(Object.values(e)).map(String).forEach(x => {
                    if (x.toUpperCase().includes(q.toUpperCase())) {
                        output.push(e)
                    }
                })
            })
            output.length === 0 ? res.status(200).send(`No Such data Found`) : res.status(200).send(output)
        }

        else {
            const result = []
            Object.keys(fild).forEach(key => {
                result.push(data.filter(eachData => eachData[key] === fild[key]))
            })
            console.log(result)
            res.status(200).send(Array.from(new Set(result.flat())))
        }
    }
    catch (e) {
        res.status(404).send(e.messge)
    }
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});