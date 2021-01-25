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
    total: 0
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
  restore_state(state, { code, amount, price }) {
    let cakeItem = state.cake.find(x => x.code === code);
    cakeItem.amount = amount;
    state.count += amount;
    state.total += Number(amount) * price;
    console.log('price: ', price);
    console.log('amount: ', amount);
    console.log('state.total: ', state.total);
  },

  };
  const store = new Vuex.Store({ state, getters, mutations });

  new Vue({
    'el': "#basket-modal-info",
    'store': store,
    data() {
      return {
        basketSaved: {},
        totalCost: 0,
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
      this.basketSaved = JSON.parse(localStorage.getItem('basket'));
      this.basketSaved.forEach((arrayItem) => {
        this.$store.commit('restore_state', { code: arrayItem.code, amount: arrayItem.amount, price: arrayItem.price });
      });
      this.totalCost = this.$store.total;
      console.log(this.$store.total);
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
        <span class="basket-divider">----------------------------------------------</span><br />
        <div v-for="item in basketSaved" :key="item.code">
          <div class="basket-item" v-if="item.amount > 0">
            <span class="basket-item-name">{{ item.name }}</span>
            <span class="basket-item-amount">{{ item.amount }}</span>
          </div>
        </div>
        <span class="basket-divider">----------------------------------------------</span><br />
        <div class="basket-item">
          <span class="basket-item-name">Итого:</span>
          <span class="basket-item-amount">{{$store.state.total}}.00 руб.</span><br />
        </div>
        <span class="basket-divider basket-divider-total">----------------------------------------------</span><br />
        <button @click="goBack" class="basket-button-back">Вернуться</button>
      </div>
    </section>
  </div>
  `,
  });
});