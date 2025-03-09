export function GetRandomNumber(max: number, min: number): number {
    let _min = min;
    let _max = max;

    if (min > max) {
        _max = min;
        _min = max;
    }

    return Math.floor(Math.random() * (_max - _min) + _min);
}