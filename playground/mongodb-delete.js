const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect do mongodb server')
    }
    console.log('Connected to mongodb server');



    // db.collection('Todos').deleteMany({ text: 'First todo' })
    //     .then((res) => {
    //         console.log(res);
    //     });

    db.collection('Todos').deleteOne({ completed: false})
        .then((res) => {
            console.log(res);
        });


    // db.collection('Todos').findOneAndDelete({ text: 'First todo' })
    //     .then((res) => {
    //         console.log(res);
    //     });


    db.close();
});
