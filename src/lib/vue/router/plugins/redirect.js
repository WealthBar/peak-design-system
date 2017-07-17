export function checkRedirect(to, from, next) {
  to.matched.forEach((record) => {
    if (record.meta.redirect) next(record.meta.redirect);
  });
  next();
}

export default function (router) {
  router.beforeEach(checkRedirect);
}
