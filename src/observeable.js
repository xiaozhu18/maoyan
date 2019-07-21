import Vue from 'vue'
const state = Vue.observable({
        name:'',
         //解析图片路径
         dealImgUrl(url, num) {
            let topUrl = url.slice(0, 22);
            let bottomUrl = url.slice(25);
            return topUrl + num + bottomUrl;
        }
});
export default state