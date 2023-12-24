const mong = require('mongoose')
mong.connect('mongodb+srv://mahmoudmetawea464:123456789mA@cluster0.tqckopm.mongodb.net/project 0?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.log("connected")
})
