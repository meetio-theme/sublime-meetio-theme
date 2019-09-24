module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
    },
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        sourceType: "module",
    },
    extends: ["eslint:recommended", "prettier"],
    plugins: ["prettier", "json"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: false,
            },
        ],
        "no-console": "off",
    },
}
