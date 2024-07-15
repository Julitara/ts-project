import { classNames } from '../classNames/classNames';



describe('classNames', () => {

    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 hovered';
        expect(classNames('someClass', {hovered: true}, ['class1'])).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass class1 hovered';
        expect(classNames('someClass', {hovered: true, scrollable: false}, ['class1']))
            .toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass class1 hovered';
        expect(classNames('someClass', {hovered: true, scrollable: undefined}, ['class1']))
            .toBe(expected);
    });
});