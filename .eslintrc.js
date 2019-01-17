module.exports = {
    root: true,
    env: {
        "es6": true,
        "node": true,
        "browser": true
    },
    parserOptions: {"ecmaVersion": 2018},
    parser: 'babel-eslint',
    extends: [
    'eslint'
    ],
    rules: {
        "indent": [
        2, 4,
        {
            "SwitchCase": 1
        }
        ],
        "semi": [
        "error",
        "always"
        ],
        "quote-props": ["error", "consistent"],
        "one-var": [ 2, {
            "var": "always",
            "let": "always",
            "const": "consecutive"
        }
        ],
        "no-unused-expressions": [2, { allowShortCircuit: true, allowTernary: true }],
        "no-console": "off"
    }
}
