const mongoose = require('mongoose');
var url = `mongodb+srv://pranay_lamse:Pass123@cluster0.gphx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url, function(err, db) {
    if (err) throw err;
        console.log("Database created!");
        db.close();
});