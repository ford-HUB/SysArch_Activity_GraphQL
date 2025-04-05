import express from "express"
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./models/Movie.model.js";
import { resolvers } from "./Resolvers/resolvers.js";
import cors from "cors";
import { config } from "dotenv";

config()

const app = express();
app.use(cors());


async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    app.listen(process.env.PORT, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}/graphql`);
    });
}

startServer(); // start the async server
