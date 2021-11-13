import { Router, Sunder } from 'sunder';

const app = new Sunder();
const router = new Router();

router.get('/hello/:username', ({ response, params }) => {
  response.body = `Hello ${params.username}`;
});

app.use(router.middleware);

addEventListener('fetch', event => {
  const resp = app.handle(event);
  event.respondWith(resp);
});
