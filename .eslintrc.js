/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-06-23 15:39:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-06-23 16:26:42
 */
module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential'
        // '@vue/standard'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'eol-last': 0,
        indent: 0,
        'space-before-function-paren': 0
    }
}