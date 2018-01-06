const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect do mongodb server')
    }
    console.log('Connected to mongodb server');

    db.collection('Todos')
        .findOneAndUpdate({ _id: new ObjectID('5a50927b144b957db04c5fd4') },
        {
            $set: {
                completed: false
            }
        }, {
            returnOriginal: false
        }).then(res => {
            console.log(res);
        })


    db.close();
});
