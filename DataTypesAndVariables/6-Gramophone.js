function gramophone(band, album, song) {
    const result = Number((album.length * band.length) * song.length / 2) / 2.5;
    console.log(`The plate was rotated ${Math.ceil(result)} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');