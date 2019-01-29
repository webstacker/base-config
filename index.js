const createModuleZero = require('module-zero');

const m0 = createModuleZero({
    files: '**/*',
    devDependencies: {
        "eslint": "^5.8.0",
        "eslint-config-airbnb-base": "^13.1.0",
        "eslint-config-prettier": "^3.1.0",
        "eslint-plugin-import": "^2.14.0",
        "eslint-plugin-jest": "^22.1.3",
        "eslint-plugin-prettier": "^3.0.0",
        "fs-extra": "^7.0.0",
        "husky": "^1.3.1",
        "jest": "^23.6.0",
        "lint-staged": "^8.0.4",
        "prettier": "^1.14.3"
    },
    blocks: {
        src: '**/*',
        commentStyles: {
            '#': '#! m0',
            '//': '//! m0',
            '/**/': '/*! m0 */'
        },
        commentStyleMap: {
            '.gitignore': '#',
            '.eslintignore': '#',
            '.js': '/**/'
        }
    }
});

m0.copyFiles();
m0.createBlocks();
m0.installDevDependencies();
