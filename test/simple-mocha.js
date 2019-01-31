const {expect} = require('chai');
const {add, mul, cover} = require('../src/math');

/**
 * 注意：mocha 是一个 runner，不需要引入，可以直接使用，它会自动注入
 * describe 方法是 mocha 中的方法之一
 */
describe('#math', () => {
    describe('add', () => {
        it('should return 5 when 2 + 3', () => {
            expect(add(2, 3), 5);
        });

        it('should return 5 when 2 + 3', () => {
            expect(add(2, -3), -1);
        })

        // 只执行这个方法
        // it.only('should return 5 when 2 + 3', () => {
        //     expect(add(2, -3), -1);
        // })

        // 跳过这个方法
        // it.skip('should return 5 when 2 + 3', () => {
        //     expect(add(2, -3), -1);
        // })
    })

    describe('mul', () => {
        it('should return 6 when 2 * 3', () => {
            expect(mul(2, 3), 6);
        });
    })

    describe('cover', () => {
        it('should return 1 when cover(2, 1)', () => {
            expect(cover(2, 1)).to.equal(1);
        });

        it('should return 3 when cover(1, 2)', () => {
            expect(cover(1, 2)).to.equal(3);
        });

        it('should return 2 when cover(1, 1)', () => {
            expect(cover(1, 1)).to.equal(2);
        });
    })
});