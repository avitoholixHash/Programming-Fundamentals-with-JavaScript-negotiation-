function charactersInRange(charFrom, charTo) {
    let print = '';
    let from = Math.min(charFrom.charCodeAt(),charTo.charCodeAt());
    let to = Math.max(charFrom.charCodeAt(),charTo.charCodeAt());
    for (let i = from + 1; i < to; i++) {
        print += String.fromCharCode(i);
    }
    console.log(print.split('').join(' '));
}
charactersInRange('C','#');