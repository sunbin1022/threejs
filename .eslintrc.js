module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': 0,
    'nuxt/no-cjs-in-config': 0,
    'no-const-assign': 2,// 禁止修改使用const声明的变量
    'prefer-const': [2, {// 永远不会重新分配变量，则使用const声明会更好
      'destructuring': 'all',// 如果解构中的所有变量都应该是const，则此规则会警告变量。否则，忽略它们
      'ignoreReadBeforeAssign': false
    }],
    'no-new-object': 2, // 禁止使用new Object()
    'object-shorthand': [2, 'always'],// 对象属性必须使用简写
    'quote-props': [2, 'as-needed'],// 禁止不严格要求的对象文字属性名称添加引号
    'no-array-constructor': 2, // 不允许使用数组构造器
    /**
      * Array.from
      * Array.prototype.every
      * Array.prototype.filter
      * Array.prototype.find
      * Array.prototype.findIndex
      * Array.prototype.map
      * Array.prototype.reduce
      * Array.prototype.reduceRight
      * Array.prototype.some
      * Array.prototype.sort
      * 以上数组方法的回调中强制有返回语句
     */
    'array-callback-return': [2, { allowImplicit: true }],
    'prefer-destructuring': [1, { 'object': true, 'array': false }],// 建议执行对象解构，但不强制执行数组解构
    'quotes': [2, 'single'],// 强制使用单引号
    'template-curly-spacing': [2, 'never'],// 模板字符串中强制不能使用间距
    'no-eval': 2, // 不允许使用eval()
    'no-useless-escape': 2,// 禁止不必要的转义用法
    'func-style': [1, 'declaration', { 'allowArrowFunctions': true }],// 建议使用命名的函数表达式代替函数声明
    'wrap-iife': [2, 'any'], // 立即执行表达式的括号风格（包裹表达式）
    'prefer-rest-params': 2,// 不要使用 arguments, 选择使用 rest 语法 ... 代替
    'no-new-func': 2, // 不允许使用new Function
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never'
    }], // 函数定义时括号前的空格
    'space-before-blocks': [2, 'always'], // 块前的空格
    'no-param-reassign': 2, // 不允许重新分配函数参数'no-proto'
    'prefer-spread': 1, // 优先使用扩展运算符 ... 来调用可变参数函数
    'function-paren-newline': [2, { 'minItems': 4 }],// 函数的参数超过3个必须换行
    'arrow-spacing': [2, { 'before': false, 'after': true }], // 箭头功能的箭头之后需要空格
    'prefer-arrow-callback': 2,// 必须使用匿名函数时 (当传递内联函数时)， 使用箭头函数
    'arrow-body-style': [2, 'as-needed', { 'requireReturnForObjectLiteral': true }],// 箭头函数的大括号根据需要添加
    'arrow-parens': [2, 'always'],// 箭头函数参数必须使用括号
    'no-confusing-arrow': [2, { 'allowParens': true }],// 避免箭头函数符号 (=>) 和比较运算符 (<=, >=) 的混淆
    'implicit-arrow-linebreak': [2, 'beside'],// 带有隐式返回的箭头函数函数体的位置
    'no-useless-constructor': 2,// 禁止不必要的构造函数.如果没有指定类，则类具有默认的构造器。一个空的构造器或是一个代表父类的函数是没有必要的
    'no-dupe-class-members': 2,// 禁止定义重复的类成员
    'no-duplicate-imports': [2, { 'includeExports': true }],// 只从一个路径导入所有需要的东西
    'import/no-mutable-exports': 0,// 不要导出可变的引用
    'import/prefer-default-export': 0,// 单个导出的模块中，选择默认模块而不是指定的导出
    'import/first': 0,// 所有的 imports 语句放在所有非导入语句的上边
    'import/no-webpack-loader-syntax': 0,// 在模块导入语句中禁止使用 Webpack 加载器语法
    'no-iterator': 2, // 不允许使用__iterator__属性
    'generator-star-spacing': [2, { 'before': false, 'after': true }],// generator中生成*周围的间距
    'dot-notation': 2, // 获取对象属性的时候使用点号
    'no-undef': 2, // 不允许未声明的变量
    'one-var': [2, 'never'], // 禁止变量声明放在一起
    'no-multi-assign': 2,// 禁止使用链式变量赋值
    'no-plusplus': [1, { 'allowForLoopAfterthoughts': true }],// 不建议使用自增自减运算符
    'operator-linebreak': [2, 'none'],// 禁止在赋值语句 = 前后换行
    'eqeqeq': [2, 'smart'], // 比较的时候使用 === 和 !== 而不是 == 和 !=,除了比较null/typeof/两个字符串
    'no-case-declarations': 2,// 在 case 和 default 的子句中，如果存在声明 (例如. let, const, function, 和 class)，使用大括号来创建块 
    'no-nested-ternary': 2, // 不允许使用嵌套的三目运算符
    'no-unneeded-ternary': 2,// 当存在更简单的替代方案时，不允许三元运算符
    'no-mixed-operators': 2,// 混合运算符时，使用括号括起来。
    'nonblock-statement-body-position': [2, 'beside'],// 有多行代码块的时候，必须使用大括号包裹
    'brace-style': [2, '1tbs', {
      'allowSingleLine': false
    }], // 使用的是 if 和 else 的多行代码块，则将 else 语句放在 if 块闭括号同一行的位置。
    'no-else-return': 2, // 如果一个 if 块总是执行一个 return 语句，那么接下来的 else 块就没有必要了。 如果一个包含 return 语句的 else if 块，在一个包含了 return 语句的 if 块之后，那么可以拆成多个 if 块
    'spaced-comment': [2, 'always'],// 必须用一个空格开始所有的注释
    'indent': [2,'tab'],
    'no-tabs': 0,
    'keyword-spacing': 2, // 关键字前后的空格
    'space-infix-ops': [2, {
      'int32Hint': true
    }], // 操作符周围的空格
    'eol-last': [2, 'always'],// 使用单个换行符结束文件
    'newline-per-chained-call': [2, { 'ignoreChainWithDepth': 2 }],// 方法链中的每次调用后需要换行符
    'no-whitespace-before-property': 2,// 属性之前禁止空格
    'padded-blocks': [2, 'never'], // 块内行首行尾是否空行
    'space-in-parens': [2, 'never'],// 禁止在括号内添加空格
    'array-bracket-spacing': [2, 'never'],// 禁止在中括号内添加空格
    'object-curly-spacing': [2, 'always'],// 花括号内添加空格
    'max-len': [2, { 'code': 120 }],// 一行代码最多有120个字
    'block-spacing': 2,// 要求打开的块标志和同一行上的标志拥有一致的间距。
    'comma-spacing': [2, { 'before': false, 'after': true }],// 逗号之前避免使用空格，逗号之后需要使用空格
    'computed-property-spacing': [2, 'never'],// 在计算属性之间强化间距
    'func-call-spacing': [2, 'never'],// 禁止函数标识符与其调用之间的间距
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }], // 对象字面量中冒号的前后空格
    'no-trailing-spaces': 2, // 一行最后不允许有空格
    'no-multiple-empty-lines': [2, {
      'max': 2
    }], // 空行最多不能超过两行
    'comma-style': [2, 'last'], // 逗号风格
    'comma-dangle': [2, 'always-multiline'],// 多行添加尾随逗号，单行不用添加尾随逗号
    'semi': [2, 'always'], // 强制语句分号结尾
    'no-new-wrappers': 2, // 不允许使用new String，Number和Boolean对象
    'radix': [2, 'as-needed'], // 使用parseInt时强制使用基数来指定是十进制还是其他进制
    'camelcase': [2, {
      'properties': 'always',
    }], // 强制驼峰命名规则
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false,
    }], // 构造函数名字首字母要大写
    'no-underscore-dangle': 2, // 不允许标识符以下划线开头
    'vue/require-default-prop': 2, // 必须设置prop默认数据
    'vue/require-prop-types': 2, // 必须设置prop类型
    'no-alert': 2, // 不允许使用alert，confirm，prompt语句
    'no-constant-condition': 2, // 条件语句的条件中不允许出现恒定不变的量
    'no-var': 2,// 使用let和const代替var
    'no-cond-assign': 2, // 条件语句的条件中不允许出现赋值运算符
    'no-extra-parens': 2, // 不允许出现不必要的圆括号
    'no-dupe-args': 2, // 函数定义的时候不允许出现重复的参数
    'no-dupe-keys': 2, // 对象中不允许出现重复的键
    'no-duplicate-case': 2, // switch语句中不允许出现重复的case标签
    'no-empty-character-class': 2, // 正则表达式中不允许出现空的字符组
    'no-shadow-restricted-names': 2, // js关键字和保留字不能作为函数名或者变量名
    'no-ex-assign': 2, // 在try catch语句中不允许重新分配异常变量
    'no-extra-boolean-cast': 2, // 不允许出现不必要的布尔值转换
    'no-extra-semi': 2, // 不允许出现不必要的分号
    'no-func-assign': 2, // 不允许重新分配函数声明
    'no-inner-declarations': [2, 'functions'], // 不允许在嵌套代码块里声明函数
    'no-invalid-regexp': 2, // 不允许在RegExp构造函数里出现无效的正则表达式
    'no-irregular-whitespace': 2, // 不允许出现不规则的空格
    'no-negated-in-lhs': 2, // 不允许在in表达式语句中对最左边的运算数使用取反操作
    'no-obj-calls': 2, // 不允许把全局对象属性当做函数来调用
    'no-regex-spaces': 2, // 正则表达式中不允许出现多个连续空格
    'no-sparse-arrays': 2, // 数组中不允许出现空位置
    'no-unreachable': 2, // 在return，throw，continue，break语句后不允许出现不可能到达的语句
    'use-isnan': 2, // 要求检查NaN的时候使用isNaN()
    'valid-typeof': [2, {
      'requireStringLiterals': true,
    }], // 在使用typeof表达式比较的时候强制使用有效的字符串
    'block-scoped-var': 2, // 将变量声明放在合适的代码块里
    'no-template-curly-in-string': 2, // 强制使用花括号的风格
    'no-caller': 2, // 不允许使用arguments.callee和arguments.caller属性
    'no-div-regex': 2, // 不能使用看起来像除法的正则表达式
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false,
    }], // 不允许标签语句
    'no-extend-native': 2, // 不允许扩展原生对象
    'no-extra-bind': 2, // 不允许不必要的函数绑定
    'no-fallthrough': 2, // 不允许switch按顺序全部执行所有case
    'no-floating-decimal': 2, // 不允许浮点数缺失数字
    'no-implied-eval': 2, // 不允许使用隐式eval()
    'no-lone-blocks': 2, // 不允许不必要的嵌套代码块
    'no-loop-func': 2, // 不允许在循环语句中进行函数声明
    'no-multi-spaces': 2, // 不允许出现多余的空格
    'no-multi-str': 2, // 不允许用\来让字符串换行
    'no-global-assign': 2, // 不允许重新分配原生对象
    'no-new': 2, // 不允许new一个实例后不赋值或者不比较
    'no-octal': 2, // 不允许使用八进制字面值
    'no-octal-escape': 2, // 不允许使用八进制转义序列
    'no-redeclare': [2, {
      'builtinGlobals': true,
    }], // 不允许变量重复声明
    'no-return-assign': 2, // 不允许在return语句中使用分配语句
    'no-script-url': 2, // 不允许使用javascript:void(0)
    'no-self-compare': 2, // 不允许自己和自己比较
    'no-sequences': 2, // 不允许使用逗号表达式
    'no-throw-literal': 2, // 不允许抛出字面量错误 throw 2
    'no-unused-expressions': 2, // 不允许无用的表达式
    'no-with': 2, // 不允许使用with语句
    'no-label-var': 2, // 不允许标签和变量同名
    'no-undef-init': 2, // 不允许初始化变量时给变量赋值undefined
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none',
    }], // 不允许有声明后未使用的变量或者参数
    'no-use-before-define': [2, 'nofunc'], // 不允许在未定义之前就使用变量
    'consistent-this': [2, 'self'], // 当获取当前环境的this是用一样的风格
    'new-parens': 2, // new时构造函数必须有小括号
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'], // 不允许混用tab和空格
    'semi-spacing': [2, {
      'before': false,
      'after': true,
    }], // 分号后前后空格
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false,
    }], // 一元运算符前后不要加空格
    'wrap-regex': 2, // 正则表达式字面量用括号括起来
    'vue/valid-v-else-if': 0,
    'vue/valid-v-else': 0,
  }
}
