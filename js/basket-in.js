$(document).ready(function () {

  const state = {
    count: 0,
    cake_1: 0,
    cake_2: 0,
    cake_3: 0,
    cake_4: 0,
    cake_5: 0,
    cake_6: 0,
    cake_7: 0,
    cake_8: 0,
    mini_cake_1: 0,
    mini_cake_2: 0,
    mini_cake_3: 0,
    mini_cake_4: 0,
    mini_cake_5: 0,
    mini_cake_6: 0,
    mini_cake_7: 0,
    mini_cake_8: 0,
  };
  const getters = { count: state => state.count };
  const mutations = {
    increment(state) {
      state.count++
    },
    increment_item(state, { name }) {
      if (name === "cake-1") { state.cake_1++; console.log('state.cake_1: ', state.cake_1); }
      else if (name === "cake-2") { state.cake_2++; }
      else if (name === "cake-3") state.cake_3++;
      else if (name === "cake-4") state.cake_4++;
      else if (name === "cake-5") state.cake_5++;
      else if (name === "cake-6") state.cake_6++;
      else if (name === "cake-7") state.cake_7++;
      else if (name === "cake-8") state.cake_8++;
      else if (name === "bakery-1") state.mini_cake_1++;
      else if (name === "bakery-2") state.mini_cake_2++;
      else if (name === "bakery-3") state.mini_cake_3++;
      else if (name === "bakery-4") state.mini_cake_4++;
      else if (name === "bakery-5") state.mini_cake_5++;
      else if (name === "bakery-6") state.mini_cake_6++;
      else if (name === "bakery-7") state.mini_cake_7++;
      else if (name === "bakery-8") state.mini_cake_8++;
    },
  };
  const store = new Vuex.Store({ state, getters, mutations });



  new Vue({
    'el': "#basket-modal-info",
    'store': store,
    data() {
      return {
        basketSaved: {},
      }
    },
    created() {
      /*
      this.basketSaved = JSON.parse(localStorage.getItem('basket'));
      console.log('localStorage.getItem: ', JSON.parse(localStorage.getItem('basket')));
      console.log('this.basketSaved.cakeName: ', this.basketSaved.cakeName);
      console.log('this.basketSaved.cakeAmount: ', this.basketSaved.cakeAmount);
      */
      let currentState = JSON.parse(localStorage.getItem('basket'));
      this.basketSaved = currentState;
      /*this.$store.state = JSON.parse(currentState);*/
      console.log('currentState: ', currentState);
      /*console.log('this.basketSaved: ', this.basketSaved);*/
      /*
        console.log('this.$store.state.cake_1: ', this.$store.state.cake_1);
        console.log('this.$store.state.cake_2: ', this.$store.state.cake_2);
        console.log('this.$store.state.cake_3: ', this.$store.state.cake_3);
        console.log('this.$store.state.cake_4: ', this.$store.state.cake_4);
        console.log('this.$store.state.cake_5: ', this.$store.state.cake_5);
        console.log('this.$store.state.cake_6: ', this.$store.state.cake_6);
        console.log('this.$store.state.cake_7: ', this.$store.state.cake_7);
        console.log('this.$store.state.cake_8: ', this.$store.state.cake_8);
        console.log('this.$store.state.mini_cake_1: ', this.$store.state.mini_cake_1);
        console.log('this.$store.state.mini_cake_2: ', this.$store.state.mini_cake_2);
        console.log('this.$store.state.mini_cake_3: ', this.$store.state.mini_cake_3);
        console.log('this.$store.state.mini_cake_4: ', this.$store.state.mini_cake_4);
        console.log('this.$store.state.mini_cake_5: ', this.$store.state.mini_cake_5);
        console.log('this.$store.state.mini_cake_6: ', this.$store.state.mini_cake_6);
        console.log('this.$store.state.mini_cake_7: ', this.$store.state.mini_cake_7);
        console.log('this.$store.state.mini_cake_8: ', this.$store.state.mini_cake_8);
        */
    },
    methods: {
      goBack() {
        localStorage.setItem('basket', JSON.stringify(this.basketSaved));
        window.location.href = "index.html";
      }
    },
    template: `
  <div>
    <p>Hi!!!</p>
    <button @click="goBack" class="basket-link">Back</button>
  </div>
  <!--
    <ul class="basket-list">
      <li v-for="item in basketSaved" :key="item.cakeName">
        {{ item.cakeName }} - {{ item.cakeAmount}}
      </li>
    </ul>
    -->
  `,
  });
});