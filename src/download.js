import Scraper from 'image-scraper'
import tc from './inits/tumblr'
import cheerio from 'cheerio'
import db from './inits/db'
import Festivals from './models/festival'

Festivals.remove({}, (err, resp) => {
  if (err) throw err

  tc.blogPosts('festivalfanatics', (err, data) => {
    let i = 0
    const dataLength = data.posts.length
    data.posts.map(item => {
      let scraper = new Scraper(item.image_permalink)
      scraper.scrape((image) => {
        let check = true
        if (image.attributes.id === 'content-image' && check) {
          let fitem = {
            title: item.caption || '',
            url: image.attributes['data-src']
          }
          check = false

          Festivals.create(fitem, (err, fest) => {
            if (err) throw err

            i++
            if (i === dataLength - 1) {
              db.close()
              console.log('db closed')
            }
          })
        }
      })
    })
  })
})
