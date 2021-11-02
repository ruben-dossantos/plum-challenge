import { numberWithCommas, getImageFromUrl, calculateImageWidth, dateFormatter } from '../utils';
import { JSDOM } from 'jsdom';

const dom = new JSDOM();
global.document = dom.window.document;

describe('Utils Testing', () => {
    describe('numberWithCommas Testing', () => {
        it.each([
            [10000, '10,000'],
            [400, '400'],
            [1234567, '1,234,567'],
            [null, ''],
            [{}, ''],
            [[], ''],
        ])('Should send a value %s and get the response %0', (value, expected) => {
            const result = numberWithCommas(value);
            expect(result).toEqual(expected);
        });
    });

    describe('getImageFromUrl', () => {
        it.each([
            ['https://plumguide-staging.freetls.fastly.net/listings/2591/hero/f29f49dc-7999-48d9-8a5a-da4bcde126ef.jpg', 'f29f49dc-7999-48d9-8a5a-da4bcde126ef.jpg'],
            ['/listings/2591/hero/154c3d97-c97d-4ac2-9b23-6cd456674a6a.jpg', '154c3d97-c97d-4ac2-9b23-6cd456674a6a.jpg'],
            ['', ''],
            [1245, ''],
            [{}, ''],
            [null, ''],
        ])('Should send the url %s and get the image name %0', (value, expected) => {
            const result = getImageFromUrl(value);
            expect(result).toEqual(expected);
        });
    });

    describe('calculateImageWidth', () => {
        it('Should get 500 width by default', () => {
            const result = calculateImageWidth();
            expect(result).toEqual(500);
        });

        it.skip('Should get value 1600 when on a display with 1920 viewport width', () => {
            // TODO: change the clientWidth here and reset after each test
            const result = calculateImageWidth();
            expect(result).toEqual(1600);
        });
    });

    describe('fateFormatter', () => {
        it('Should get 500 width by default', () => {
            const result = calculateImageWidth();
            expect(result).toEqual(500);
        });

        it.each([
            [new Date('1 Nov 2021'), '01 Nov 2021'],
            [new Date(1635850851079), '02 Nov 2021'],
            ['', ''],
            [1245, ''],
            [{}, ''],
            [null, ''],
        ])('Should send a value %s and get the response %0', (value, expected) => {
            const result = dateFormatter(value);
            expect(result).toEqual(expected);
        });
    });
});