/* eslint-disable */
import { Utils as util } from './utils/index.js';

export default class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        this.foo = foo;
        this.date = new Date();
    }
}

try {
    let cp = new ColorPoint(25, 8, 'green');
    [...document.querySelectorAll('[button]')].map(btn => {
        btn.addEventListener('click', () => {
            cp.toString(); // '(25, 8) in green'
            console.log(cp instanceof ColorPoint); // true
            console.log(cp instanceof Point); // true
        })
    });

    for (let i = 0; i < document.querySelectorAll('[button]').length; i++) {
        console.log('Button', i);
    }

} catch(e) {
    console.warn(e.foo);
    console.warn(e.message);
    console.warn(e.stack);
    throw new CustomError('baz', 'bazMessage');
}
