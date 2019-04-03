module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    // "quotes": [2, 'single'],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "SwaggerEditor": false,
        "$": false,
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },

    "rules": {
        "linebreak-style": 0,
        "indent": [2,4],
        "no-console": 0
    }
};