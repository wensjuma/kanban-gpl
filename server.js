const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/schema/schema')
const app = express();
const PORT = process.env.PORT || 3300

app.use("/graphql", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log("SERVER RUNNING>>", PORT);
})

