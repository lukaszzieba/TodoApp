const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect do mongodb server')
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').insertOne({
    //     text: "First todo",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to inster todo');
    //     }

    //     console.log(JSON.stringify(result.ops, null, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "Łukasz",
    //     age: 27,
    //     email: "lukaszzieba4@gmail.com"
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(JSON.stringify(result.ops, null, 2));
    // });  

    db.close();
});

