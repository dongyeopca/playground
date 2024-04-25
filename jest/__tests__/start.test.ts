import { resolve } from "path";
import { sum } from "../start";

describe("내맘대로 테스트",()=>{
    test('add Test',()=>{
        expect(sum(1,2)).toBe(3);
    })
    
    test("object assignment",()=>{
        const data = {one:1};
        data['two'] = 2;
        expect(data).toEqual({one:1,two:2})
    })

    test("not",()=>{
        for(let a =1;a<10; a++){
            for(let b=1; b<10; b++){
                expect(a+b).not.toBe(0);
            }
        }
    })

    test("null",()=>{
        const n = null;
        expect(n).toBeNull();
        expect(n).toBe(null);
        expect(n).not.toBeUndefined();
        expect(n).not.toBe(undefined);
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();

    })

    test("zero",()=>{
        const z = 0;
        expect(z).not.toBeNaN();
        expect(z).not.toBeNull();
        expect(z).not.toEqual(1);
    })

    // toBe랑 toEqual이랑 뭐가 다른거지?

    type player = {name:string,score:number};
    
    const getPlayer = (p1:player,p2:player)=>{
        return p1;
    }
    const player1:player = {name:'dongyeop',score:30};
    const player2:player = {name:'dongyeop',score:30};

    test("difference toBe and toEqual",()=>{
        expect(getPlayer(player1,player2)).toBe(player1);
        expect(getPlayer(player1,player2)).toEqual(player1);

        // expect(getPlayer(player1,player2)).toBe(player2);
        expect(getPlayer(player1,player2)).toEqual(player2);

        expect(getPlayer(player1,player2)).not.toBe(player2);
        // expect(getPlayer(player1,player2)).not.toEqual(player2);

        // toBe는 reference를 toEqual는 값을 deepCompare하는구먼

    })


    //Number

    test('two plus two',()=>{
        const value = 2+2;
        const floating = 0.1+0.2;
        expect(value).toBe(4);
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4);
        expect(floating).not.toBe(0.3);
        expect(floating).toBeCloseTo(0.3);


        // toBeClose는 소숫점에서 사용됨 why? => toBe는 rounding error로 인해 error발생
    })

    // String

    test('regExp',()=>{
        expect('testing jest').toMatch(/testing/);
        expect('testing jest').not.toMatch(/^[123]/)
    })


    // error throw

    test('errothrow',()=>{
        const throwError = ()=>{
            throw new Error("123412412")
        }
        expect(()=>throwError()).toThrow(Error);
    })
})
