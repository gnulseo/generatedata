import { ExportTypeMetadata } from '../../../../types/exportTypes';
import { getRandomNum } from '../../../utils/randomUtils';
import { uppercaseWords } from '../../../utils/generalUtils';
import { getLipsumWords } from '../../../utils/stringUtils';
import { DTGenerateReturnType } from '../../../../types/dataTypes';

const { words } = getLipsumWords();
const companyTypes = [
	'Company', 'Corp.', 'Corporation', 'Inc.', 'Incorporated', 'LLC', 'LLP', 'Ltd', 'Limited',
	'PC', 'Foundation', 'Institute', 'Associates', 'Industries', 'Consulting'
];

const removePunctuation = (arr: string[]): string[] => arr.map((i: string) => i.replace(/[.,:;]/g, ''));

export const generateCompanyName = (wordsArr = words, types = companyTypes): string => {
	const numCompanyNameWords = getRandomNum(1, 3);
	const offset = getRandomNum(0, wordsArr.length - (numCompanyNameWords + 1));
	const selectedWords = removePunctuation(wordsArr.slice(offset, offset + numCompanyNameWords));
	const companyType = types[getRandomNum(0, types.length - 1)];

	return uppercaseWords(selectedWords.join(' ')) + ' ' + companyType;
};

export const generate = (): DTGenerateReturnType => ({ display: generateCompanyName() });

export const getMetadata = (): ExportTypeMetadata => ({
	sql: {
		field: 'varchar(255)',
		field_Oracle: 'varchar2(255)',
		field_MSSQL: 'VARCHAR(255) NULL'
	}
});
