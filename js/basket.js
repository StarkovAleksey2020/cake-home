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
    if (name === "cake-1") { state.cake_1++; }
    else if (name === "cake-2") { state.cake_2++;}
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
  'el': "#basket",
  'store': store,
  data() {
    return {
      basket: {},
      cakes: [
        { code: 'cake-1', name: "«Торжество»" },
        { code: 'cake-2', name: "«Одиссей»" },
        { code: 'cake-3', name: "«Восторг»" },
        { code: 'cake-4', name: "«Юбиляр»" },
        { code: 'cake-5', name: "«Ассорти»" },
        { code: 'cake-6', name: "«Хоровод»" },
        { code: 'cake-7', name: "«Карьер»" },
        { code: 'cake-8', name: "«Бармалей»" },
      ],
      baking: [
        { code: 'bakery-1', name: "«Утро»" },
        { code: 'bakery-2', name: "«Титаник»" },
        { code: 'bakery-3', name: "«Нуар»" },
        { code: 'bakery-4', name: "«Блик»" },
        { code: 'bakery-5', name: "«Взлет»" },
        { code: 'bakery-6', name: "«Коралл»" },
        { code: 'bakery-7', name: "«Доффин»" },
        { code: 'bakery-8', name: "«Блюз»" },
      ],
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    onClick() {
      if (this.$store.state.cake_1 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-1').name;
        let cakeAmount = this.$store.state.cake_1;
        this.basket = Object.assign(this.basket, { cakeName, cakeAmount })
      };
      if (this.$store.state.cake_2 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-2').name;
        let cakeAmount = this.$store.state.cake_2;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.cake_3 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-3').name;
        let cakeAmount = this.$store.state.cake_3;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.cake_4 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-4').name;
        let cakeAmount = this.$store.state.cake_4;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.cake_5 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-5').name;
        let cakeAmount = this.$store.state.cake_5;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.cake_6 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-6').name;
        let cakeAmount = this.$store.state.cake_6;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.cake_7 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-7').name;
        let cakeAmount = this.$store.state.cake_7;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.cake_8 > 0) {
        let cakeName = this.cakes.find(cake => cake.code === 'cake-8').name;
        let cakeAmount = this.$store.state.cake_8;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_1 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-1').name;
        let cakeAmount = this.$store.state.mini_cake_1;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_2 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-2').name;
        let cakeAmount = this.$store.state.mini_cake_2;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_3 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-3').name;
        let cakeAmount = this.$store.state.mini_cake_3;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_4 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-4').name;
        let cakeAmount = this.$store.state.mini_cake_4;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_5 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-5').name;
        let cakeAmount = this.$store.state.mini_cake_5;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_6 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-6').name;
        let cakeAmount = this.$store.state.mini_cake_6;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_7 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-7').name;
        let cakeAmount = this.$store.state.mini_cake_7;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      if (this.$store.state.mini_cake_8 > 0) {
        let cakeName = this.baking.find(bakery => bakery.code === 'bakery-8').name;
        let cakeAmount = this.$store.state.mini_cake_8;
        this.basket = Object.assign(this.basket, {cakeName, cakeAmount})
      };
      localStorage.removeItem('basket');
      console.log('basket: ', this.basket);
      localStorage.setItem('basket', JSON.stringify(this.basket));
      window.location.href = "basket.html";
    }
  },
  template: `
    <div class="menu-basket" @click='onClick' data-toggle="modal-basket">
      <svg class="menu-btn-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
      <span class="menu-basket-count"><sup>{{ count }}</sup></span>
    </div>
  `,
});

$(document).ready(function () {
  // Модальное окно со слайдером с корзиной
  var modalBasketButton = $('[data-toggle=modal-basket]');
  var closeModalButton = $(".menu-close-basket");
  var modalOverlay = $(".modal-basket__overlay");

  modalBasketButton.on('click', openModalBasket);
  closeModalButton.on('click', closeModalBasket);
  modalOverlay.on('click', closeModalBasket);

  function openModalBasket() {
    var modalOverlay = $(".modal-basket__overlay");
    var modalDialog = $(".modal-basket__dialog");
    var closeModalButton = $(".menu-close-basket");
    closeModalButton.addClass("menu-close-basket--visible");
    modalOverlay.addClass("modal-basket__overlay--visible");
    modalDialog.addClass("modal-basket__dialog--visible");
  }
  function closeModalBasket(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-basket__overlay");
    var modalDialog = $(".modal-basket__dialog");
    var closeModalButton = $(".menu-close-basket");
    closeModalButton.removeClass("menu-close-basket--visible");
    modalOverlay.removeClass("modal-basket__overlay--visible");
    modalDialog.removeClass("modal-basket__dialog--visible");
  }
  // обработка нажатия ESC
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModalBasket(e);
    }
  });
});
new Vue({
  'el': "#cake-1",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-1"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
    `,
});
new Vue({
  'el': "#cake-2",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-2"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#cake-3",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-3"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#cake-4",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-4"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#cake-5",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-5"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#cake-6",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-6"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#cake-7",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-7"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#cake-8",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "cake-8"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-1",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-1"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-2",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-2"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-3",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-3"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-4",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-4"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-5",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-5"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-6",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-6"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-7",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-7"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#bakery-8",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', { name: "bakery-8"});
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="cake-button-contract" @click="addItems">В корзину</button>
  `,
});
new Vue({
  'el': "#basket-modal-info",
  'store': store,
  data() {
    return {
      basketSaved: {},
    }
  },
  created() {
    this.basketSaved = JSON.parse(localStorage.getItem('basket'));
    console.log('this.basketSaved: ', this.basketSaved);
  },
  methods: {
    clearStorage() {
      this.basketSaved = '';
      localStorage.removeItem('basket')
    }
  },
  template: `
    <ul class="basket-list">
      <li v-for="item in basketSaved" :key="item.name">
        {{ item.name }} - {{ item.amount}}
      </li>
    </ul>
  `,
});