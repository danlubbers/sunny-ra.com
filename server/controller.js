module.exports = {
    homeImages: (req, res) => {
        const dbInstance = req.app.get('db')
        // References 'getAllHomeImages.sql file in (db) folder
        dbInstance.getAllHomeImages().then(images => res.status(200).send(images)).catch((err)=>{
          console.log(err);
          res.status(500).send(err)
        })
    },

    // paintings2006: (req, res) => {
    //   const dbInstance = req.app.get('db')
    //   // References 'getAllPaintings2006.sql file in (db) folder
    //   dbInstance.paintings.getPaintings2006().then(images => res.status(200).send(images)).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send(err)
    //   })
    // },

    // paintings2008: (req, res) => {
    //   const dbInstance = req.app.get('db')
    //   // References 'getAllPaintings2008.sql file in (db) folder
    //   dbInstance.paintings.getPaintings2008().then(images => res.status(200).send(images)).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send(err)
    //   })
    // },

    // Trying to get ALL IMAGES
    allImages: (req, res) => {
      const dbInstance = req.app.get('db');
      const { category } = req.params
      console.log('controller cat: ', category)
      
      dbInstance.getImages([category]).then(images => res.status(200).send(images)).catch((err)=>{
        console.log('ERROR:', err);
        res.status(500).send(err)
      })
    }
}