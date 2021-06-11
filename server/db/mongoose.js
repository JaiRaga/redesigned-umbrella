const mongoose = require('mongoose')
const db = require('../config/keys').mongodbURI

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Connected to mongodb'))
	.catch((err) => console.log(err))
