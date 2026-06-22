function cone(radius, height) {
    const slantHeight = Math.sqrt(radius ** 2 + height ** 2);

    const volume = (1 / 3) * Math.PI * radius ** 2 * height;
    const surfaceArea =
        Math.PI * radius * slantHeight + Math.PI * radius ** 2;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);

}
cone(3, 5);