const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

mongoose.connect('mongodb://localhost:27017/zabota', {
   useNewUrlParser : true,
   useUnifiedTopology: true
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql : true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${ err }`));
dbConnection.once('open', () => console.log('🚀 Connected to DB!'));

app.listen(PORT, err => {
   err ? console.log(err) : console.log(`🚀 Server ready at http://localhost:${ PORT }/graphql`);
});