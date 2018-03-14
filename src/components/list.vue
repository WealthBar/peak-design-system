<template>
  <div>
    <contextMenu :displayed="displayedData" :position="positionData" :orderBy="orderBy">
      <ul slot="content" class="menu-order">
        <li v-for="(order, index) in orderBy" @click="currentOrder = order, close(index)" :key="index" :class="{'active': isSelected === index}"><a>{{order.label}}</a></li>
      </ul>
    </contextMenu>
    <div class="list-container">
      <nav class="sort" v-if="orderBy.length > 0">
        <a @click="displayedData = !displayedData"><svgicon name="filter" alt="filter"/><span>Sort by {{currentOrder.label}}</span></a>
        <span class="results" v-if="visibleListItems.length >= 2">{{visibleListItems.length}} Results</span>
        <span class="results" v-if="visibleListItems.length < 2">{{visibleListItems.length}} Result</span>
      </nav>
      <header class="header-labels">
        <span>{{label}}</span>
        <span v-if="secondaryLabel">{{secondaryLabel}}</span>
      </header>
      <ul class="list">
        <slot name="listItem" v-for="item in visibleListItems" :value="item"/>
      </ul>
    </div>
  </div>
</template>

<script>
import '@/lib/icons/filter';
import contextMenu from './context_menu';

function sortAndFilter(completeList, { sortBy, asc = true, filter = () => true }) {
  const result = completeList.filter(filter);
  if (typeof sortBy === 'string') result.sort((y, x) => x[sortBy] < y[sortBy]);
  if (typeof sortBy === 'function') result.sort(sortBy);
  if (asc === false) result.reverse();
  return result;
}

export default {
  name: 'list',
  props: {
    orderBy: {
      type: Array,
      default: () => [],
    },
    defaultOrder: {
      type: Number,
      default: 0,
    },
    position: {
      type: String,
      default: 'bottom',
    },
    listItems: {
      type: Array,
      default: () => [],
    },
    label: String,
    secondaryLabel: String,
  },

  data() {
    return {
      currentOrder: this.orderBy[this.defaultOrder],
      displayedData: false,
      positionData: 'right',
      isSelected: -1,
    };
  },
  methods: {
    close(index) {
      this.isSelected = index;
      this.displayedData = false;
    },
  },

  computed: {
    visibleListItems() {
      if (this.currentOrder) return sortAndFilter(this.listItems, this.currentOrder);
      return this.listItems;
    },
  },
  components: { contextMenu },
};

</script>

<style lang="scss" scoped>
  @import 'style';

  .active {
    display: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .list-container {
    width: 75vw;
    padding: $spacing-tiny;
  }

  .sort {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px $grey2 solid;
    padding: 0 0 $spacing-small;

    @media #{$sw-large} {
      border-bottom: none;
      padding: 0 $spacing-small;
    }

    .results {
      color: $grey3;
    }
  }

  .sort > a > span {
    &::before {
      content: '';
      margin-left: $spacing-tiny;
    }
  }

  .header-labels {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px $grey2 solid;
    padding: $spacing-med $spacing-small;
  }

  .header-labels > span {
    color: $grey3;

    &:first-child {
      width: 20vw;
    }

    &:nth-child(2) {
      flex-grow: 2;
    }
  }

  .list > li > span {
    &:nth-child(even) {
      color: $grey3;
    }
  }

</style>
