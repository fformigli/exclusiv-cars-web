module.exports = {
    isLoggedIn(req, res, next){
        if (req.isAuthenticated()) 
            return next();
        return res.redirect('/signin');

    },

    isNotLoggedIn(req, res, next){
        if (!req.isAuthenticated()) 
            return next();
        return res.redirect('/profile');
    },

    isAdmin(req, res, next){
        if(req.user.isadmin)
            return next();
        return res.redirect('/forbidden');
    }
}