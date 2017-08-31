import { mount, shallow } from 'avoriaz';
import test from 'tape';
import list from './list';

test('views/ list renders on page load', (t) => {
  const wrapper = mount(list);
  const element = wrapper.find('.list');
  t.equal(element.length, 1, 'list should be displayed');
  t.end();
});

test('views/ list renders a list item', (t) => {
  const wrapper = shallow(list, {
    propsData: { listItems: [{}] },
  });
  const visibleItems = wrapper.vm.visibleListItems;
  t.equal(visibleItems.length, 1, 'renders expected number items in list');
  t.end();
});

test('views/ filters list', (t) => {
  const sort = client => client.pending === true;
  const orderBy = [{ label: 'Name (A-Z)', asc: true, filter: sort }];
  const listItemsData = [
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
      name: 'jj',
      assets: 43,
      date: 2015,
      pending: true,
    }];

  const wrapper = shallow(list, {
    propsData: { orderBy, listItems: listItemsData },
  });
  const visibleItems = wrapper.vm.visibleListItems;
  t.equal(visibleItems.length, 2, 'displays filtered list');
  t.end();
});

// test that list does not display a filtered list
test('views/ does not filter list', (t) => {
  const sort = client => client.pending === true;
  const orderBy = [{ label: 'Name (A-Z)', asc: true, filter: sort }];
  const listItemsData = [
    {
      name: 'dave',
      assets: 4,
      date: 2016,
      pending: false,
    },
    {
      name: 'sloane',
      assets: 43,
      date: 2015,
      pending: false,
    }];
  const wrapper = shallow(list, {
    propsData: { orderBy, listItems: listItemsData },
  });
  const visibleItems = wrapper.vm.visibleListItems;
  t.equal(visibleItems.length, 0, 'does not display a list');
  t.end();
});

test('close method called', (t) => {
  const index = 1;
  const wrapper = shallow(list);
  wrapper.vm.close(index);
  t.equal(wrapper.vm.isSelected, 1, 'properties isSelected and displayed data is correct');
  t.equal(wrapper.vm.displayedData, false, 'displayed data is set to true');
  t.end();
});

test('views/ sort by string', (t) => {
  const pending = () => true;
  const asc = false;
  const sortBy = 'name';
  const orderBy = [{ label: 'Name (A-Z)', sortBy, asc, filter: pending }];
  const sampleList = [
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
      pending: true,
    }];
  const wrapper = mount(list, {
    propsData: { orderBy, listItems: sampleList },
  });
  t.assert(wrapper.vm.orderBy, 'sort by string and asc works');
  t.end();
});

test('views/ sort by a function', (t) => {
  const pending = () => true;
  const asc = false;
  const sortBy = () => true;
  const orderBy = [{ label: 'Name (A-Z)', sortBy, asc, filter: pending }];
  const sampleList = [
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
      pending: true,
    }];
  const wrapper = mount(list, {
    propsData: { orderBy, listItems: sampleList },
  });
  t.assert(wrapper.vm.orderBy, 'sort by function');
  t.end();
});

test('filter function returns true', (t) => {
  const sortBy = 'name';
  const orderBy = [{ label: 'Name (A-Z)', sortBy }];
  const sampleList = [
    {
      name: 'dave',
      assets: 4,
      date: 2016,
      filter: true,
    },
    {
      name: 'sloane',
      assets: 43,
      date: 2015,
      filter: false,
    }];
  const wrapper = mount(list, {
    propsData: { orderBy, listItems: sampleList },
  });
  t.assert(wrapper.vm, true, 'filter statement');
  t.end();
});
