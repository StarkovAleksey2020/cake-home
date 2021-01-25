$(document).ready(function () {

  const state = {
    cake: [
      { code: "cake_1", name: "«Торжество»", amount: 0, price: 1400.00 },
      { code: "cake_2", name: "«Одиссей»", amount: 0, price: 1200.00 },
      { code: "cake_3", name: "«Восторг»", amount: 0, price: 1000.00 },
      { code: "cake_4", name: "«Юбиляр»", amount: 0, price: 1000.00 },
      { code: "cake_5", name: "«Ассорти»", amount: 0, price: 1300.00 },
      { code: "cake_6", name: "«Хоровод»", amount: 0, price: 1300.00 },
      { code: "cake_7", name: "«Карьер»", amount: 0, price: 1300.00 },
      { code: "cake_8", name: "«Бармалей»", amount: 0, price: 1300.00 },
      { code: "mini_cake_1", name: "«Утро»", amount: 0, price: 80.00 },
      { code: "mini_cake_2", name: "«Титаник»", amount: 0, price: 80.00 },
      { code: "mini_cake_3", name: "«Нуар»", amount: 0, price: 90.00 },
      { code: "mini_cake_4", name: "«Блик»", amount: 0, price: 70.00 },
      { code: "mini_cake_5", name: "«Взлет»", amount: 0, price: 90.00 },
      { code: "mini_cake_6", name: "«Коралл»", amount: 0, price: 100.00 },
      { code: "mini_cake_7", name: "«Доффин»", amount: 0, price: 90.00 },
      { code: "mini_cake_8", name: "«Блюз»", amount: 0, price: 90.00 },
    ],
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
    count: 0,
  };
  const getters = { count: state => state.count };
  const mutations = {
    increment(state) {
      state.count++
    },
  increment_item(state, { name }) {
    if (name === "cake-1") { let cakeItem = state.cake.find(x => x.code === 'cake_1'); cakeItem.amount++; }
    else if (name === "cake-2") { let cakeItem = state.cake.find(x => x.code === 'cake_2'); cakeItem.amount++;}
    else if (name === "cake-3") { let cakeItem = state.cake.find(x => x.code === 'cake_3'); cakeItem.amount++; }
    else if (name === "cake-4") { let cakeItem = state.cake.find(x => x.code === 'cake_4'); cakeItem.amount++; }
    else if (name === "cake-5") { let cakeItem = state.cake.find(x => x.code === 'cake_5'); cakeItem.amount++; }
    else if (name === "cake-6") { let cakeItem = state.cake.find(x => x.code === 'cake_6'); cakeItem.amount++; }
    else if (name === "cake-7") { let cakeItem = state.cake.find(x => x.code === 'cake_7'); cakeItem.amount++; }
    else if (name === "cake-8") { let cakeItem = state.cake.find(x => x.code === 'cake_8'); cakeItem.amount++; }
    else if (name === "bakery-1") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_1'); cakeItem.amount++; }
    else if (name === "bakery-2") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_2'); cakeItem.amount++; }
    else if (name === "bakery-3") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_3'); cakeItem.amount++; }
    else if (name === "bakery-4") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_4'); cakeItem.amount++; }
    else if (name === "bakery-5") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_5'); cakeItem.amount++; }
    else if (name === "bakery-6") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_6'); cakeItem.amount++; }
    else if (name === "bakery-7") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_7'); cakeItem.amount++; }
    else if (name === "bakery-8") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_8'); cakeItem.amount++; }
  },
  restore_state(state, { name, count }) {
    if (name === "cake-1") { let cakeItem = state.cake.find(x => x.code === 'cake_1'); cakeItem.amount = count; state.count += count; }
    else if (name === "cake-2") { let cakeItem = state.cake.find(x => x.code === 'cake_2'); cakeItem.amount = count; state.count += count;}
    else if (name === "cake-3") { let cakeItem = state.cake.find(x => x.code === 'cake_3'); cakeItem.amount = count; state.count += count;}
    else if (name === "cake-4") { let cakeItem = state.cake.find(x => x.code === 'cake_4'); cakeItem.amount = count; state.count += count;}
    else if (name === "cake-5") { let cakeItem = state.cake.find(x => x.code === 'cake_5'); cakeItem.amount = count; state.count += count;}
    else if (name === "cake-6") { let cakeItem = state.cake.find(x => x.code === 'cake_6'); cakeItem.amount = count; state.count += count;}
    else if (name === "cake-7") { let cakeItem = state.cake.find(x => x.code === 'cake_7'); cakeItem.amount = count; state.count += count;}
    else if (name === "cake-8") { let cakeItem = state.cake.find(x => x.code === 'cake_8'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-1") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_1'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-2") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_2'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-3") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_3'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-4") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_4'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-5") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_5'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-6") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_6'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-7") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_7'); cakeItem.amount = count; state.count += count;}
    else if (name === "bakery-8") { let cakeItem = state.cake.find(x => x.code === 'mini_cake_8'); cakeItem.amount = count; state.count += count;}
  },

  };
  const store = new Vuex.Store({ state, getters, mutations });

  new Vue({
    'el': "#basket-modal-info",
    'store': store,
    data() {
      return {
        basketSaved: {},
        cakes: [
        { code: 'cake-1', name: "«Торжество»" },
        { code: 'cake-2', name: "«Одиссей»" },
        { code: 'cake-3', name: "«Восторг»" },
        { code: 'cake-4', name: "«Юбиляр»" },
        { code: 'cake-5', name: "«Ассорти»" },
        { code: 'cake-6', name: "«Хоровод»" },
        { code: 'cake-7', name: "«Карьер»" },
        { code: 'cake-8', name: "«Бармалей»" },
        { code: 'mini_cake-1', name: "«Утро»" },
        { code: 'mini_cake-2', name: "«Титаник»" },
        { code: 'mini_cake-3', name: "«Нуар»" },
        { code: 'mini_cake-4', name: "«Блик»" },
        { code: 'mini_cake-5', name: "«Взлет»" },
        { code: 'mini_cake-6', name: "«Коралл»" },
        { code: 'mini_cake-7', name: "«Доффин»" },
        { code: 'mini_cake-8', name: "«Блюз»" },
        { code: 'count', name: "Итого:" },
      ],

      }
    },
    created() {
      let currentState = JSON.parse(localStorage.getItem('basket'));
      console.log('currentState: ', currentState);
      /*this.basketSaved = currentState;*/
      if (!jQuery.isEmptyObject(currentState)) {
        currentState.forEach(function (arrayItem) {
        console.log('In basket: ',arrayItem.code, arrayItem.name, arrayItem.amount);
      });
        if (currentState.cake_1 > 0) { this.$store.commit('restore_state', { name: "cake-1", count: currentState.cake_1 }); }
        if (currentState.cake_2 > 0) { this.$store.commit('restore_state', { name: "cake-2", count: currentState.cake_2 }); }
        if (currentState.cake_3 > 0) { this.$store.commit('restore_state', { name: "cake-3", count: currentState.cake_3 }); }
        if (currentState.cake_4 > 0) { this.$store.commit('restore_state', { name: "cake-4", count: currentState.cake_4 }); }
        if (currentState.cake_5 > 0) { this.$store.commit('restore_state', { name: "cake-5", count: currentState.cake_5 }); }
        if (currentState.cake_6 > 0) { this.$store.commit('restore_state', { name: "cake-6", count: currentState.cake_6 }); }
        if (currentState.cake_7 > 0) { this.$store.commit('restore_state', { name: "cake-7", count: currentState.cake_7 }); }
        if (currentState.cake_8 > 0) { this.$store.commit('restore_state', { name: "cake-8", count: currentState.cake_8}); }
        if (currentState.mini_cake_1 > 0) { this.$store.commit('restore_state', { name: "bakery-1", count: currentState.mini_cake_1 }); }
        if (currentState.mini_cake_2 > 0) { this.$store.commit('restore_state', { name: "bakery-2", count: currentState.mini_cake_2 }); }
        if (currentState.mini_cake_3 > 0) { this.$store.commit('restore_state', { name: "bakery-3", count: currentState.mini_cake_3 }); }
        if (currentState.mini_cake_4 > 0) { this.$store.commit('restore_state', { name: "bakery-4", count: currentState.mini_cake_4 }); }
        if (currentState.mini_cake_5 > 0) { this.$store.commit('restore_state', { name: "bakery-5", count: currentState.mini_cake_5 }); }
        if (currentState.mini_cake_6 > 0) { this.$store.commit('restore_state', { name: "bakery-6", count: currentState.mini_cake_6 }); }
        if (currentState.mini_cake_7 > 0) { this.$store.commit('restore_state', { name: "bakery-7", count: currentState.mini_cake_7 }); }
        if (currentState.mini_cake_8 > 0) { this.$store.commit('restore_state', { name: "bakery-8", count: currentState.mini_cake_8 }); }
      }
      /*
      this.$store.state.cake.forEach(function (arrayItem) {
        console.log('In basket: ',arrayItem.code, arrayItem.name, arrayItem.amount);
      });
      */

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
      console.log(this.$store.state);
    },
    methods: {
      goBack() {
        localStorage.setItem('basket', JSON.stringify(this.$store.state));
        window.location.href = "index.html";
      }
    },
    template: `
  <div>
    <section class="basket">
      <div class="basket-wrapper">
        <span class="basket-title">Корзина</span>
        <br />
        <!--{{ $store.state }}-->
        <ul v-for="item in $store.state.cake" :key="item.code">
          <li>{{ item.name }}{{ item.amount }}</li>
        </ul>
<!--
        <span class="basket-subtitle">Торты</span><br />
        <span class="basket-divider">-----------------------------------------</span><br />
        
        <div class="basket-item" v-if="$store.state.cake_1 > 0">
          <span class="basket-item-name">«Торжество»</span>
          <span class="basket-item-amount">{{ $store.state.cake_1 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.cake_2 > 0">
          <span class="basket-item-name">«Одиссей»</span>
          <span class="basket-item-amount">{{ $store.state.cake_2 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.cake_3 > 0">
          <span class="basket-item-name">«Восторг»</span>
          <span class="basket-item-amount">{{ $store.state.cake_3 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.cake_4 > 0">
          <span class="basket-item-name">«Юбиляр»</span>
          <span class="basket-item-amount">{{ $store.state.cake_4 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.cake_5 > 0">
          <span class="basket-item-name">«Ассорти»</span>
          <span class="basket-item-amount">{{ $store.state.cake_5 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.cake_6 > 0">
          <span class="basket-item-name">«Хоровод»</span>
          <span class="basket-item-amount">{{ $store.state.cake_6 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.cake_7 > 0">
          <span class="basket-item-name">«Карьер»</span>
          <span class="basket-item-amount">{{ $store.state.cake_7 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.cake_8 > 0">
          <span class="basket-item-name">«Бармалей»</span>
          <span class="basket-item-amount">{{ $store.state.cake_8 }}</span>
        </div>

        <span class="basket-divider">-----------------------------------------</span>
        <br />
        <span class="basket-subtitle">Пирожные</span><br />
        <span class="basket-divider">-----------------------------------------</span>
        <div class="basket-item" v-if="$store.state.mini_cake_1 > 0">
          <span class="basket-item-name">«Утро»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_1 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.mini_cake_2 > 0">
          <span class="basket-item-name">«Титаник»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_2 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.mini_cake_3 > 0">
          <span class="basket-item-name">«Нуар»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_3 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.mini_cake_4 > 0">
          <span class="basket-item-name">«Блик»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_4 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.mini_cake_5 > 0">
          <span class="basket-item-name">«Взлет»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_5 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.mini_cake_6 > 0">
          <span class="basket-item-name">«Коралл»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_6 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.mini_cake_7 > 0">
          <span class="basket-item-name">«Доффин»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_7 }}</span>
        </div>

        <div class="basket-item" v-if="$store.state.mini_cake_8 > 0">
          <span class="basket-item-name">«Блюз»</span>
          <span class="basket-item-amount">{{ $store.state.mini_cake_8 }}</span>
        </div>

        -->
        <span class="basket-divider">-----------------------------------------</span><br /><br />
        <button @click="goBack" class="basket-button-back">Вернуться</button>
      </div>
    </section>
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