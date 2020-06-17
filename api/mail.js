const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

// app.get("/", (req, res) => {
//     res.send("Welcome to back-end ;)")
// })

app.post("/mail", (req, res) => {
    const data = req.body
    let transport = nodemailer.createTransport({
        // service: 'gmail',
        host: process.env.HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
          user: 'tom@tm-dev.pl',
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
            console.log(err)
        } else {
            // console.log('Message send')
            res.sendStatus(200)
            transport.close()
        }
    })
})


if (process.env.NODE_ENV === 'production') {
    app.use("/", express.static('../build'))
}
app.get("*", (req, res) => {
    res.redirect("/")
})

app.listen(PORT, 
    () => console.log(`listen on http://localhost:${PORT}`)
)
