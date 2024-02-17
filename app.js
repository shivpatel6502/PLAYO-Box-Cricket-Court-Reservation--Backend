import dotenv from 'dotenv'
dotenv.config()
import express, { json } from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import superAdminRoutes from './routes/superAdminRoutes.js';
import adminUserRoutes from './routes/adminUserRoutes.js';
import cartRoutes from './routes/cartRoutes.js';


const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//cors policy
app.use(cors())

//Database connection 
connectDB(DATABASE_URL)

//Json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Load routes
app.use("/api/user", userRoutes)

//adminUser and superAdmin
app.use('/superadmin', superAdminRoutes);
app.use('/adminuser', adminUserRoutes);


//add to cart
app.use('/cart', cartRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})