window.box = new Vue({
    el: "#app",
    data: function data() {
        return {
            logo: "",
            name: "",
            title: "",
            email: "",
            telephone: "",
            email: "",
            address: "",
            website: "",
            studio: ""
        };
    },
    computed: {
        tel1: function tel1() {
            return "tel:" + this.telephone.replace(/ /g, "").replace(/\D/g, "");
        }
    },
    mounted: function mounted() {
        var _this = this;

        var signatureClipboard = new Clipboard(".js-copy");
        var signatureHTMLClipboard = new Clipboard(".js-copy-src", {
            text: function text() {
                return _this.$refs.sourceWrapper.innerHTML;
            }
        });
    }
});