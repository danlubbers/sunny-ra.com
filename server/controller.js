module.exports = {
    homeImages: (req, res) => {
        const dbInstance = req.app.get('db')
        // References 'getAllHomeImages.sql file in (db) folder
        dbInstance.images.getAllHomeImages().then(images => res.status(200).send(images)).catch((err)=>{
          console.log(err);
          res.status(500).send(err)
        })
    }
}