import binarySearch from 'binary-search';
import {asc, desc} from 'num-sort';

export default function (points, options) {
    const {x, y} = points;
    const {
        target = x[0],
        reverse = false
    } = options;

    let index;
    if (reverse) {
        index = binarySearch(x, target, desc);
    } else {
        index = binarySearch(x, target, asc);
    }

    if (index >= 0) {
        return {
            x: x[index],
            y: y[index]
        };
    } else {
        index = ~index;
        if (((index !== 0) && (Math.abs(x[index] - target) > 0.5)) || (index === x.length)) {
            return {
                x: x[index - 1],
                y: y[index - 1]
            };
        } else {
            return {
                x: x[index],
                y: y[index]
            };
        }
    }
}