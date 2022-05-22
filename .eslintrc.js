module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
         // typescript 표준 규칙 모음
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        // import 관련 규칙 모음

   
         // prettier 관련 규칙 모음
    ],
    parserOptions: {
    
    },
    rules: {
            // 추가하고 싶은 rule을 더 추가해줍니다.
        }
};