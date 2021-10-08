module.exports = {
    text: (req, res) => {
        res.send(`${req.body.text} success!`)
    }
}