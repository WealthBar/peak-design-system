import test from 'tape';
import animations from './animations';

test('lib/utils/animations flash or fill should apply the right classes', (t) => {
  const event = {
    target: {
      classList: {
        add: t.spy(),
        remove: t.spy(),
      },
    },
  };

  animations.flashOrFill(event);

  t.ok(event.target.classList.add.calledTwice, '2 styles got added');
  t.ok(event.target.classList.add.calledWith('animated'), 'animated was added');
  t.ok(event.target.classList.add.calledWith('flash-or-fill'), 'flash-or-fill was added');
  t.ok(event.target.classList.remove.notCalled, 'no style got removed');

  t.end();
});

test('lib/utils/animations when flash or fill is finished, it should removed the right classes', (t) => {
  const event = {
    target: {
      classList: {
        add: t.spy(),
        remove: t.spy(),
      },
    },
  };

  animations.unflashOrFill(event);

  t.ok(event.target.classList.add.notCalled, 'no style got added');
  t.ok(event.target.classList.remove.calledTwice, '2 styles got removed');
  t.ok(event.target.classList.remove.calledWith('animated'), 'animated was removed');
  t.ok(event.target.classList.remove.calledWith('flash-or-fill'), 'flash-or-fill was removed');

  t.end();
});
