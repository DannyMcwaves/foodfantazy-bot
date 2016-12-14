import Festivals from './models/festival'
import db from './inits/db'
import downloadPost from './util/downloadPost'

Festivals.find({}, (err, content) => {
  if (err) throw err

  console.log('beginning posting')

  let i = 1

  const interval = setInterval(() => {
    if (i === content.length - 1) {
      db.close()
      clearInterval(interval)
      console.log('db closed')
    }
    downloadPost(content[i++])
  }, 1000*60*60)
})
