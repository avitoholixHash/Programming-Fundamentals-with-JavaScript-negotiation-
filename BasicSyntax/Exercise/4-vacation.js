function vacation(peoples, type, day) {
    let totalPrice = 0;
    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    totalPrice = peoples * 8.45;
                    if (peoples >= 30) {
                        totalPrice -= totalPrice * 0.15;
                    }
                    break;
                case 'Saturday':
                    totalPrice = peoples * 9.80;
                    if (peoples >= 30) {
                        totalPrice -= totalPrice * 0.15;
                    }
                    break;
                case 'Sunday':
                    totalPrice = peoples * 10.46;
                    if (peoples >= 30) {
                        totalPrice -= totalPrice * 0.15;
                    }
                    break
                default:
                    break;
            }

            break;

        case 'Business':
            switch (day) {
                case 'Friday':
                    totalPrice = peoples * 10.90;
                    if (peoples >= 100) {
                        peoples -= 10;
                        totalPrice = peoples * 10.90;
                    }
                    break;
                case 'Saturday':
                    totalPrice = peoples * 15.60;
                    if (peoples >= 100) {
                        peoples -= 10;
                        totalPrice = peoples * 15.60;
                    }
                    break;
                case 'Sunday':
                    totalPrice = peoples * 16;
                    if (peoples >= 100) {
                        peoples -= 10;
                        totalPrice = peoples * 16;
                    }
                    break
                default:
                    break;
            }
            break;

        case 'Regular':
            switch (day) {
                case 'Friday':
                    totalPrice = peoples * 15;
                    if (peoples >= 10 && peoples <= 20) {
                        totalPrice -= totalPrice * 0.05;
                    }
                    break;
                case 'Saturday':
                    totalPrice = peoples * 20;
                    if (peoples >= 10 && peoples <= 20) {
                        totalPrice -= totalPrice * 0.05;
                    }
                    break;
                case 'Sunday':
                    totalPrice = peoples * 22.50;
                    if (peoples >= 10 && peoples <= 20) {
                        totalPrice -= totalPrice * 0.05;
                    }
                    break
                default:
                    break;
            }
        default:
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(15, "Regular", "Friday");