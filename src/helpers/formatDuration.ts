export default (minutes: number) => {
    const h = ((minutes - (minutes % 60)) / 60) % 60;
    const m = minutes % 60;

    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m} hours`;
};
