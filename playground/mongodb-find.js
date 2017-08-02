const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .find({
    //         _id: ObjectID('59822488b373a3eaab39dcac')
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, null, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Todos')
    //     .find().count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db.collection('Users')
        .find({ name: 'Jose Huaman' })
        .toArray()
        .then(docs => {
            console.log('Users');
            console.log(JSON.stringify(docs, null, 2));
        }, err => {
            console.log('Unable to fetch users', err);
        });

    // db.close();
});