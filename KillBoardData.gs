function loadLosses(){
  var losses = new Array();
  var url = "https://zkillboard.com/api/pastSeconds/604800/losses/orderDirection/desc/allianceID/99005338/no-attackers/xml/";
  var parameters = {method : "get", payload : ""};
  var xmlFeed = UrlFetchApp.fetch(url, parameters);//.getContentText();
  var xml = XmlService.parse(xmlFeed);
  if(xml) {
    var rows=xml.getRootElement().getChild("result").getChild("rowset").getChildren("row");
    for(var i = 0; i < rows.length; i++) {
      losses=[   rows[i].getAttribute("shipTypeID").getValue(),
                 rows[i].getAttribute("charID").getValue(),
                 rows[i].getAttribute("typeID").getValue(),
                 rows[i].getAttribute("qtyDropped").getValue(),
                 rows[i].getAttribute("qtyDestroyed").getValue(),
            ];
      losses.push(losses);
    }
  }
  return rows;
}