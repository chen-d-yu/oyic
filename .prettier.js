/** @type {import("prettier").Config} */
module.exports = {
  /**
   * 换行宽度，当代码宽度达到多少时换行
   * @default 80
   * @type {number}
   */
  printWidth: 120,
  /**
   * 缩进的空格数量
   * @default 2
   * @type {number}
   */
  tabWidth: 2,
  /**
   * 是否使用制表符代替空格
   * @default false
   * @type {boolean}
   */
  useTabs: false,
  /**
   * 是否使用单引号替代双引号
   * @default false
   * @type {boolean}
   */
  singleQuote: false,
  /**
   * 对象属性的引号处理
   * @default "as-needed"
   * @type {"as-needed"|"consistent"|"preserve"}
   */
  quoteProps: "as-needed",
  /**
   * jsx中是否使用单引号替代双引号
   * @default false
   * @type {boolean}
   */
  jsxSingleQuote: false,
  /**
   * 末尾是否加上逗号
   * @default "es5"
   * @type {"es5"|"none"|"all"}
   */
  trailingComma: "none",
  /**
   * 在对象，数组括号与文字之间加空格 "{ foo: bar }"
   * @default true
   * @type {boolean}
   */
  bracketSpacing: true,
  /**
   * 把多行HTML (HTML, JSX, Vue, Angular)元素的>放在最后一行的末尾，而不是单独放在下一行(不适用于自关闭元素)。
   * 用于替代 JSX Brackets
   * @default false
   * @type {boolean}
   */
  bracketSameLine: false,
  /**
   * 当箭头函数只有一个参数是否加括号
   * @default "always"
   * @type {"always"|"avoid"}
   */
  arrowParens: "always",
  /**
   * 文件结束符
   * @default "lf"
   * @type {"lf"|"crlf"|"cr"|"auto"}
   */
  endOfLine: "auto",
  /**
   * 因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
   * @default "preserve"
   * @type {"preserve"|"never"|"always"}
   */
  proseWrap: "preserve",
  /**
   * 是否使用根目录下的EditorConfig配置文件
   */
  useEditorConfig: true,
  /**
   * HTML\VUE\JSX每行只有单个属性
   * @default true
   * @type {boolean}
   */
  singleAttributePerLine: true,
};
