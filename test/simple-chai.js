// const assert = require('assert');
const {should, expect, assert} = require('chai');
const {add, mul} = require('../src/math');

/**
 * 最简单的测试，不直观
 */
// if (add(2, 3) === 5) {
//     console.log('add(2, 3) === 5, ok')
// } else {
//     console.log('add(2, 3) !== 5, error')
// }

/**
 * 使用 node 提供的 assert 进行测试，稍微直观，也更专业
 */
// assert.equal(add(2, 3), 5);

/**
 * 使用 chai，更加语义化，
 * 需要注意的是，三种方式同时使用的时候，只会执行一个，下面的就不再执行了
 */

should();
add(2, 3).should.equal(5);
console.log('====================================');

expect(add(2, 3)).to.be.equal(5);
console.log('====================================');

assert.equal(add(2, 3), 5);