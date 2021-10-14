import { bold, underline, bgGreen, cyan, yellow, red } from 'picocolors';

export const success = (icon: string, folder: string) => {
    console.log(
        bgGreen(bold(' SUCCESS ')) +
            ' － Icon ' +
            cyan(bold(`${icon}`)) +
            ' created in ' +
            yellow(underline(folder)) +
            ' folder'
    );
};

export const error = (error: string) => console.log(red(bold(error)));

export const log = { success, error };
