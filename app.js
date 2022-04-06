Vue.createApp({
  data() {
    return {
      num: ""
    }
  },
  methods: {
    calculate() {
      this.num = eval(this.num);
      console.log(eval(this.num));
    },

    getNum(e) {
      if (e.target.type == "button") {

        if (e.target.classList.contains("btn-clear")) {
          this.num = "";
        }

        else if (e.target.classList.contains("btn-equal")) {
          this.calculate();
        }

        else {
          this.num += e.target.textContent;
        }

      }
    }
  }
}).mount("#app");
