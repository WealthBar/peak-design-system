<template>
  <div class="sub-page-navigation-component">
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index" class="tab"
        :class="{ 'active': localTabState === getTabRoute(tab.route) }"
        :to="tab.route" @click="setTab(tab.route)"
      >
        {{ tab.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
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
            route: 'tab2',
          },
        ];
      },
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
    getTabRoute(route) {
      return route.replace(' ', '_').toLowerCase();
    },
    setTab(route) {
      this.localTabState = route;
      this.$emit('clicked', route);
    },
  },
};
</script>

<style lang="scss" scoped>
  .sub-page-navigation-component {
    .tabs {
      border-bottom: 1px solid $neutral-100;
      font-weight: bold;
      margin-bottom: 2rem;
      display: flex;
      overflow-x: auto;

      .tab {
        text-decoration: none;
        color: $black;
        margin: 0 0.5rem;
        padding: 0.25rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid transparent;

        &:first-child { margin-left: 0.25rem; }
        &:last-child { margin-right: 0.25rem; }
        &:hover:not(.active) { color: $primary-300; }
        &.active { border-bottom: 2px solid $primary-300; }
      }
    }
  }
</style>
