function RemCalculator<T extends number>(pixels: T): string {
    return `${(pixels / 16) as T}rem`;
}

export default RemCalculator;