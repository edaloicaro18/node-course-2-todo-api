const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then(result => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then(result => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then(result => {
    //     console.log(result);
    // });


    //deleteMany
    // db.collection('Users').deleteMany({ name: 'Jose Huaman' }).then(result => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({ _id: ObjectID('5981fbc9a039717e98c7693a') }).then(result => {
        console.log(result);
    });


    // db.close();
});