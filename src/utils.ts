import chalk from 'chalk';

export const success = (icon: string, folder: string) => {
    console.log(
        chalk.bold.bgGreen(' SUCCESS ') +
            ' － Icon ' +
            chalk.bold.cyan(`${icon}`) +
            ' created in ' +
            chalk.underline.yellow(folder) +
            ' folder'
    );
};

export const error = (error: string) => console.log(chalk.bold.red(error));
