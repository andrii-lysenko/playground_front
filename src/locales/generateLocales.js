/*eslint-disable */
const fs = require('fs');
const path = require('path');
const merge = require('deepmerge');
/* eslint-enable */

const LOCALES_DIR = path.join(__dirname, 'en');
const OUT_FILE = path.join(__dirname, 'locale.ts');

const getFileExtention = fileName => {
    return fileName.split('.').pop();
};

const writeFile = (filePath, data) => {
    fs.writeFileSync(filePath, data, 'utf8', err => {
        throw err;
    });
};

const readFileData = fileData => {
    const parsedData = JSON.parse(fileData);
    return Object.keys(parsedData).reduce((acc, key) => {
        if (key.indexOf('/') >= 0) {
            const [constName, localeName] = key.split('/');
            const obj = { [constName]: { [localeName]: key } };
            return merge(acc, obj);
        }

        return merge(acc, { [key]: key });
    }, {});
};

const checkFilesForLocaleKeys = dir => {
    const files = fs.readdirSync(dir);

    return files.reduce((acc, file) => {
        const fullPath = path.join(dir, file);
        const fileStat = fs.statSync(fullPath);

        if (fileStat.isDirectory()) {
            const dirOutObject = checkFilesForLocaleKeys(fullPath);
            return merge(acc, dirOutObject);
        }
        if (getFileExtention(file) === 'json') {
            const fileData = fs.readFileSync(fullPath);
            const fileOutObject = readFileData(fileData);

            return merge(acc, fileOutObject);
        }
        return {};
    }, {});
};

const writeToOneObject = filePath => {
    return localeKeys => {
        const outputData = `export const Locale = ${JSON.stringify(localeKeys, null, 2)}`;
        writeFile(filePath, outputData);
    };
};

const generateLocaleConstants = (localesDir, writeFunction) => {
    const newObject = checkFilesForLocaleKeys(localesDir);
    writeFunction(newObject);
};

generateLocaleConstants(LOCALES_DIR, writeToOneObject(OUT_FILE));
