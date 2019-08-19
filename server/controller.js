module.exports = {
    homeImages: (req, res) => {
        const dbInstance = req.app.get('db')
        // References 'getAllHomeImages.sql file in (db) folder
        dbInstance.getAllHomeImages().then(images => res.status(200).send(images)).catch((err)=>{
          console.log(err);
          res.status(500).send(err)
        })
    },

    allImages: (req, res) => {
      const dbInstance = req.app.get('db');
      const { category } = req.params
      // console.log('controller cat: ', category)
      
      dbInstance.getImages([category]).then(images => res.status(200).send(images)).catch((err)=>{
        console.log('ERROR:', err);
        res.status(500).send(err)
      })
    }
}