export const environment = {
    production: true,
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
        debug: false
    }
};
