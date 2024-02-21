const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

const app = express();
app.use(cors(corsOption));
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hospital"
})

app.get('/',(req, res)=>{
    const sql = "SELECT * FROM userregistration";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/register',(req,res)=>{
    const sql = "INSERT INTO userregistration (`username`,`email`,`password`,`gender`) VALUES (?,?,?,?)";
    console.log(req.body.username);
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.gender
    ]
    db.query(sql,values,(err, data) => {
        if(err) return res.json(err);
        return res.json("created");
    })

})


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM userregistration WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            console.error('Database error: ',err);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (data.length > 0) {
            // User found, login successful
            return res.json({ message: "Login successful" });
        } else {
            // User not found or invalid credentials
            return res.status(401).json({ error: "Invalid username or password" });
        }
    });
});


app.get('/admin',(req, res)=>{
    const sql = "SELECT * FROM center";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.get('/user',(req, res)=>{
    const sql = "SELECT * FROM center";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.post('/admin/addcentres', (req, res) => {
    const { hospitalname, description, location ,slots} = req.body;
    
    // Check if a center with the same location already exists
    const checkDuplicateSql = "SELECT COUNT(*) AS count FROM center WHERE location = ?";
    db.query(checkDuplicateSql, [location], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: "Internal server error" });
        }

        const centerCount = result[0].count;
        if (centerCount > 0) {
            // Center with the same location already exists
            // return res.status(400).json({ error: "Center with the same location already exists" });
            alert("Center with the same location already exists");
        } else {
            // Insert the new center into the database
            const insertSql = "INSERT INTO center (hospitalname, description, location,slots) VALUES (?, ?, ?, ?)";
            const values = [hospitalname, description, location,10];
            
            db.query(insertSql, values, (err, data) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ error: "Failed to add center" });
                }
                return res.json({ message: "Center added successfully" });
            });
        }
    });c
});



app.get('/user', (req, res) => {
    const sql = "SELECT id, hospitalname, slots FROM center";
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching hospitals:', err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json(results);
    });
});

// Route to book a slot
app.post('/user/bookslot', (req, res) => {
    const { id } = req.body;

    const decreaseSlotsSQL = "UPDATE center SET slots = slots - 1 WHERE id = ?";
    db.query(decreaseSlotsSQL, [id], (err, result) => {
        if (err) {
            console.error('Error decreasing slots:', err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json({ message: "Slot booked successfully" });
    });
});









app.listen(8081,()=>{
    console.log("Listening...");
})