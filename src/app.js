import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import registerUser from './routes/user.routes.js'
import loginUser from './routes/user.routes.js'
import logoutUser from "./routes/user.routes.js"
import refreshAccessToken from "./routes/user.routes.js"

app.use("/api/v1/users", registerUser)
app.use("/api/v1/users",loginUser)
app.use("/api/v1/users",logoutUser)
app.use("/api/v1/users",refreshAccessToken)


export { app }