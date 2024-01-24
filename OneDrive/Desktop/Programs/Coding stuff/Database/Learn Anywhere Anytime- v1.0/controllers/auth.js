const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {promisify} = require('util');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT, //MySQL PORT *NOT* the website port
    database: process.env.DATABASE
});

//login function
exports.login = async (req,res) => {
    try {
        const {email, password} = req.body;

        //if email/password body is empty
        if(!email || !password){
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            })
        }

        // star means its gonna select ALL colums in DATABASE
        db.query('SELECT * FROM users WHERE email = ?', [email], async(error,results) => {
            console.log(results)
            if(!results || !(await bcrypt.compare(password, results[0].password)) ){
                res.status(401).render('login',{
                    message: 'Email or password is incorrect'
                })
            } else {
                const id = results[0].id;
                
                //jwt token
                const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log("The token is: " + token);


                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true // for safety
                }

                // THE cookie
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect("/");
            };
        })

    } catch (error) {
        console.log(error)
    }
}




//register function
exports.register = (req,res) => {
    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;



    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        const indicator = 0;
            
        
        if(error) {
            console.log(error);
        }
        
        // if email is already exists in Database
        if(results.length > 0) {
            return res.render('register', {
                message: 'This email is already in use',
            })

        }else if(password !== passwordConfirm){
            return res.render('register', {
                message: 'Passwords do not match!',
                
            })
        }
            // incryptying the passwords
        let hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);
        
        // SENDING USER INFO TO DATABASE
        db.query('INSERT INTO users SET ?', {name:name, email:email, password:hashedPassword}, (error, results) => {
            if(error) console.log(error);

            else {
                console.log(results);
                return res.render('register', {
                    message1: 'You have successfuly registered!'
                });
            }
        });
    });
};

    // CHECK IF USER LOGGED IN
exports.isLoggedIn = async (req, res, next) => {
    console.log(req.cookies);
    if(req.cookies.jwt) {
        try {
            // 1) verify the token
            // decode the cookie
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
            console.log(decoded);

            //2) check if users still exists
            db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (error, results) => {
                console.log(results);

                if(!results) {
                    return next();
                }

                req.user = results[0];
                return next();
            })
        } catch (error) {
            console.log(error);
            return next();
        }
    } else {
        next();
    }
};



        // logout function
exports.logout = async (req,res) => {
    res.cookie('jwt', 'logout', {
        // removing the cookie so it logges out the user
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).redirect('/');
}



