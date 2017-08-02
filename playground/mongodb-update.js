const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .findOneAndUpdate(
    //     { _id: ObjectID('59823244b373a3eaab39e077') },
    //     { $set: { completed: true } },
    //     { returnOriginal: false })
    //     .then(result => {
    //         console.log(result)
    //     });

    db.collection('Users')
        .findOneAndUpdate(
        { _id: ObjectID('5981f76b56391352a442671b') },
        {
            $set: { name: 'Edward Cacho' },
            $inc: { age: 1 }
        },
        { returnOriginal: false })
        .then(result => {
            console.log(result)
        });

    // db.close();
});