const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    // antd 
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),

    // less-loader 
    addLess({
        javascripEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
    })
);