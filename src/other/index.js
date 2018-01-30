import dva from './dva';
import Router from './router';
import models from './models';

const app = dva();
window.app = app;

app.model(models);
app.router(Router);

app.start("root");
