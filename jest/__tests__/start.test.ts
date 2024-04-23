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
})
