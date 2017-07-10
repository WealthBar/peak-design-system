import auth from './auth';
import redirect from './redirect';

export default function (router) {
  auth(router);
  redirect(router);
}
