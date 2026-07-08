function netherRealms(inputString) {
    let text = inputString;

    const patternHealth = /([^0-9+\-*\/.])/gm;
    const damagePattern = /[+-]?\d+(?:\.\d+)?/mg;

    let demonsNames = text.split(',').map(name => name.trim());
    
    const demons = {};

    for (const name of demonsNames) {

        
        let healthChar = name.match(patternHealth) || [];
        let health = 0;
        for (const element of healthChar) {
            health += Number(element.charCodeAt());
        }

        
        let damageChar = name.match(damagePattern) || [];
        let damage = 0;
        for (const element of damageChar) {
            damage += Number(element);
        }

        let editingDamage = name.match(/[*/]/g) || [];
        for (const element of editingDamage) {
            if (element === '*') {
                damage *= 2;
            } else if (element === '/') {
                damage /= 2;
            }
        }

        demons[name] = {
            health,
            damage,
        }
    }

    let sorted = Object.keys(demons).sort((a, b) => a.localeCompare(b));

    for (const key of sorted) {
        console.log(`${key} - ${demons[key].health} health, ${demons[key].damage.toFixed(2)} damage`);

    }

}
//netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');