const jwt = require('jsonwebtoken')


// Verify Token
function verifyToken(req, res, next) {
    const authToken = req.headers.authorization
    if (authToken) {
        const token = authToken.split(" ")[1]
        try {
            const decodedPayload = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decodedPayload
            next()
        } catch (error) {
            res.status(403).json({ message: "You are not authorized" })
        }
    } else {
        res.status(401).json({ message: "invalid token, access denied" })
    }
}

// Verify Token & Admin
function verifyTokenAdmin(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json({ message: "not allowed, only admin" })
        }
    })
}

//Verify Token & Only User Himself
function verifyTokenAndOnlyUser(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id) {
            next()
        } else {
            res.status(403).json({ message: "not allowed, Only User Himself" })
        }
    })
}

// Verify Token & Authorization
function verifyTokenAndOnlyAuthorization(req, res, next) {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json({ message: "not allowed, Only User Himself or admin" })
        }
    })
}

module.exports = { verifyToken, verifyTokenAdmin, verifyTokenAndOnlyUser, verifyTokenAndOnlyAuthorization }