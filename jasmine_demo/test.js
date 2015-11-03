/**
 * Created by CI7512 on 2015/11/3.
 */
describe('just a test', function () {
    it('test showName', function () {
        var a = ' ck';
        var exp = 'my name is ck';
        expect(exp).toEqual(showName(a));
    });
});