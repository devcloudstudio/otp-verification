import express, { Request, Response, Application} from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json({limit: '10mb'}))

const port: any = process.env.PORT || 5000

let email:any;

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'Gmail',

    auth: {
        user: '',
        pass: ''
    }
})

let otp:any = Math.random()
otp = otp * 1000000
otp = parseInt(otp)

app.post('/send',function(req: Request,res: Response){
    email=req.body.email;

     // send mail with defined transport object
    var mailOptions={
        to: req.body.email,
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        return res.redirect('http://localhost:3000/otp');
    });
});

app.post('/verify',function(req: Request,res: Response){

    if(req.body.otp==otp){
        res.status(200).json('successfully registered')
    }
    else{
        res.status(200).json('invalid')
    }
});  

app.post('/resend',function(req: Request,res: Response){
    var mailOptions={
        to: email,
       subject: "Otp for registration is: ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('otp',{msg:"otp has been sent"});
    });

});

app.listen(port, () => {
    console.log(`server started on ${port}`)
})
