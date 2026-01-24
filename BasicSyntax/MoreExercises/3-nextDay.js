function nextDay(year, maunt, day) {
    const date = new Date(year, maunt - 1, day);
    date.setDate(date.getDate() + 1);

    const nextDay = date.getDate();
    const nextMount = date.getMonth() + 1;
    const years = date.getFullYear();

    console.log(`${years}-${nextMount}-${nextDay}`);

}
nextDay(2020, 3, 24);
nextDay(2016, 9, 30);