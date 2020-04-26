"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Take two numbers as arguments and return a pair of numbers consisting of their
 * quotient and remainder when using integer division. The result is the same as (a // b, a % b).
 */
function divmod(a, b) {
    return [Math.floor(a / b), a % b];
}
exports.divmod = divmod;
//# sourceMappingURL=divmod.js.map