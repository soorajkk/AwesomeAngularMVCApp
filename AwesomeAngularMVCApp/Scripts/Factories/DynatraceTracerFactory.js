
var dtXHRTracerFactory = (function () {
    var xhrHistList = [];
    return {
        enterXHR: function (url,reqID) {
           // debugger;
            var xhrHist = {
                xhrAction: "",
                url: "",
                ResqustId:""
            };
            try {
               // if (typeof window.dT_ != 'undefined') {
                    xhrHist.url = url;
                    xhrHist.xhrAction = 'JABA' // dynaTrace.enterXhrAction(url);
                    xhrHist.ResqustId = reqID;
                    xhrHistList.push(xhrHist);
                    console.log("enterXHR URL : " + xhrHist.url + "REQ NO: " + xhrHist.ResqustId)
               // }
            } catch (e) { }
        },
        leaveHXR: function (url, reqID) {
            console.log("incoming data as is::::::: URL : " + url + "REQ NO: " + reqID + "timestamp:::::" + Date.now())
            //debugger;
            for (var i = 0; i < xhrHistList.length; i++) {
                if (xhrHistList[i].url == url) {
                    try {
                        console.log("leaveHXR URL : " + xhrHistList[i].url + "REQ NO: " + xhrHistList[i].ResqustId + "timestamp:::::" + Date.now())
                       // if (typeof window.dT_ != 'undefined') {
                            //dynaTrace.leaveXhrAction(xhrHistList[i].xhrAction);							        
                       // }
                    } catch (e) { }
                    xhrHistList.splice(i, 1);
                    break;
                }
            }
        }
    };
})();


