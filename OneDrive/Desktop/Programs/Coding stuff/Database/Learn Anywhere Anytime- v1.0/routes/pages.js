// this is for our routes (our html page. each page HAS to have a route) I moved it for orginization purposes

const express = require('express')
const authController = require('../controllers/auth.js')
const router = express.Router();

module.exports = router;

// authController.isLoggedIn and user: req.use. is to see if user is logged in. then bring the user Info to do If statment using hbs handle bars
router.get('/', authController.isLoggedIn, (req,res) => {
    res.render('index', {
        user: req.user
    })
});

router.get('/register', authController.isLoggedIn, (req,res) => {
    res.render('register', {
        user: req.user
    })
});

router.get('/login', authController.isLoggedIn, (req,res) => {
    res.render('login', {
        user: req.user
    })
});

router.get('/courses', authController.isLoggedIn, (req,res) => {
    res.render('courses', {
        user: req.user
    });
});

router.get('/contact', authController.isLoggedIn, (req,res) => {
    res.render('contact', {
        user: req.user
    });
});

router.get('/assigment_1', authController.isLoggedIn, (req,res) => {
    res.render('assigment_1', {
        user:req.user
    });
});

router.get('/content_1', authController.isLoggedIn, (req,res) => {
    res.render('content_1', {
        user: req.user
    });
});

router.get('/quiz', authController.isLoggedIn, (req,res) => {
    res.render('quiz', {
        user: req.user
    });
});

router.get('/aboutus', authController.isLoggedIn, (req,res) => {
    res.render('aboutus', {
        user: req.user
    });
})

router.get('/legal', authController.isLoggedIn, (req,res) => {
    res.render('legal', {
        user: req.user
    });
});

router.get('/news', authController.isLoggedIn, (req,res) => {
    res.render('news', {
        user: req.user
    });
});

router.get('/team', authController.isLoggedIn, (req,res) => {
    res.render('team', {
        user: req.user
    });
});

router.get('/profile', authController.isLoggedIn, (req,res) => {
        
    if(req.user) {
        res.render('profile', {
            user: req.user,
        });

    } else {
        res.redirect('/login');
    }

});

router.get('/test', authController.isLoggedIn, (req,res) => {
    res.render('test', {
        user: req.user
    });
});

router.get('/maintenance', (req,res)=> {
    res.render('maintenance')
});

router.get('/forum', authController.isLoggedIn, (req,res) => {
    if(req.user) {
        res.render('forum', {
            user: req.user,
        });

    } else {
        res.redirect('/login');
    }
});

router.get('/thread', authController.isLoggedIn, (req,res) => {    
    if(req.user) {
        res.render('thread', {
            user: JSON.stringify(req.user),
        });

    } else {
        res.redirect('/login');
    }
});



