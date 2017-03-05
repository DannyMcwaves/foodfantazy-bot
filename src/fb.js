/**
 * Created by danny_mcwaves on 3/5/17.
 */

// this is the facebook script.

let fb = require("fbgraph"),
    accessToken = "EAAFjaC5NXrQBAC9NiauPPlCqPNAkNWt8qQykTheriK6gejGoOIVijjEiUviZA3HPT7Ei2uegrFqCWu7heZBKriPjkpOm2GndDs80iimmresBiKKDqkSjStmMAZCBCduB5Ht5buyM6ywrAYZAo2I9gAcRs9ZAZCMFsQRskoiZBAhvwZDZD";

fb.setAccessToken(accessToken);

const Facebook = (obj) => {
  "use strict";
  fb.post("me/photos", {
      url: obj.url,
      caption: obj.title + " #REVELATOR #horrorfilm #horror #indiefilm #film #movie #trailer #SupportIndieFilm #ComingSoon #horrormovies #horrormovie #staytuned #ghost #creepy #spooky #boo #halloween #streaming #cinema #filmmaking #itunes #netflix #follow #rt"
  }, (err, res) => {
      if (err) {
          console.log(err);
      } else {
          console.log(res)
      }
  })
};

fb.get("me", (err, res) => {
    console.log(res);
});

fb.get("me", {fields: "id,name,picture"}, (err, res) => {
    "use strict";
    console.log(res);
});

fb.post("me/photos", {
    url: "http://www.google-wizard.co.uk/wp-content/uploads/2012/02/contextual-links.jpg",
    caption: "this is the caption of the new photo then bro"
}, (err, res) => {
    console.log(res);
});


export default Facebook;
