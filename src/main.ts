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
    environment.stompConfig = env.stompConfig;
    if (!environment.stompConfig) console.error('Stomp disabled');

    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch(err => console.log(err));
});
