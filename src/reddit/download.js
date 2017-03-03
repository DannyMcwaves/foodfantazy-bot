
import Req from "../req";
import {Save} from "../config/base";

const Download = (url) => {
    Req(url, null, (data) => {
        let obj = JSON.parse(data);

        for (let i of obj.data.children) {

            let end = i.data.url.split(".").pop();

            if (["jpg", "jpeg", "png", "gif", "svg"].indexOf(end) !== -1) {
                let data = {
                    title: i.data.title,
                    url: i.data.url
                };
                Save(data);
            }
        }
    });
};

export default Download;

