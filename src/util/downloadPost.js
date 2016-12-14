import download from './download'
import fs from 'fs'
import T from './T'

const downloadPost = (item) => {
  let img = 'img.png'
  if (~item.url.indexOf("gif")) img = 'img2.gif'

  download(item.url, img, (check) => {
    if (check === false) {
      console.log('img file too big')
      return
    }
    postMedia('./'+img, '')
  })
}

const postMedia = (filePath, title) => {
  var b64content = fs.readFileSync(filePath, { encoding: 'base64' })

  // first we must post the media to Twitter
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    // now we can assign alt text to the media, for use by screen readers and
    // other text-based presentations and interpreters
    var mediaIdStr = data.media_id_string
    var altText = 'title'
    var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

    T.post('media/metadata/create', meta_params, function (err, data, response) {
      if (err) throw err
      if (!err) {
        // now we can reference the media and post a tweet (media will attach to the tweet)
        var params = { status: '#festivalseason #festivals #musicfestivals', media_ids: [mediaIdStr] }

        T.post('statuses/update', params, function (err, data, response) {
          //console.log(data)
        })
      }
    })
  })
}


export default downloadPost
