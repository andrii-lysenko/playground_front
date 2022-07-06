module.exports = {
    '*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
    '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --cache --fix', 'stylelint --cache'],
};
