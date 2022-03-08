import axios from 'axios';
import chalk from 'chalk';
// get sys argv using spread operator
const args = process.argv;
// get the first arg
const firstArg = args[2] !== undefined ? args[2]: '-';
const secondArg = args[3]!== undefined ? args[3]: '-';
const thirdArg = args[4] !== undefined ? args[4]: '-';
const fourthArg = args[5]!== undefined ? args[5]: '-';



var json_data = {
    "mode": "transformer", // transformer, diffusion or random
    "num_colors": 4, // max 12, min 2
    "temperature": "1.2", // max 2.4, min 0
    "num_results": 10, // max 50 for transformer, 5 for diffusion
    "adjacency": ["0", "65", "45", "35", "65", "0", "35", "65", "45", "35", "0", "35", "35", "65", "35", "0"], // nxn adjacency matrix as a flat array of strings
    "palette": [firstArg, secondArg, thirdArg, fourthArg], // locked colors as hex codes, or '-' if blank
}

axios.post("https://api.huemint.com/color", json_data).then(function (response) {
    const colors = (response.data.results.forEach(function (pallete) {
        // return pallete.pallete.forEach();
        // console.log(pallete.palette);
        pallete.palette.forEach(function (color) {
            console.log(chalk.hex(color).bgHex(color).bold('color\ncolor\ncolor'), color);
        }

        );
        console.log('\n');
    }));
}
).catch(function (error) {
    console.log(error);
}
);
