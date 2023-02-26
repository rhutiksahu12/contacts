
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json())






const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'contactdetails'
})

// Create New Contact
app.post('/createContact', (req, res) => {
    let contact = req.body
    let contactData = [contact.firstName, contact.lastName, contact.email, contact.mobileNumber]

    db.query('INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES(?)', [contactData], (err, result) =>{
        if(err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    } )

})

// get All Contacts
app.get('/getAllContact', (req, res) => {
    db.query("SELECT * FROM CONTACTS", (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


// get one Contact as requested by via id
app.get('/getContact/:id', (req, res) => {
    
    db.query("SELECT * FROM CONTACTS WHERE idcontacts = ?", [req.params.id], (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})



// update Contact
app.post('/updateContact', (req, res) => {
    const id = req.body.id;
    const email = req.body.email;
    const mobileNumber = req.body.mobileNumber
    db.query("UPDATE CONTACTS SET email =?, mobile_number=? WHERE idcontacts = ?", [email, mobileNumber, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("contact Updated")
        }
    })
})


// Delete Contact
app.post("/deleteContact", (req, res) => {
    const id = req.body.id;

    db.query("DELETE FROM CONTACTS WHERE idcontacts = ?", [id], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send("Contact Deleted")
        }
    })
} )




// app.get('/', (req, res) => 
// {
//     res.send('Hello World!')
// })

// app.post('/', (req, res) =>
// {
//  res.send('POST request received')
// }  )

// app.put('/', (req, res) => 
// {
//     res.send('Put Request received')
// })

// app.delete('/', (req, res) =>{
//  res.send('delete request received!')
// })





const port = 3000

app.listen(port, () => console.log(`Yay!, Server is running n port ${port}!`))



