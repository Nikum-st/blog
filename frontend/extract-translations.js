const fs = require('fs-extra');
const path = require('path');
const { glob } = require('glob');

const SRC_DIR = path.join(__dirname, 'src');
const LOCALES_DIR = path.join(__dirname, 'src', 'locales');
const RU_FILE = path.join(LOCALES_DIR, 'ru', 'translation.json');
const EN_FILE = path.join(LOCALES_DIR, 'en', 'translation.json');

const translations = {};

function extractRussian(text) {
	const regex = />([^<>]*[А-Яа-яЁё][^<>]*)</g;
	let match;
	const found = [];

	while ((match = regex.exec(text)) !== null) {
		let cleaned = match[1].trim();

		if (
			cleaned &&
			!translations[cleaned] &&
			!/[{}()=;<>]/.test(cleaned) &&
			cleaned.length < 100
		) {
			translations[cleaned] = cleaned;
			found.push(cleaned);
		}
	}
	return found;
}

async function run() {
	try {
		const files = await glob(`${SRC_DIR}/**/*.{js,jsx}`);
		console.log('Найдено файлов:', files.length);

		if (files.length === 0) {
			console.error('Файлы не найдены, проверь путь и расширения.');
			return;
		}

		files.forEach((file) => {
			const content = fs.readFileSync(file, 'utf8');
			const found = extractRussian(content);
			if (found.length > 0) {
				console.log(`В файле ${file} найдено ${found.length} русских строк`);
			}
		});

		fs.ensureDirSync(path.dirname(RU_FILE));
		fs.ensureDirSync(path.dirname(EN_FILE));

		fs.writeJsonSync(RU_FILE, translations, { spaces: 2 });

		const enTranslations = {};
		Object.keys(translations).forEach((key) => {
			enTranslations[key] = '';
		});
		fs.writeJsonSync(EN_FILE, enTranslations, { spaces: 2 });

		console.log(`Готово! Найдено ${Object.keys(translations).length} строк.`);
	} catch (err) {
		console.error(err);
	}
}

run();
