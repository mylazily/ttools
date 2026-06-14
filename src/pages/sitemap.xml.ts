import type { APIRoute } from 'astro';

const tools = [
  'word-count','text-dedup','case-convert','text-reverse','html-escape','html-unescape','html-beautify','html-minify',
  'css-beautify','css-minify','js-beautify','js-minify','lorem','ascii','binary','morse','trim','sort','shuffle','unique',
  'tradition','slug','js-escape','shell-escape','rot13','caesar','atbash','regex-escape','hex-encode','hex-decode','pinyin',
  'markdown','url-normalize','strip-html','text-compare','line-sort','remove-empty','quote','unquote','comma','indent','wrap',
  'extract-url','extract-email','extract-phone',
  'base64','base64-decode','base64-url','base64-file','url-encode','url-decode','md5','sha1','sha256','sha512','ripemd160',
  'crc32','crc16','uuid','uuid4','uuid1','uuid-nil','uuid-max','guid','nanoid','short-uuid','ulid','cuid','ksuid','xid',
  'snowflake','password','base32','base58','base85','unicode','punycode','hash','jwt-encode','jwt-decode','hex-dump','url-parse',
  'hmac','aes','des','sm3','sm4','blake2','argon2','bcrypt',
  'json-format','json-minify','xml-format','sql-format','base-convert','timestamp','timestamp-now','timefmt','urldiff',
  'query-parse','query-build','pixel','rem-px','em-px','pt-px','cm-px','inch-px','hexrgb','rgb-hex','rgb-hsl','hsl-rgb',
  'rgb-hsv','hsv-rgb','cmyk-rgb','csv-json','jsoncsv','yaml-json','mime-type','unit-convert','contrast','mac-address',
  'angle-convert','rgba-convert','line-height','dpi-calc','less-format','sass-format','ts-format','nginx-format','json-schema',
  'random','bmi','loan','datediff','age-calc','percentage','rmb','emailcheck','phonecheck','idcard','luhn','iban','tip',
  'cron','regex','subnet','ip-convert','timezone','rent-calc','password-strength','weight-convert','volume-convert','tax-calc',
  'discount','gcd-lcm','area-calc','speed-calc','fuel-calc','grade-calc','mortgage-calc','compound','triangle','binary-calc',
  'hex-calc','stats',
  'stopwatch','countdown','dice','coin','lotto','pick','lucky','palette','ai-copy','color-picker','emoji','nickname','poem',
  'fortune','love',
  'ip','qrcode','shorturl','user-agent','base64-image','whois','dns','ping','port','headers','ssl-check','seo-check',
  'md5-check','regex-lib','cheatsheet','git-commit','chmod','timestamp-list','color-names','ascii-art'
];

export const GET: APIRoute = () => {
  const pages = ['', ...tools.map(t => `/tools/${t}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>https://ziyuanzu.com${p}</loc><changefreq>weekly</changefreq><priority>${p?0.8:1}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
