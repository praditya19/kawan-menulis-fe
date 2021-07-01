import { mapGetters, mapActions } from "vuex";

export default {
  name: "diagnostik",
  data() {
    return {
      show: {
        position: {
          order: 0,
          name: "",
        },
        history: [],
        steps: [],
        form: [],
      },
      answer: [],
      kalimatUtamaPage1: true,
      kalimatUtamaPage2: false,
      kalimatUtamaPage3: false,
    };
  },
  mounted() {
    this.getAllAnswer();
  },
  computed: {
    ...mapGetters(["isMobile", "kmClientId", "kmClientSecret"]),
  },
  methods: {
    ...mapActions(["getAnswerList"]),
    next() {
      const findPositions = this.show.steps.find(
        (i) => i.position === this.show.position.order + 1
      );
      this.show.form.map((i) => {
        if (i.name === findPositions.name) {
          i.active = true;
        }
      });
      this.show.form.map((item) => {
        if (item.name === this.show.position.name) {
          item.active = false;
        }
      });
      this.show.position.name = findPositions.name;
      this.show.position.order = findPositions.position;
      this.show.history.push({ name: findPositions.name });
    },

    back() {
      if (this.show.position.order === 1) {
        return;
      } else {
        this.show.form.map((i) => {
          if (i.name === this.show.history[this.show.history.length - 1].name) {
            i.active = false;
          }
        });
        this.show.history.pop();
        this.show.form.map((item) => {
          if (
            item.name === this.show.history[this.show.history.length - 1].name
          ) {
            item.active = true;
          }
        });
        var findingFromStep = this.show.steps.find(
          (i) => i.name === this.show.history[this.show.history.length - 1].name
        );
        this.show.position.name = findingFromStep.name;
        this.show.position.order = findingFromStep.position;
      }
    },

    defaultSetupStepper() {
      const index = this.show.form[0];
      index.active = true;
      const findingPostionByName = this.show.steps.find(
        (item) => item.name === index.name
      );
      this.show.position.name = findingPostionByName.name;
      this.show.position.order = findingPostionByName.position;
      this.show.history.push({ name: findingPostionByName.name });
    },

    getAllAnswer() {
      const requestBody = {
        clientId: "8bb0dc63d320bba9723f66dd10c1adaf",
        clientSecret: "27e78980e2419b308c86559ef0fb0105",
      };
      this.getAnswerList({
        requestBody,
        success: (res) => {
          Promise.all(
            res.map((answer, index) => {
              this.answer.push(answer);
              const name = answer.question;
              const position = index + 1;
              const active = false;
              this.show.steps.push({ name, position });
              this.show.form.push({ name, active });
            })
          ).then(() => {
            this.defaultSetupStepper();
          });
          console.log(this.answer);
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
  },
};
