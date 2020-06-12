const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to back-end ;)")
})

app.post("/mail", (req, res) => {
    const data = req.body
    const transport = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 465,
        service: process.env.SERVICE,
        auth: {
          user: process.env.USER,
          pass: process.env.PASS
        }
      });
    let mailOptions = {
        from: data.email,
        to: process.env.MAIL_TO,
        subject: `Message from ${data.name}`,
        html: `<p>Message:</p>
                <p>&emsp;${data.message}</p>`
    }
    transport.sendMail(mailOptions, (err, info) => {
        if(err) {
            // console.log(err)
        } else {
            // console.log('Message send')
            res.send(200)
            transport.close()
        }
    })
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))
}

app.listen(PORT, 
    // () => console.log(`listen on http://localhost:${PORT}`)
)
