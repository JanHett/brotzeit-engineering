module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        indent: ["error", 4],
        "vue/html-indent": ["warn", 4],
        // TODO: this shouldn't be necessary, but this rule is breaking things...
        "vue/comment-directive": "off",
    }
}
