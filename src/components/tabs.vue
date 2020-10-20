<template>
  <div class="tabs">
    <nav role="tablist" aria-label="Tab List">
      <button
        class="tab"
        v-for="(tab, index) in tabs" :key="index"
        :aria-selected="isActive(tab.route) ? 'true': 'false'"
        :aria-controls="`panel-${tab.route}`"
        :tabindex="isActive(tab.route) ? 0 : -1"
        :ref="tab.route"
        :id="`tab-${tab.route}`"
        @keyup.up="tabSwitchPrev(index)"
        @keyup.left="tabSwitchPrev(index)"
        @keyup.down="tabSwitchNext(index)"
        @keyup.right="tabSwitchNext(index)"
        @click="setTab(tab.route)"
      >
        {{ tab.name }}
      </button>
    </nav>
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :id="`panel-${tab.route}`"
      role="tabpanel"
      tabindex="0"
      :aria-labelledby="`tab-${tab.route}`"
      :hidden="!isActive(tab.route)"
    >
      <slot :name="tab.route"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      default() {
        return [];
      },
      type: Array,
    },
    activeTab: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      localTabState: this.activeTab ? this.activeTab : this.tabs[0].route,
    };
  },
  created() {
    const startTab = this.$route.query.tab ? this.tabs.find(tab => tab.route === this.$route.query.tab) : this.tabs[0];
    this.setTab(startTab.route);
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
      this.$router.replace({ query: { tab: route } });
      this.$emit('clicked', route);
    },
    tabSwitch(index) {
      this.setTab(this.tabs[index].route);
      this.isActive(this.tabs[index].route);
      this.$refs[this.tabs[index].route][0].focus();
    },
    tabSwitchNext(index) {
      if (index >= this.tabs.length - 1) {
        this.tabSwitch(0);
      } else {
        this.tabSwitch(index + 1);
      }
    },
    tabSwitchPrev(index) {
      if (index <= 0) {
        this.tabSwitch(this.tabs.length - 1);
      } else {
        this.tabSwitch(index - 1);
      }
    },
  },
};
</script>
