<template>
  <div class="tabs">
    <button
      class="tab"
      v-for="(tab, index) in tabs" :key="index"
      :class="{ 'active': localTabState === getTabRoute(tab.route) }"
      :to="tab.route" @click="setTab(tab.route)"
    >
      {{tab.name}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      default: [
        {
          name: 'First Tab',
          route: 'tab1'
        },
        {
          name: 'Second Tab',
          route: 'tab2'
        },
        {
          name: 'Third Tab',
          route: 'tab3'
        },
      ],
      type: Array
    },
    activeTab: {
      default: 'tab1',
      type: String
    }
  },
  data() {
    return {
      localTabState: this.activeTab ? this.activeTab : this.tabs[0].route
    }
  },
  methods: {
    getTabRoute(route) {
      // console.log(route);
      return route.replace(' ', '_').toLowerCase()
    },
    setTab(route) {
      console.log(route);
      this.localTabState = route
      this.$emit('clicked', route)
    }
  }
}
</script>
