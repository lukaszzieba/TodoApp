const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect do mongodb server')
    }
    console.log('Connected to mongodb server');

    db.collection('Todos').find({ completed: true }).toArray()
        .then(data => {
            console.log(data);
        }, err => {
            console.log('Unable to fetch todos');
        });

    db.collection('Todos').find({ completed: true }).count()
        .then(data => {
            console.log(data);
        }, err => {
            console.log('Unable to fetch todos');
        });

    db.close();
});

