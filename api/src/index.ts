import express, { Request, Response, Application} from 'express'
import nodemailer from 'nodemailer'

const app: Application = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '10mb'}))

const port: any = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server started on ${port}`)
})
