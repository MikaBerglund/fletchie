define(["require", "exports", "./modules/odata/OData"], function (require, exports, odata) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    odata.queryBuilder("/api/Activities")
        .filterString("Title", odata.ComparisonOperator.contains, "call")
        .inlineCount(odata.InlineCountMode.AllPages)
        .skip(0)
        .top(20)
        .expand("Owner")
        .expand("Tenant")
        .orderBy("Date desc")
        .orderBy("Created asc");
});
//# sourceMappingURL=app.js.map