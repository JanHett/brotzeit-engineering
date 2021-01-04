/**
 * Easing function: easeInOutCubic
 * From: https://gist.github.com/gre/1650294
 * @param t time
 */
export function easing (t: number) {
    return t < .5
        ? 4*t*t*t
        : (t-1)*(2*t-2)*(2*t-2)+1;
}