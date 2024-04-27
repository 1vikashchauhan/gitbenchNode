// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').findOne({ _id: new ObjectID("5c1113239cbfe605241f9071") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').findOne({ name : 'sahil saini '}, (error, task) => {
      
    //   console.log('error',error);
    //     console.log('task',task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //   console.log('error',error);
    //     console.log(tasks)
    // })

    //     db.collection('users').updateOne({
    //     _id: new ObjectID("662a34e0a89619dd14dfffdd")
    // }, {
    //     $set: {
    //         name: 'mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
      db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})