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
		segments.push({
			type,
			text: characters.slice(segmentStart, segmentCurrent).join(''),
		});
		segmentStart = segmentCurrent;
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

			if (eof()) {
				saveText('link');
			}
			segmentCurrent++;
			// if we hit the end of the string while scanning a link, add it
		}

		segmentCurrent++;
	}
	if (segmentStart < characters.length) {
		saveText('text');
	}

	return segments;
}
