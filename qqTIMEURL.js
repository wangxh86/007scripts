/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let QQ_TIMEURLs = [
  'https://mqqapi.reader.qq.com/mqq/addReadTimeWithBid?scene=2016&refer=pages%2Findex%2Findex&bid=20506956&readTime=6816&read_type=0&conttype=1&read_status=0&chapter_info=%5B%7B%221%22%3A%7B%22readTime%22%3A6816%2C%22pay_status%22%3A0%7D%7D%5D&sp=-1',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  //账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.QQREAD_TIMEURL) {
  if (process.env.QQREAD_TIMEURL.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    QQ_TIMEURLs = process.env.QQREAD_TIMEURL.split('\n');
  } else if (process.env.QQREAD_TIMEURL.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    QQ_TIMEURLs = process.env.QQREAD_TIMEURL.split('\\n');
  } else {
    QQ_TIMEURLs = [process.env.QQREAD_TIMEURL];
  }
  QQ_TIMEURLs = [...new Set(QQ_TIMEURLs)]
  //console.log(`\n====================共有${QQ_TIMEURLs.length}个企鹅账号Cookie=========\n`);
  //console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < QQ_TIMEURLs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['QQ_TIMEURL' + index] = QQ_TIMEURLs[i];
}
