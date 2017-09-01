<template>
  <div>
    <h2>{{title}}</h2>

    <list :orderBy="orderBy" :listItems="listItemsData" :label="label" :secondaryLabel="secondaryLabel">
      <template slot="listItem" scope="props" >
        <li><span>{{props.value.name}}</span><span>{{props.value.assets}}</span></li>
      </template>
    </list>
  </div>
</template>

<script>
import { list } from '@/components';

function isPending(item) {
  return item.pending === true;
}

export default {
  head: {
    title: 'List Component',
  },

  data() {
    return {
      title: 'List Component',
      label: 'Label 1',
      secondaryLabel: 'Label 2',
      orderBy: [
        { label: 'Name (A-Z)', sortBy: 'name', asc: true },
        { label: 'Name (Z-A)', sortBy: 'name', asc: false },
        { label: 'Highest Assets', sortBy: 'assets', asc: false },
        { label: 'Lowest Assets', sortBy: 'assets', asc: true },
        { label: 'Pending Clients (recent)', sortBy: 'date', asc: false, filter: isPending },
        { label: 'Pending Clients (oldest)', sortBy: 'date', asc: true, filter: isPending },
      ],
      listItemsData: [
        {
          name: 'dave',
          assets: 4,
          date: 2016,
          pending: true,
        },
        {
          name: 'sloane',
          assets: 43,
          date: 2015,
          pending: false,
        },
        {
          name: 'aubrey',
          assets: 14,
          date: 2013,
          pending: false,
        },
        {
          name: 'hope',
          assets: 400,
          date: 2010,
          pending: false,
        },
        {
          name: 'carl',
          assets: 450,
          date: 2009,
          pending: false,
        },
        {
          name: 'sue',
          assets: 234,
          date: 2000,
          pending: false,
        },
        {
          name: 'ivan',
          assets: 564,
          date: 2017,
          pending: false,
        },
        {
          name: 'ashleigh',
          assets: 41,
          date: 2015,
          pending: false,
        },
        {
          name: 'stacey',
          assets: 1,
          date: 2016,
          pending: false,
        },
        {
          name: 'clark',
          assets: 409,
          date: 2012,
          pending: false,
        },
      ],
    };
  },
  components: { list },
};

</script>

<style lang="scss" scoped>
  @import 'style';

  ul.list {
    display: flex;
    flex-flow: column wrap;
  }

  .list > li {
    justify-content: space-between;
  }

  .list > li > span {
    &:first-child {
      width: 20vw;
    }

    &:nth-child(2) {
      flex-grow: 2;
    }
  }

  .header-label {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    color: $grey3;
    border-bottom: 1px solid $grey2;
  }

  .header-label > li {
    border-bottom: none;

    &:first-child {
      flex-grow: 1;
      width: 15%;
    }

    &:nth-child(2) {
      flex-grow: 2;
    }
  }

</style>
