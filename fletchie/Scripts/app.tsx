import * as React from "react";
import * as ReactDOM from "react-dom";
import * as odata from "./modules/odata/OData";

odata.queryBuilder("http://services.odata.org/V3/OData/OData.svc/Products")
    ;

