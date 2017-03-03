
import Horrors from "./horror";
import Record from "./record";


let recordFunction = url => {
    let record = new Record({url: url});
    record.save((err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log("RECORD SAVED");
        }
    })
};

let horrorFunction = obj => {
    let horror = new Horrors(obj);
    horror.save((err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log("HORROR SAVED");
        }
    })
};

const Save = obj => {
    Record.find({url: obj.url}, (err, res) => {
        if (err) {
            console.log("[-] ERROR ", err.stack);
        } else if (res.length === 0) {
            recordFunction(obj.url);
            horrorFunction(obj);
        }
    })
};

const Find = (cb) => {
    Horrors.find({}).sort({createdAt: -1}).limit(1).select({title: 1, url: 1, _id: 0}).exec(cb);
};

const Del = (url) => {
    Horrors.remove({url: url}, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
};

export {Save, Find, Del};
