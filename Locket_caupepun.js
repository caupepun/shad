// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @caupepun ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chuc mung ban da mua hang thanh cong!";var caupepun={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2100-01-01T01:01:01Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2000-01-10T01:01:01Z",purchase_date:"2000-01-10T01:01:01Z",store:"app_store"},caupepun={grace_period_expires_date:null,purchase_date:"2000-01-10T01:01:01Z",product_identifier:"com.caupepun.premium.yearly",expires_date:"2100-01-01T01:01:01Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(caupepun.product_identifier=s,obj.subscriber.subscriptions[s]=caupepun):obj.subscriber.subscriptions["com.caupepun.premium.yearly"]=caupepun,obj.subscriber.entitlements[e]=caupepun}else obj.subscriber.subscriptions["com.caupepun.premium.yearly"]=caupepun,obj.subscriber.entitlements.pro=caupepun;$done({body:JSON.stringify(obj)});
