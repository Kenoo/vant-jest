// __tests__/example.test.js
import { resolve } from 'q';
import example from '../obj';

describe('test object data is right', ()=> {

    test('square fn', () => {
        const mockFn = jest.fn(example.square);
        mockFn('3', 4);
        expect(mockFn).toHaveBeenCalled();

        expect(example.square('2', 3)).toBe(6);
        expect(example.square(0, '3b')).toBe(NaN);
        expect(example.square('5c', '3b')).toBe(NaN);
        expect(example.square(5, 4)).toBe(20);

    });

    test('asyncSquare fn', ()=> {
        let fnPromise = (a)=>{
            return new Promise((resolve, reject)=>{
                if (typeof a != 'number') reject(new Error('参数必须是number类型'));

                setTimeout(()=>{resolve(a)}, 1000);
            });
        }
        expect(example.asyncSquare(fnPromise(2), 3)).resolves.toBe(6);
    }, 2000);

    test('sum fn', () => {
        expect(example.sum(2, 3)).toBe(5);
        expect(example.sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('onPress gets called with the right thing', () => {
       
    });

    test('obj toMatchSnapshot', ()=> {
        expect(example).toMatchSnapshot();
    });
});



