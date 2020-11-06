<template>
  <div>
    <nav role="tablist" aria-label="Tab List">
      <button
        class="tab"
        v-for="(tab, index) in tabs" :key="index"
        :aria-selected="isActive(tab.id) ? 'true': 'false'"
        :aria-controls="`panel-${tab.id}`"
        :tabindex="isActive(tab.id) ? 0 : -1"
        :ref="tab.id"
        :id="`tab-${tab.id}`"
        :disabled="tab.disabled"
        @keyup.up="switchPrevTab(index)"
        @keyup.left="switchPrevTab(index)"
        @keyup.down="switchNextTab(index)"
        @keyup.right="switchNextTab(index)"
        @click="setTab(tab)"
      >
        {{ tab.name }}
      </button>
    </nav>
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :id="`panel-${tab.id}`"
      role="tabpanel"
      tabindex="0"
      :aria-labelledby="`tab-${tab.id}`"
      :hidden="!isActive(tab.id)"
    >
      <slot :name="tab.id"></slot>
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
  },
  data() {
    return {
      localTabState: null,
      enabledTabs: this.tabs.filter(tab => !tab.disabled),
    };
  },
  created() {
    let startTab = this.tabs[0];

    // If routed to a tab, we validate and set it
    if (this.$route.query.tab) {
      startTab = this.tabs.find(tab => tab.id === this.$route.query.tab) || this.tabs[0];
    }

    // check if it's disabled, if so we take the first non-disabled tab
    if (startTab.disabled) {
      startTab = this.tabs.find(tab => !tab.disabled);
    }
    this.setTab(startTab);
  },
  methods: {
    isActive(id) {
      return this.localTabState === id;
    },
    setTab(tab) {
      this.localTabState = tab.id;
      this.$emit('change', tab);
    },
    switchTab(index) {
      this.setTab(this.tabs[index]);
      this.$refs[this.tabs[index].id][0].focus();
    },
    switchNextTab(index) {
      const currentEnabledTabIndex = this.enabledTabs.findIndex(tab => tab === this.tabs[index]);
      let nextTabIndex = 0;
      if (currentEnabledTabIndex >= this.enabledTabs.length - 1) {
        nextTabIndex = this.tabs.findIndex(tab => tab === this.enabledTabs[0]);
      } else {
        nextTabIndex = this.tabs.findIndex(tab => tab === this.enabledTabs[currentEnabledTabIndex + 1]);
      }
      this.switchTab(nextTabIndex);
    },
    switchPrevTab(index) {
      const currentEnabledTabIndex = this.enabledTabs.findIndex(tab => tab === this.tabs[index]);
      let prevTabIndex = 0;
      if (currentEnabledTabIndex <= 0) {
        prevTabIndex = this.tabs.findIndex(tab => tab === this.enabledTabs[this.enabledTabs.length - 1]);
      } else {
        prevTabIndex = this.tabs.findIndex(tab => tab === this.enabledTabs[currentEnabledTabIndex - 1]);
      }
      this.switchTab(prevTabIndex);
    },
  },
};
</script>
