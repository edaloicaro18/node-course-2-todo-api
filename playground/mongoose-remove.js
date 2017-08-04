const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then(result => {
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({ _id: '5984895e6e2cc6af5cda9a4b' }).then(todo => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5984895e6e2cc6af5cda9a4b').then(todo => {
    console.log(todo);
});