window.box = new Vue({
    el: "#app",
    data: function data() {
      return {
        logo: "https://rh.convenia.com.br/assets/institucional/images/convenia-color.png",
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
  
      var feedback = function feedback(ref) {
        _this.$refs[ref].classList.add("feedback");
        setTimeout(function () {
          _this.$refs[ref].classList.remove("feedback");
        }, 2000);
      };
  
      signatureClipboard.on("success", function (e) {
        feedback("copy");
      });
      signatureHTMLClipboard.on("success", function (e) {
        feedback("copySrc");
      });
    }
  });