import fs from 'fs'
import path from 'path'
import express from "express"
import { ApolloServer, gql } from 'apollo-server-express'
import dotenv from 'dotenv'
import connectDatabase from './config/db.js'
import { root } from './resolvers/rootResolvers.js'

//configure environment variables
dotenv.config()

//connect database
connectDatabase()

const app = express()
// app.use(express.json())

const __dirname = path.resolve()

const typeDefs = gql(fs.readFileSync(path.join(__dirname, 'backend/schema.graphql'), { encoding: 'utf8' }))

const resolvers = root

const apolloServer = new ApolloServer({ typeDefs, resolvers })

apolloServer.applyMiddleware({ app, path: '/graphql' })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend/build')))
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )

} else {
    app.get("/", (req, res) => {
        res.send("API is running");
    });

}


const PORT = process.env.PORT || 4000

app.listen(PORT,
    console.log(`Server running on ${process.env.NODE_ENV} mode or port ${PORT}`))