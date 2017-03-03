
import request from "request";

request.defaults({
    encoding: "base64"
});

const Req = (url, title, callback) => {
   request.get(url, (err, res, body) => {
       if (err) {
           console.log(err);
       } else if (title === null) {
           callback(body);
       } else {
           callback(title, body);
       }
   })
};

export default Req;
