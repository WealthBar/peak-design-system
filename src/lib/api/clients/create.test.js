import test from 'tape';
import create from './create';

test('lib/api/clients/create', async (t) => {
  const result = await create.execute({ email: 'test@test.test', firstName: 'First', lastName: 'Last' });
  t.assert(result.id, 100, 'Returns created client with an id');
  t.end();
});
