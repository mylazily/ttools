export interface Tool {
  id: string;
  icon: string;
  name: { zh: string; en: string };
  desc: { zh: string; en: string };
  category: string;
  keywords: string[];
}

export const tools: Tool[] = [
  // 文本处理类
  {
    id: 'ai-copywriting',
    icon: '✨',
    name: { zh: 'AI文案生成器', en: 'AI Copywriter' },
    desc: { zh: '朋友圈、小红书、广告语', en: 'Social media copy generator' },
    category: 'text',
    keywords: ['文案生成', '朋友圈文案', '小红书文案', '广告语生成']
  },
  {
    id: 'word-count',
    icon: '📏',
    name: { zh: '字数统计', en: 'Word Counter' },
    desc: { zh: '字符、字数、行数统计', en: 'Count characters and words' },
    category: 'text',
    keywords: ['字数统计', '字符统计', '行数统计']
  },
  {
    id: 'text-dedup',
    icon: '📋',
    name: { zh: '文本去重', en: 'Text Deduplicate' },
    desc: { zh: '去空行、去重复', en: 'Remove duplicates and empty lines' },
    category: 'text',
    keywords: ['文本去重', '去空行', '去除重复']
  },
  {
    id: 'case-converter',
    icon: '🔤',
    name: { zh: '大小写转换', en: 'Case Converter' },
    desc: { zh: '大写、小写、首字母大写', en: 'Upper, lower, title case' },
    category: 'text',
    keywords: ['大小写转换', '转大写', '转小写']
  },
  {
    id: 'text-reverse',
    icon: '🔄',
    name: { zh: '文本反转', en: 'Text Reverse' },
    desc: { zh: '倒序排列', en: 'Reverse text order' },
    category: 'text',
    keywords: ['文本反转', '倒序', '反转字符串']
  },
  {
    id: 'html-escape',
    icon: '📝',
    name: { zh: 'HTML转义', en: 'HTML Escape' },
    desc: { zh: '转义、还原', en: 'Escape and unescape HTML' },
    category: 'text',
    keywords: ['HTML转义', 'HTML实体', '转义字符']
  },
  {
    id: 'lorem',
    icon: '📄',
    name: { zh: 'Lorem生成', en: 'Lorem Ipsum' },
    desc: { zh: '占位文本生成', en: 'Placeholder text generator' },
    category: 'text',
    keywords: ['Lorem', '占位文本', '假文生成']
  },
  {
    id: 'ascii',
    icon: '🔣',
    name: { zh: 'ASCII码表', en: 'ASCII Table' },
    desc: { zh: '字符编码查询', en: 'Character code lookup' },
    category: 'text',
    keywords: ['ASCII', '字符编码', 'ASCII码']
  },
  {
    id: 'binary',
    icon: '💻',
    name: { zh: '二进制转换', en: 'Binary Converter' },
    desc: { zh: '文本二进制互转', en: 'Text to binary converter' },
    category: 'text',
    keywords: ['二进制', '二进制转换', '文本转二进制']
  },
  {
    id: 'morse',
    icon: '📻',
    name: { zh: '摩尔斯电码', en: 'Morse Code' },
    desc: { zh: '编码、解码', en: 'Encode and decode morse' },
    category: 'text',
    keywords: ['摩尔斯电码', '摩斯密码', '电报码']
  },
  {
    id: 'regex',
    icon: '🔍',
    name: { zh: '正则测试', en: 'Regex Tester' },
    desc: { zh: '实时匹配测试', en: 'Test regex patterns' },
    category: 'text',
    keywords: ['正则表达式', '正则测试', 'Regex']
  },
  {
    id: 'markdown',
    icon: '📝',
    name: { zh: 'Markdown预览', en: 'Markdown Preview' },
    desc: { zh: '实时渲染', en: 'Live markdown preview' },
    category: 'text',
    keywords: ['Markdown', 'MD预览', 'Markdown渲染']
  },
  {
    id: 'pinyin',
    icon: '🀄',
    name: { zh: '汉字转拼音', en: 'Pinyin Converter' },
    desc: { zh: '带声调', en: 'Chinese to pinyin' },
    category: 'text',
    keywords: ['拼音', '汉字转拼音', '拼音转换']
  },
  {
    id: 'traditional',
    icon: '📜',
    name: { zh: '简繁转换', en: 'Simplified/Traditional' },
    desc: { zh: '简体繁体互转', en: 'Chinese character converter' },
    category: 'text',
    keywords: ['简繁转换', '繁体', '简体']
  },
  {
    id: 'trim',
    icon: '🧹',
    name: { zh: '空格清理', en: 'Trim Spaces' },
    desc: { zh: '去多余空格', en: 'Clean extra spaces' },
    category: 'text',
    keywords: ['空格清理', '去空格', '去除空格']
  },
  {
    id: 'sort',
    icon: '📊',
    name: { zh: '文本排序', en: 'Text Sort' },
    desc: { zh: '升序降序', en: 'Sort text lines' },
    category: 'text',
    keywords: ['文本排序', '排序', '升序降序']
  },
  {
    id: 'shuffle',
    icon: '🎲',
    name: { zh: '随机打乱', en: 'Shuffle' },
    desc: { zh: '乱序排列', en: 'Randomize order' },
    category: 'text',
    keywords: ['随机打乱', '乱序', '随机排序']
  },
  {
    id: 'unique',
    icon: '✨',
    name: { zh: '数组去重', en: 'Array Unique' },
    desc: { zh: '去除重复项', en: 'Remove duplicates' },
    category: 'text',
    keywords: ['数组去重', '去重', '去除重复']
  },

  // 编码加密类
  {
    id: 'base64',
    icon: '🔐',
    name: { zh: 'Base64编码', en: 'Base64' },
    desc: { zh: '编码、解码', en: 'Encode and decode' },
    category: 'encoding',
    keywords: ['Base64', 'Base64编码', 'Base64解码']
  },
  {
    id: 'url-encode',
    icon: '🔗',
    name: { zh: 'URL编码', en: 'URL Encode' },
    desc: { zh: '编码、解码', en: 'Encode and decode URL' },
    category: 'encoding',
    keywords: ['URL编码', 'URL解码', 'encodeURI']
  },
  {
    id: 'md5',
    icon: '🔍',
    name: { zh: 'MD5加密', en: 'MD5 Hash' },
    desc: { zh: '字符串哈希', en: 'Generate MD5 hash' },
    category: 'encoding',
    keywords: ['MD5', 'MD5加密', '哈希']
  },
  {
    id: 'sha256',
    icon: '🔒',
    name: { zh: 'SHA256加密', en: 'SHA256 Hash' },
    desc: { zh: '安全哈希', en: 'Generate SHA256 hash' },
    category: 'encoding',
    keywords: ['SHA256', 'SHA256加密', '安全哈希']
  },
  {
    id: 'base32',
    icon: '🔐',
    name: { zh: 'Base32编码', en: 'Base32' },
    desc: { zh: '编码、解码', en: 'Encode and decode Base32' },
    category: 'encoding',
    keywords: ['Base32', 'Base32编码']
  },
  {
    id: 'base58',
    icon: '🔐',
    name: { zh: 'Base58编码', en: 'Base58' },
    desc: { zh: '比特币风格', en: 'Bitcoin style encoding' },
    category: 'encoding',
    keywords: ['Base58', 'Base58编码', '比特币']
  },
  {
    id: 'uuid',
    icon: '🆔',
    name: { zh: 'UUID生成器', en: 'UUID Generator' },
    desc: { zh: '批量生成GUID', en: 'Generate UUIDs' },
    category: 'encoding',
    keywords: ['UUID', 'GUID', '唯一ID']
  },
  {
    id: 'uuid4',
    icon: '🆔',
    name: { zh: 'UUID v4', en: 'UUID v4' },
    desc: { zh: '标准格式', en: 'Standard UUID v4' },
    category: 'encoding',
    keywords: ['UUID v4', 'UUID4']
  },
  {
    id: 'nanoid',
    icon: '🔑',
    name: { zh: 'NanoID生成', en: 'NanoID' },
    desc: { zh: '短ID生成', en: 'Short ID generator' },
    category: 'encoding',
    keywords: ['NanoID', '短ID', '短UUID']
  },
  {
    id: 'slug',
    icon: '🔗',
    name: { zh: 'URL Slug', en: 'URL Slug' },
    desc: { zh: '友好链接生成', en: 'SEO friendly URL' },
    category: 'encoding',
    keywords: ['Slug', 'URL Slug', '友好链接']
  },
  {
    id: 'hash',
    icon: '🧮',
    name: { zh: '哈希校验', en: 'Hash Checksum' },
    desc: { zh: 'MD5/SHA校验', en: 'Generate file hashes' },
    category: 'encoding',
    keywords: ['哈希校验', 'MD5校验', 'SHA校验']
  },
  {
    id: 'password',
    icon: '🔐',
    name: { zh: '密码生成器', en: 'Password Generator' },
    desc: { zh: '高强度密码', en: 'Strong password generator' },
    category: 'encoding',
    keywords: ['密码生成', '随机密码', '强密码']
  },
  {
    id: 'unicode',
    icon: '🔣',
    name: { zh: 'Unicode转换', en: 'Unicode Converter' },
    desc: { zh: '编码解码', en: 'Unicode encode/decode' },
    category: 'encoding',
    keywords: ['Unicode', 'Unicode转换', '编码']
  },
  {
    id: 'cron',
    icon: '⏱️',
    name: { zh: 'Cron表达式', en: 'Cron Parser' },
    desc: { zh: '解析说明', en: 'Explain cron expressions' },
    category: 'encoding',
    keywords: ['Cron', 'Cron表达式', '定时任务']
  },
  {
    id: 'url-parser',
    icon: '🔗',
    name: { zh: 'URL参数解析', en: 'URL Parser' },
    desc: { zh: '提取参数', en: 'Extract URL parameters' },
    category: 'encoding',
    keywords: ['URL解析', '参数提取', 'URL参数']
  },

  // 转换格式化
  {
    id: 'json',
    icon: '📝',
    name: { zh: 'JSON格式化', en: 'JSON Formatter' },
    desc: { zh: '美化、压缩、验证', en: 'Format and validate JSON' },
    category: 'converter',
    keywords: ['JSON格式化', 'JSON美化', 'JSON验证']
  },
  {
    id: 'base-converter',
    icon: '📊',
    name: { zh: '进制转换', en: 'Base Converter' },
    desc: { zh: '2/8/10/16进制', en: 'Binary/Octal/Decimal/Hex' },
    category: 'converter',
    keywords: ['进制转换', '二进制', '十六进制']
  },
  {
    id: 'unit-converter',
    icon: '🔄',
    name: { zh: '单位换算器', en: 'Unit Converter' },
    desc: { zh: '温度、长度、重量', en: 'Convert units' },
    category: 'converter',
    keywords: ['单位换算', '单位转换', '换算器']
  },
  {
    id: 'timestamp',
    icon: '⏰',
    name: { zh: '时间戳转换', en: 'Timestamp Converter' },
    desc: { zh: 'Unix时间互转', en: 'Unix timestamp converter' },
    category: 'converter',
    keywords: ['时间戳', 'Unix时间戳', '时间转换']
  },
  {
    id: 'color-picker',
    icon: '🎨',
    name: { zh: '颜色选择器', en: 'Color Picker' },
    desc: { zh: 'RGB/HEX转换', en: 'RGB and HEX converter' },
    category: 'converter',
    keywords: ['颜色选择器', 'RGB', 'HEX']
  },
  {
    id: 'csv-json',
    icon: '📋',
    name: { zh: 'CSV转JSON', en: 'CSV to JSON' },
    desc: { zh: '格式转换', en: 'Convert CSV to JSON' },
    category: 'converter',
    keywords: ['CSV转JSON', 'CSV', 'JSON转换']
  },
  {
    id: 'yaml-json',
    icon: '⚙️',
    name: { zh: 'YAML转JSON', en: 'YAML to JSON' },
    desc: { zh: '配置转换', en: 'Convert YAML to JSON' },
    category: 'converter',
    keywords: ['YAML转JSON', 'YAML', '配置转换']
  },
  {
    id: 'pixel',
    icon: '📐',
    name: { zh: '像素转换', en: 'Pixel Converter' },
    desc: { zh: 'px/rem/em', en: 'px to rem converter' },
    category: 'converter',
    keywords: ['像素转换', 'px转rem', '单位转换']
  },
  {
    id: 'json-csv',
    icon: '🔄',
    name: { zh: 'JSON转CSV', en: 'JSON to CSV' },
    desc: { zh: '格式转换', en: 'Convert JSON to CSV' },
    category: 'converter',
    keywords: ['JSON转CSV', '格式转换']
  },
  {
    id: 'time-format',
    icon: '⏰',
    name: { zh: '时间格式化', en: 'Time Format' },
    desc: { zh: '多种格式', en: 'Format date and time' },
    category: 'converter',
    keywords: ['时间格式化', '日期格式化']
  },
  {
    id: 'base64-image',
    icon: '🖼️',
    name: { zh: 'Base64转图片', en: 'Base64 to Image' },
    desc: { zh: '解码还原', en: 'Decode base64 to image' },
    category: 'converter',
    keywords: ['Base64转图片', '图片解码']
  },
  {
    id: 'hex-rgb',
    icon: '🎨',
    name: { zh: 'HEX/RGB转换', en: 'HEX/RGB Converter' },
    desc: { zh: '互转', en: 'Convert HEX and RGB' },
    category: 'converter',
    keywords: ['HEX转RGB', 'RGB转HEX']
  },

  // 计算类
  {
    id: 'random',
    icon: '🔢',
    name: { zh: '随机数生成', en: 'Random Number' },
    desc: { zh: '指定范围随机', en: 'Generate random numbers' },
    category: 'calculator',
    keywords: ['随机数', '随机数生成']
  },
  {
    id: 'age',
    icon: '📅',
    name: { zh: '年龄计算器', en: 'Age Calculator' },
    desc: { zh: '精确年龄计算', en: 'Calculate exact age' },
    category: 'calculator',
    keywords: ['年龄计算', '周岁计算']
  },
  {
    id: 'bmi',
    icon: '⚖️',
    name: { zh: 'BMI计算器', en: 'BMI Calculator' },
    desc: { zh: '身体质量指数', en: 'Body mass index' },
    category: 'calculator',
    keywords: ['BMI', 'BMI计算', '身体质量']
  },
  {
    id: 'percentage',
    icon: '📊',
    name: { zh: '百分比计算', en: 'Percentage Calculator' },
    desc: { zh: '快速计算', en: 'Calculate percentages' },
    category: 'calculator',
    keywords: ['百分比', '百分比计算']
  },
  {
    id: 'loan',
    icon: '💰',
    name: { zh: '贷款计算器', en: 'Loan Calculator' },
    desc: { zh: '月供计算', en: 'Calculate monthly payment' },
    category: 'calculator',
    keywords: ['贷款计算', '房贷计算', '月供']
  },
  {
    id: 'tip',
    icon: '💵',
    name: { zh: '小费计算器', en: 'Tip Calculator' },
    desc: { zh: 'AA分账', en: 'Calculate tips and split bill' },
    category: 'calculator',
    keywords: ['小费计算', 'AA分账', '账单分摊']
  },
  {
    id: 'ip',
    icon: '🌐',
    name: { zh: 'IP查询', en: 'IP Lookup' },
    desc: { zh: '查看本机IP', en: 'Check your IP address' },
    category: 'calculator',
    keywords: ['IP查询', '我的IP', 'IP地址']
  },
  {
    id: 'date-diff',
    icon: '📆',
    name: { zh: '日期差计算', en: 'Date Difference' },
    desc: { zh: '相隔天数', en: 'Calculate days between dates' },
    category: 'calculator',
    keywords: ['日期差', '相隔天数', '日期计算']
  },
  {
    id: 'email-check',
    icon: '📧',
    name: { zh: '邮箱验证', en: 'Email Validator' },
    desc: { zh: '格式校验', en: 'Validate email format' },
    category: 'calculator',
    keywords: ['邮箱验证', '邮箱格式', '邮箱校验']
  },
  {
    id: 'phone-check',
    icon: '📱',
    name: { zh: '手机号验证', en: 'Phone Validator' },
    desc: { zh: '格式校验', en: 'Validate phone number' },
    category: 'calculator',
    keywords: ['手机号验证', '手机号格式']
  },
  {
    id: 'idcard',
    icon: '🪪',
    name: { zh: '身份证验证', en: 'ID Card Check' },
    desc: { zh: '校验真伪', en: 'Validate ID card number' },
    category: 'calculator',
    keywords: ['身份证验证', '身份证校验']
  },

  // 图片处理类
  {
    id: 'image-compress',
    icon: '🖼️',
    name: { zh: '图片压缩', en: 'Image Compressor' },
    desc: { zh: '本地上传处理', en: 'Compress images locally' },
    category: 'image',
    keywords: ['图片压缩', '压缩图片', '图片优化']
  },
  {
    id: 'image-base64',
    icon: '🖼️',
    name: { zh: '图片转Base64', en: 'Image to Base64' },
    desc: { zh: '本地图片编码', en: 'Convert image to base64' },
    category: 'image',
    keywords: ['图片转Base64', 'Base64图片']
  },
  {
    id: 'qrcode',
    icon: '📱',
    name: { zh: '二维码生成器', en: 'QR Code Generator' },
    desc: { zh: '自定义尺寸', en: 'Generate QR codes' },
    category: 'image',
    keywords: ['二维码生成', 'QR Code', '二维码']
  },
  {
    id: 'rmb',
    icon: '💴',
    name: { zh: '人民币大写', en: 'RMB Capital' },
    desc: { zh: '金额转换', en: 'Convert number to Chinese' },
    category: 'image',
    keywords: ['人民币大写', '金额大写', '大写转换']
  },

  // 趣味工具类
  {
    id: 'stopwatch',
    icon: '⏱️',
    name: { zh: '秒表计时', en: 'Stopwatch' },
    desc: { zh: '精确计时', en: 'Precise stopwatch' },
    category: 'fun',
    keywords: ['秒表', '计时', '计时器']
  },
  {
    id: 'countdown',
    icon: '⏳',
    name: { zh: '倒计时', en: 'Countdown Timer' },
    desc: { zh: '定时提醒', en: 'Countdown timer' },
    category: 'fun',
    keywords: ['倒计时', '定时器', '提醒']
  },
  {
    id: 'dice',
    icon: '🎲',
    name: { zh: '掷骰子', en: 'Roll Dice' },
    desc: { zh: '随机点数', en: 'Roll virtual dice' },
    category: 'fun',
    keywords: ['掷骰子', '骰子', '随机']
  },
  {
    id: 'coin',
    icon: '🪙',
    name: { zh: '抛硬币', en: 'Flip Coin' },
    desc: { zh: '正反面', en: 'Flip a coin' },
    category: 'fun',
    keywords: ['抛硬币', '硬币', '正反面']
  },
  {
    id: 'lotto',
    icon: '🎫',
    name: { zh: '彩票号码', en: 'Lotto Numbers' },
    desc: { zh: '随机选号', en: 'Generate lottery numbers' },
    category: 'fun',
    keywords: ['彩票号码', '随机选号', '双色球']
  },
  {
    id: 'pick',
    icon: '🎯',
    name: { zh: '随机抽选', en: 'Random Pick' },
    desc: { zh: '抽签选择', en: 'Pick random item' },
    category: 'fun',
    keywords: ['随机抽选', '抽签', '选择困难']
  },
  {
    id: 'lucky',
    icon: '🍀',
    name: { zh: '今日运势', en: 'Daily Fortune' },
    desc: { zh: '随机抽取', en: 'Daily luck drawing' },
    category: 'fun',
    keywords: ['今日运势', '运势', '抽签']
  },

  // 设计类
  {
    id: 'palette',
    icon: '🎨',
    name: { zh: '配色方案', en: 'Color Palette' },
    desc: { zh: '渐变色', en: 'Generate color schemes' },
    category: 'design',
    keywords: ['配色方案', '配色', '渐变色']
  },
  {
    id: 'contrast',
    icon: '👁️',
    name: { zh: '对比度检测', en: 'Contrast Checker' },
    desc: { zh: 'WCAG标准', en: 'Check color contrast' },
    category: 'design',
    keywords: ['对比度检测', 'WCAG', '无障碍']
  },
  {
    id: 'shorturl',
    icon: '📎',
    name: { zh: 'URL短链', en: 'URL Shortener' },
    desc: { zh: '长链接缩短', en: 'Shorten long URLs' },
    category: 'design',
    keywords: ['短链接', 'URL缩短', '短链']
  },
];

export const categories = [
  { id: 'text', name: { zh: '文本处理', en: 'Text Tools' }, icon: '📝' },
  { id: 'encoding', name: { zh: '编码加密', en: 'Encoding' }, icon: '🔐' },
  { id: 'converter', name: { zh: '转换格式化', en: 'Converters' }, icon: '🔄' },
  { id: 'calculator', name: { zh: '计算类', en: 'Calculators' }, icon: '🧮' },
  { id: 'image', name: { zh: '图片处理', en: 'Image Tools' }, icon: '🖼️' },
  { id: 'fun', name: { zh: '趣味工具', en: 'Fun Tools' }, icon: '🎮' },
  { id: 'design', name: { zh: '设计类', en: 'Design Tools' }, icon: '🎨' },
];
