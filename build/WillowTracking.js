"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// developer: Tanvir Haider
// company: Willow Studios Inc.

var WillowTracking = function () {
    function WillowTracking(DFPdata) {
        _classCallCheck(this, WillowTracking);

        var DFPTrackingObject = new Object();

        DFPTrackingObject.baseURL = DFPdata.baseURL;
        DFPTrackingObject.orderID = DFPdata.orderID;
        DFPTrackingObject.creativeID = DFPdata.creativeID;
        DFPTrackingObject.lineItemID = DFPdata.lineItemID;
        DFPTrackingObject.dfp_viewport = DFPdata.dfp_viewport;
        DFPTrackingObject.pageViewID = DFPdata.pageViewID;
        DFPTrackingObject.dfp_pos = DFPdata.dfp_pos;
        DFPTrackingObject.prop = DFPdata.prop;
        DFPTrackingObject.method = DFPdata.method;

        var generatedString = DFPdata.baseURL + "/?subject=" + DFPdata.application + "&dfp_creativeid=" + DFPdata.creativeID + "&dfp_lineitemid=" + DFPdata.lineItemID + "&dfp_orderid=" + DFPdata.orderID + "&dfp_viewport=" + DFPdata.dfp_viewport + "&pageviewid=" + DFPdata.pageViewID + "&dfp_pos=" + DFPdata.dfp_pos + "&dfp_prop=" + DFPdata.prop;

        DFPTrackingObject.url = generatedString;
        this.DFPTrackingObject = DFPTrackingObject;
    }

    _createClass(WillowTracking, [{
        key: "track",
        value: function track(data) {
            var DFPTrackingObject = new Object();
            DFPTrackingObject = this.DFPTrackingObject;

            DFPTrackingObject.type = data.type;
            DFPTrackingObject.currentTarget = data.currentTarget;
            DFPTrackingObject.timestamp = new Date().toString();
            var generatedLink = DFPTrackingObject.url;

            var tempTrackingLink;
            var eventType = data.type;

            if (data.currentTarget && data.type) {
                tempTrackingLink = generatedLink + "&dfp_event_type=" + eventType + "&dfp_event_location=" + data.currentTarget;

                try {
                    if (DFPTrackingObject.method == "pixel") {
                        var trackingPixel = new Image(1, 1);
                        trackingPixel.src = tempTrackingLink;
                    }
                } catch (Error) {}
            }

            if (data.url) {
                try {
                    window.open(data.url, '_blank');
                } catch (Error) {}
            }
        }
    }]);

    return WillowTracking;
}();

var TR = new WillowTracking({
    baseURL: "http://159.203.116.166:3000",
    application: "dfp-ad-events",
    creativeID: "%ecid!",
    lineItemID: "%eaid!",
    orderID: "%ebuy!",
    dfp_viewport: "%%PATTERN:vp%%",
    pageViewID: "%%PATTERN:page_view_id%%",
    dfp_pos: "%%PATTERN:pos%%",
    prop: "%%PATTERN:prop%%",
    method: "pixel"
});

/* USAGE:
    for click out: ---
    TR.track ({
        type: "clickURL",
        currentTarget: "image",
        url: data.exit
    });

    for events :----
    TR.track ({
        type: "clickURL",
        currentTarget: "image"
    });
*/
