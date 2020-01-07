import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';
const myVM = (() => {
    //instantiate a new Vue Instance
    let vue_vm= new Vue({
        
        data: {
            message: "Hello form VUE!",

            collection: [
                { name: "Trevor", role:"Prof"},
                { name: "Tien", role:"Student"},
                { name: "Dog", role:"Pet"},
            ]
        },
        nethods: {
            logClicked() {
                console.log('Clicked on an element!');

            }
        }
    }).$mount("#app");
})();