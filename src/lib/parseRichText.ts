type RichTextSegmentType = 'text' | 'link';
interface RichTextSegment {
	type: RichTextSegmentType;
	text: string;
}

const urlValidCharacters = /[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]/,
	linkStart = /^https?:\/\/[A-Za-z0-9]/;

export function parseRichText(text: string): RichTextSegment[] {
	const segments: RichTextSegment[] = [],
		characters = [...text];

	let segmentStart = 0,
		segmentCurrent = 0;

	function saveText(type: RichTextSegmentType) {
		if (segmentStart === segmentCurrent) {
			return;
		}

		const text = characters.slice(segmentStart, segmentCurrent).join('');
		segmentStart = segmentCurrent;

		if (type === 'link') {
			// if we said we were parsing a link, test if it's really a link,
			// because so far we only know it started correctly and contains only
			// valid characters, but we don't know if it's malformed. we dont' want to
			// linkify things that aren't actually URLs, or the UI will break trying to
			// render it with a shortened path later.
			try {
				new URL(text);
			} catch (e) {
				// if it couldn't be parsed as a URL, just treat it as a text segment.
				type = 'text';
			}
		}

		// if we're adding a text segment, and the last was also a text segment (happens
		// when this segment or last segment was an invalid URL that we converted to text)
		// then just append it to the previous segment to keep everything consistent
		const lastSegment = segments.at(-1);
		if (type === 'text' && lastSegment && lastSegment.type === 'text') {
			lastSegment.text += text;
			return;
		}

		segments.push({
			type,
			text,
		});
	}

	function eof() {
		return segmentCurrent >= characters.length;
	}

	function upcoming() {
		return characters.slice(segmentCurrent, segmentCurrent + 10).join('');
	}

	while (!eof()) {
		// while we're not seeing the start of a link just keep advancing
		if (linkStart.test(upcoming())) {
			// advance to the start of the link, then save the segment until now,
			// but not if the text starts with a link
			if (segmentCurrent !== 0) {
				saveText('text');
			}

			// scan until we stop seeing url valid characters
			while (!eof()) {
				const char = characters[segmentCurrent];

				if (!urlValidCharacters.test(char)) {
					saveText('link');
					break;
				}
				// keep going, still a valid link
				segmentCurrent++;
			}

			// if we hit the end of the string while scanning a link, add it
			if (eof()) {
				saveText('link');
			}
			segmentCurrent++;
		} else {
			segmentCurrent++;
		}
	}
	if (segmentStart < characters.length) {
		saveText('text');
	}

	return segments;
}
