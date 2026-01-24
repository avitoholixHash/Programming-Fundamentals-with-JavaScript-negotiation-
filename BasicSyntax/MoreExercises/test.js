// const str = "The quick brown fox jumps over the lazy dog.";
// const arrText = str.split(' ');
// let search = 'The';
// for (const element of arrText) {
//     if(element === search){
//         const arr = element.split('');
//         console.log(arr);

//     }
// }

//разстоянието между точките A и B
// function closestPoint(x1, y1, x2, y2) {
//     const x = x1 - x2;
//     const y = y1 - y2;
//     const d = Math.sqrt(x*x+y*y);
//     console.log(d);
    
// }
// closestPoint(2, 4, -1, 2);

//разстоянието на всяка точка до (0,0)
// function closestPoint(x1, y1, x2, y2) {
//     const dA = Math.sqrt(x1 * x1 + y1 * y1);
//     const dB = Math.sqrt(x2 * x2 + y2 * y2);

//     if (dA <= dB) {
//         console.log(`(${x1}, ${y1})`);
//     } else {
//         console.log(`(${x2}, ${y2})`);
//     }
// }

// closestPoint(2, 4, -1, 2);

//Проверка дали точка е в кръг x2+y2≤r2
function isPointInCircle(x, y, r) {
    const distanceSquared = x * x + y * y;
    const radiusSquared = r * r;

    if (distanceSquared <= radiusSquared) {
        console.log('Inside');
    } else {
        console.log('Outside');
    }
}
isPointInCircle(2,3,4,5);