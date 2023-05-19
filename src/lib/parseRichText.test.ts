import { parseRichText } from './parseRichText';
import { it, describe, expect } from 'vitest';

describe('parseRichText', () => {
	it('works when links are in the middle', () => {
		expect(
			parseRichText(
				'this link is to a city https://goo.gl/maps/YmnzVoQuV1jmXXwx7 but have you ever been to https://dicechest.com/ yeah of course'
			)
		).toEqual([
			{ type: 'text', text: 'this link is to a city ' },
			{ type: 'link', text: 'https://goo.gl/maps/YmnzVoQuV1jmXXwx7' },
			{ type: 'text', text: ' but have you ever been to ' },
			{ type: 'link', text: 'https://dicechest.com/' },
			{ type: 'text', text: ' yeah of course' },
		]);
	});

	it('works when links are at the start', () => {
		expect(parseRichText('https://goo.gl/maps/YmnzVoQuV1jmXXwx7 yeah of course')).toEqual([
			{ type: 'link', text: 'https://goo.gl/maps/YmnzVoQuV1jmXXwx7' },
			{ type: 'text', text: ' yeah of course' },
		]);
	});

	it('works when links are at the end', () => {
		expect(parseRichText('this link is to a city https://goo.gl/maps/YmnzVoQuV1jmXXwx7')).toEqual([
			{ type: 'text', text: 'this link is to a city ' },
			{ type: 'link', text: 'https://goo.gl/maps/YmnzVoQuV1jmXXwx7' },
		]);
	});

	it("works when it's only text", () => {
		expect(parseRichText(' yeah of course')).toEqual([{ type: 'text', text: ' yeah of course' }]);
	});

	it("works when it's only a link", () => {
		expect(parseRichText('https://goo.gl/maps/YmnzVoQuV1jmXXwx7')).toEqual([
			{ type: 'link', text: 'https://goo.gl/maps/YmnzVoQuV1jmXXwx7' },
		]);
	});

	it('works when http links are in the middle', () => {
		expect(
			parseRichText(
				'this link is to a city http://goo.gl/maps/YmnzVoQuV1jmXXwx7 but have you ever been to http://dicechest.com/ yeah of course'
			)
		).toEqual([
			{ type: 'text', text: 'this link is to a city ' },
			{ type: 'link', text: 'http://goo.gl/maps/YmnzVoQuV1jmXXwx7' },
			{ type: 'text', text: ' but have you ever been to ' },
			{ type: 'link', text: 'http://dicechest.com/' },
			{ type: 'text', text: ' yeah of course' },
		]);
	});
	it("works when it's only an http link", () => {
		expect(parseRichText('http://goo.gl/maps/YmnzVoQuV1jmXXwx7')).toEqual([
			{ type: 'link', text: 'http://goo.gl/maps/YmnzVoQuV1jmXXwx7' },
		]);
	});
	it("doesn't try and link incorrect protocols", () => {
		expect(parseRichText('htp://goo.gl/maps/YmnzVoQuV1jmXXwx7')).toEqual([
			{ type: 'text', text: 'htp://goo.gl/maps/YmnzVoQuV1jmXXwx7' },
		]);
	});
	it("doesn't parse javascript urls", () => {
		expect(parseRichText('this is some stuff javascript:(function(){alert("hi")})()')).toEqual([
			{ type: 'text', text: 'this is some stuff javascript:(function(){alert("hi")})()' },
		]);
	});
	it("doesn't parse invalid urls", () => {
		expect(parseRichText('this is not a real url https://some:thing:here/path')).toEqual([
			{ type: 'text', text: 'this is not a real url https://some:thing:here/path' },
		]);
	});
	it("doesn't parse invalid urls, keeps it as a single text segment", () => {
		expect(parseRichText('http://this:isnt:real this is not a real url https://some:thing:here/path')).toEqual([
			{ type: 'text', text: 'http://this:isnt:real this is not a real url https://some:thing:here/path' },
		]);
	});
	it('supports URLS with all kinds of stuff in them, and urls just separated by spaces', () => {
		expect(
			parseRichText(
				'look at this url! https://example.com/test https://example.com/?query&hello https://example.com/#something https://www.example.com:1337/long/path/segments/?query=params#hash'
			)
		).toEqual([
			{ type: 'text', text: 'look at this url! ' },
			{ type: 'link', text: 'https://example.com/test' },
			{ type: 'text', text: ' ' },
			{ type: 'link', text: 'https://example.com/?query&hello' },
			{ type: 'text', text: ' ' },
			{ type: 'link', text: 'https://example.com/#something' },
			{ type: 'text', text: ' ' },
			{ type: 'link', text: 'https://www.example.com:1337/long/path/segments/?query=params#hash' },
		]);
	});
});
