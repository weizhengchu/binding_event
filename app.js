const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      name2: "",
      confirmedName: "",
      confirmedName2: "",
    };
  },
  methods: {
    alerts() {
      alert("Showed");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    setName2(event, lastName) {
      this.name2 = event.target.value + " " + lastName;
    },
    confirmInput2() {
      this.confirmedName2 = this.name2;
    },
  },
});

app.mount("#assignment");
