/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let QQ_TIMEHDs = [
  '{"ywsession":"oib0j0e9ejcishqo4s8624jziwt4qz40","Cookie":"ywguid=61718369;ywkey=ywS7ZeLF6V9v;platform=ios;channel=mqqmina;mpVersion=0.31.0;qq_ver=8.2.8;os_ver=iOS 14.2;mpos_ver=1.12.1;platform=ios;openid=514CA3BE822B3986DE4586AC10895E9E","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"mqqapi.reader.qq.com","User-Agent":"QQ/8.2.8.633 CFNetwork/1206 Darwin/20.1.0","Referer":"https://appservice.qq.com/1110657249/0.31.0/page-frame.html","Accept-Language":"zh-cn","Accept-Encoding":"gzip, deflate, br","mpversion":"0.31.0"}',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  //账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.QQREAD_TIMEHD) {
  if (process.env.QQREAD_TIMEHD.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    QQ_TIMEHDs = process.env.QQREAD_TIMEHD.split('\n');
  } else if (process.env.QQREAD_TIMEHD.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    QQ_TIMEHDs = process.env.QQREAD_TIMEHD.split('\\n');
  } else {
    QQ_TIMEHDs = [process.env.QQREAD_TIMEHD];
  }
  QQ_TIMEHDs = [...new Set(QQ_TIMEHDs)]
  console.log(`\n====================共有${QQ_TIMEHDs.length}个企鹅账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < QQ_TIMEHDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['QQ_TIMEHD' + index] = QQ_TIMEHDs[i];
}
