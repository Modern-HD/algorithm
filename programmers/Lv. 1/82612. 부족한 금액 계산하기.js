function solution(price, money, count) {
    const totalPrice = (price + price * count) * count / 2;
    return totalPrice > money ? totalPrice - money : 0;
}
