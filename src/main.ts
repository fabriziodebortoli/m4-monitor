import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { environmentLoader as environmentLoaderPromise } from './environments/environmentLoader';

environmentLoaderPromise.then(env => {
    if (env.production) {
        enableProdMode();
    }
    environment.logger = env.logger;
    environment.instanceKey = env.instanceKey;

    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => console.log(err));
});
