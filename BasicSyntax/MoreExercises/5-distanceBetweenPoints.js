function distanceBetweenPoints(x1, y1, x2, y2) {
    const x = x1 - x2;
    const y = y1 - y2;
    const d = Math.sqrt(x * x + y * y);
    console.log(d);


}
distanceBetweenPoints(2, 4, 5, 0);