import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  //crear all three collection out completely, we don't want import anything with stuff already in the DB. So it's going to completely wipe it out.
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // import Users (it's an array)
    const createdUsers = await User.insertMany(users);

    //first item in /data/users.js
    const adminUser = createdUsers[0]._id;

    // adding a user field (adminUser) to the array of products
    const sampleProducts = products.map(product => {
      return { ...product, user: adminUser };
    });
    // store the previous array (sampleProducts) in the DB
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    //exit with failure
    process.exit(1);
  }
};

const destroyData = async () => {
  //crear all three collection out completely, we don't want import anything with stuff already in the DB. So it's going to completely wipe it out.
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    //exit with failure
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

//////////////////////////////////////////////////////////////////////////////////////////////
// see package.json+ ==>
// --- IMPORT/DESTROY DATA --- // (created script in package.json instead of writing all of the following code)
//
// /* import the data:
// -- node backend/seeder -- //
// /* destroy the data:
// node backend/seeder -d
//
//  (to get the -d):
// if (process.argv[2] === '-d') {
//   destroyData();
// } else {
//   importData();
// }

// console.log(process.argv[2]);
/////////////////////////////////////////////////////////////////////////////////////////////
