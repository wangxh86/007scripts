/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let QQ_BODYs = [
  '{"common":{"appid":1450024394,"areaid":5,"qq_ver":"8.4.17","os_ver":"iOS 14.2","mp_ver":"0.32.5","mpos_ver":"1.21.0","brand":"iPhone","model":"iPhone XR<iPhone11,8>","screenWidth":414,"screenHeight":896,"windowWidth":414,"windowHeight":813,"openid":"514CA3BE822B3986DE4586AC10895E9E","guid":61718369,"session":"3t02l6znzh8mq3egoxvzq8kzrg1ese0o","scene":2016,"source":"wza0005wzb0004","hasRedDot":"false","missions":-1,"caseID":-1},"dataList":[{"click1":"bookDetail_bottomBar_read_C","click2":"bookStore_newCI_unit_C","route":"pages/book-read/index","refer":"pages/book-detail/index","options":{"bid":"20506956","cid":"1"},"dis":1607495252882,"ext6":42,"eventID":"bookRead_show_I","type":"shown","ccid":1,"bid":"20506956","bookStatus":1,"bookPay":0,"chapterStatus":0,"ext1":{"font":18,"bg":0,"pageMode":1},"from":"2016_20506956"}]}',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  //账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.QQREAD_BODY) {
  if (process.env.QQREAD_BODY.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    QQ_BODYs = process.env.QQREAD_BODY.split('\n');
  } else if (process.env.QQREAD_BODY.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    QQ_BODYs = process.env.QQREAD_BODY.split('\\n');
  } else {
    QQ_BODYs = [process.env.QQREAD_BODY];
  }
  QQ_BODYs = [...new Set(QQ_BODYs)]
  console.log(`\n====================共有${QQ_BODYs.length}个企鹅账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < QQ_BODYs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['QQ_BODY' + index] = QQ_BODYs[i];
}
