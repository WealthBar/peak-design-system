import test from 'tape';
import Wrapper from './wrapper';

test('The wrapper should store the service', (t) => {
  const service = {};
  const wrapper = new Wrapper(service);
  t.equal(wrapper.service, service, 'The service is the expected one');
  t.end();
});

test('The wrapper should return the service', (t) => {
  const service = {};
  const wrapper = new Wrapper(service);
  t.equal(wrapper.get(), service, 'The service is the expected one');
  t.end();
});

test('Overriding the service should override it', (t) => {
  const service1 = {};
  const service2 = {};
  const wrapper = new Wrapper(service1);
  wrapper.override(service2);
  t.equal(wrapper.get(), service2, 'The service is the expected one');
  t.end();
});
