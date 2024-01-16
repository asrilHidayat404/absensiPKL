const express = require("express");
const app = express();
const port = 5000;
const body = require("body-parser")
const db = require("./db-connection/db");

// Perbaikan disini: "view engine" dan "ejs" tanpa tanda kutip ganda di antara keduanya
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("divisi")
})

app.post("/divisi", (req, res) => {
	const {divisi} = req.body
	if (divisi == "web") {
		res.redirect("/login")
		app.post("/login", (req, res) => {
		  const {username, password} = req.body
		  try {
		    const sql = `select * from users where username = ? and password = ?`
		    db.query(sql, [username, password], (err, results) => {
		    	if ( err ) throw new err

		      	console.log(results[0].divisi)

		    	if (results[0].divisi !== "web"){
		    		console.log("pengguna tidak ada")
		    	} else if (results[0].divisi == "web"){
					 console.log("pengguna ada")
		    	}

		    })
		  } catch(e) {
		    // statements
		    console.log(e);
		  }
		})
	}

	if (divisi == "cyberSecurity") {
		res.redirect("/login")
		app.post("/login", (req, res) => {
		  const {username, password} = req.body
		  try {
		    const sql = `select * from users where username = ? and password = ?`
		    db.query(sql, [username, password], (err, results) => {
		    	if ( err ) throw new err

		      	console.log(results[0].divisi)

		    	if (results[0].divisi !== "cyberSecurity"){
		    		console.log("pengguna tidak ada")
		    	} else if (results[0].divisi == "cyberSecurity"){
					 console.log("pengguna ada")
		    	}

		    })
		  } catch(e) {
		    // statements
		    console.log(e);
		  }
		})
	}

	console.log(divisi)
})

app.get("/login", (req, res) => {
    res.render("login");
});


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
    // Membuka koneksi
    db.connect((err) => {
        if (err) {
            console.error('Koneksi database gagal: ', err);
            return;
        }
        console.log('Terhubung ke database MySQL');
    });
});
