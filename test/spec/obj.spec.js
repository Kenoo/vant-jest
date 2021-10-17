// __tests__/example.test.js
import { resolve } from 'q';
import example from '../obj';

describe('test object data is right', ()=> {

    test('square fn', () => {
        expect(example.square(2, 3)).toBe(6);
        expect(example.square(0, 3)).toBe(0);
    });

    test('asyncSquare fn', ()=> {
        let fnPromise = (a)=>{
            return new Promise((resolve, reject)=>{
                if (typeof a != 'number') reject(new Error('参数必须是number类型'));

                setTimeout(()=>{resolve(a)}, 1000);
            });
        }
        expect(example.asyncSquare(fnPromise(1), 3)).resolves.toBe(4);
    });
});



