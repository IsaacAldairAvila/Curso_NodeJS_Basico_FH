const fs = require('fs');
const colors = require('colors/safe');
const multiplicar = async(base, listar, hasta) => {
    let consola = "";
    let salida = "";

    consola, salida+=("============\n");
    consola, salida+=(`TABLA DEL ${base}\n`);
    consola, salida+=("============\n");
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
      consola += `${base} ${colors.red('x')} ${i} ${colors.red('=')} ${base * i} \n`;

    }
    
    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    if (listar){
      console.log(colors.green(consola))
    }
    return (`tabla del ${base}`)
}

module.exports = {
    multiplicar    
}