//const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');
 import mongoose from 'mongoose';
 import config from 'config';
const db: string = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      // useNewUrlParser: true,
      // useCreateIndex: true,
    });
    console.log('MongoDB Connected...');
  } catch (err: any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;





// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// const connectDB = async () => {
//   try {
//       console.log('Connectiomn URL : ' + db);
//     await mongoose.connect(db);
//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.error(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// }

// module.exports = connectDB;