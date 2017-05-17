
import * as odata from "./modules/odata/OData";

odata.queryBuilder("/api/Activities")
    .filterString("Title", odata.ComparisonOperator.contains, "call")
    .inlineCount(odata.InlineCountMode.AllPages)
    .skip(0)
    .top(20)
    .expand("Owner")
    .expand("Tenant")
    .orderBy("Date desc")
    .orderBy("Created asc")

    ;