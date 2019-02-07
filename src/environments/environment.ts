// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    instanceKey: 'I-41E07E',
    logger: {
        url: 'https://gwam.mago.cloud/logger/api/'
    },
    stompConfig: {
        // Which server?
        url: 'ws://127.0.0.1:15674/ws',
        // Headers
        // Typical keys: login, passcode, host
        headers: {
            login: 'guest',
            passcode: 'guest'
        },
        // How often to heartbeat?
        // Interval in milliseconds, set to 0 to disable
        heartbeat_in: 0, // Typical value 0 - disabled
        heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
        // Wait in milliseconds before attempting auto reconnect
        // Set to 0 to disable
        // Typical value 5000 (5 seconds)
        reconnect_delay: 5000,
        // Will log diagnostics on console
        debug: true
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
