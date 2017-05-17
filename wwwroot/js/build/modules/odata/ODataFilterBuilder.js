define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComparisonOperator;
    (function (ComparisonOperator) {
        ComparisonOperator[ComparisonOperator["equals"] = 0] = "equals";
        ComparisonOperator[ComparisonOperator["greaterThan"] = 1] = "greaterThan";
        ComparisonOperator[ComparisonOperator["greaterThanOrEquals"] = 2] = "greaterThanOrEquals";
        ComparisonOperator[ComparisonOperator["lessThan"] = 3] = "lessThan";
        ComparisonOperator[ComparisonOperator["lessThanOrEquals"] = 4] = "lessThanOrEquals";
        ComparisonOperator[ComparisonOperator["notEquals"] = 5] = "notEquals";
        ComparisonOperator[ComparisonOperator["contains"] = 6] = "contains";
    })(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
    var FilterBuilder = (function () {
        function FilterBuilder() {
            this._expressions = [];
        }
        FilterBuilder.prototype.append = function (expression) {
            if (expression)
                this._expressions.push(expression.toString());
            return this;
        };
        FilterBuilder.prototype.appendString = function (fieldName, operator, value) {
            return this;
        };
        FilterBuilder.prototype.toString = function () {
            return "";
        };
        return FilterBuilder;
    }());
    function filterBuilder() {
        return new FilterBuilder();
    }
    exports.default = filterBuilder;
});
//# sourceMappingURL=ODataFilterBuilder.js.map