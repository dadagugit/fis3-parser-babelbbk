'use strict';

const babel = require('@babel/core');
const presetEnv = require('@babel/preset-env');
const presetReact = require('@babel/preset-react');


module.exports = function (content, file, conf) {
   // 添加 useBabel 配置项，如果 useBabel 为 false 则不进行编译
    if (file.useBabel === false) {
        return content;
    }

    conf = fis.util.extend({
        presets: [
            presetEnv,
            presetReact
        ]
    }, conf);

    if (fis.compile.partial && file.ext === '.jsx') {
        content = fis.compile.partial(content, file, {
            ext: '.html',
            isHtmlLike: true
        });
    }

    var result = babel.transform(content, conf);
    return result.code;
};
