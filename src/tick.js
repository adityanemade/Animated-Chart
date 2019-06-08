const TICK_INTERVAL = 1000;

export function tick (callback) {
    callback();

    setTimeout(tick.bind(this, callback), TICK_INTERVAL);
}
