const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '59838a830c3e417cd8b3331311';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// }).catch(e => console.log(e));

const userId = '59825613baff9c82a82dbb13';

User.findById(userId)
    .then(user => {
        if (!user) {
            return console.log('User not found');
        }
        console.log('User', user);
    }).catch(e => console.log(e));