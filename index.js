import express from "express";
import { graphqlHTTP } from "express-graphql"; //used to create graphql server
import schemas from "./data/schema";
import resolvers  from "./data/resolver";
import cors from "cors";
const app = express();

const PORT = 3001;

app.get('/',(req,res)=>{
    res.send("Graphql is amazing!!")
})

app.use(cors({
    origin: 'http://localhost:3000'
  }));

const root = resolvers;

//endpoint to use graphql, graphqlHTTP create graphql server
//this goingto create graphiql UI
app.use('/graphql',graphqlHTTP({
    schema : schemas,
    rootValue : root,
    graphiql: true, 
}))


app.listen(PORT,()=>{
    console.log(`Server running on localhost ${PORT}`)
})