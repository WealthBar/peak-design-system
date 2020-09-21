<template>
  <div class="tabs" role="tablist" aria-label="Tab List">
    <button
      class="tab"
      v-for="(tab, index) in tabs" :key="index"
      :aria-selected="isActive(tab.route) ? 'true': 'false'"
      :tabindex="isActive(tab.route) ? 0 : -1"
      :ref="tab.route"
      :to="tab.route"
      :id="'tab-' + tab.route"
      @keyup.right="tabSwitchNext(index)"
      @keyup.left="tabSwitchPrev(index)"
      @click="setTab(tab.route)"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      default() {
        return [
          {
            name: 'First Tab',
            route: 'tab1',
          },
          {
            name: 'Second Tab',
            route: 'tab2',
          },
          {
            name: 'Third Tab',
            route: 'tab3',
          },
        ];
      },
      type: Array,
    },
    activeTab: {
      default: 'tab1',
      type: String,
    },
  },
  data() {
    return {
      localTabState: this.activeTab ? this.activeTab : this.tabs[0].route,
    };
  },
  methods: {
    isActive(route) {
      return this.localTabState === this.getTabRoute(route);
    },
    getTabRoute(route) {
      return route.replace(' ', '_').toLowerCase();
    },
    setTab(route) {
      this.localTabState = route;
      this.$emit('clicked', route);
    },
    tabSwitch(index) {
      this.setTab(this.tabs[index].route);
      this.isActive(this.tabs[index].route);
      this.$refs[this.tabs[index].route][0].focus();
    },
    tabSwitchNext(index) {
      if (index >= this.tabs.length - 1) {
        this.tabSwitch(0)
      } else {
        this.tabSwitch(index + 1)
      }
    },
    tabSwitchPrev(index) {
      if (index <= 0) {
        this.tabSwitch(this.tabs.length - 1)
      } else {
        this.tabSwitch(index - 1)
      }
    },
  },
};
</script>
