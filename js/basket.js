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
  increment_item(state, { cakeName }) {
    if (cakeName === "cake_1") state.cake_1++;
    else if (cakeName === "cake_2") state.cake_2++;
    else if (cakeName === "cake_3") state.cake_3++;
    else if (cakeName === "cake_4") state.cake_4++;
    else if (cakeName === "cake_5") state.cake_5++;
    else if (cakeName === "cake_6") state.cake_6++;
    else if (cakeName === "cake_7") state.cake_7++;
    else if (cakeName === "cake_8") state.cake_8++;
    else if (cakeName === "mini_cake_1") state.mini_cake_1++;
    else if (cakeName === "mini_cake_2") state.mini_cake_2++;
    else if (cakeName === "mini_cake_3") state.mini_cake_3++;
    else if (cakeName === "mini_cake_4") state.mini_cake_4++;
    else if (cakeName === "mini_cake_5") state.mini_cake_5++;
    else if (cakeName === "mini_cake_6") state.mini_cake_6++;
    else if (cakeName === "mini_cake_7") state.mini_cake_7++;
    else if (cakeName === "mini_cake_8") state.mini_cake_8++;
  },
};
const store = new Vuex.Store({ state, getters, mutations });

new Vue({
  'el': "#basket",
  'store': store,
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  template: `
    <div class="menu-basket">
      <svg class="menu-btn-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
      <span class="menu-basket-count"><sup>{{ count }}</sup></span>
    </div>
  `,
});

new Vue({
  'el': "#cake-1",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-1");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#cake-2",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-2");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#cake-3",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-3");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#cake-4",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-4");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#cake-5",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-5");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#cake-6",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-6");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#cake-7",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-7");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#cake-8",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "cake-8");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-1",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-1");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-2",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-2");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-3",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-3");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-4",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-4");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-5",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-5");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-6",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-6");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-7",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-7");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
new Vue({
  'el': "#bakery-8",
  'store': store,
  'methods': {
    'addItems': function () {
      this.$store.commit('increment_item', "bakery-8");
      this.$store.commit('increment');
    }
  },
  template: `
    <button class="bakery-card-basket" @click="addItems">
      <svg class="bakery-card-icon">
        <use xlink:href="img/icons.svg#shopping-cart"></use>
      </svg>
    </button>
  `,
});
