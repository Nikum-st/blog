export const sanitizeContent = (content) =>
	content
		.replaceAll('<div><br></div>', `\\n`)
		.replaceAll(`<div>`, `\\n`)
		.replaceAll(`</div>`, ``)
		.replaceAll('<p>', '\\n')
		.replaceAll('<p>', '\\n');
