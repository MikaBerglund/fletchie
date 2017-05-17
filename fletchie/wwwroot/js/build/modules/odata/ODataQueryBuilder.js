define(["require", "exports", "./ODataFilterBuilder"], function (require, exports, ODataFilterBuilder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InlineCountMode;
    (function (InlineCountMode) {
        InlineCountMode[InlineCountMode["No"] = 0] = "No";
        InlineCountMode[InlineCountMode["AllPages"] = 1] = "AllPages";
    })(InlineCountMode = exports.InlineCountMode || (exports.InlineCountMode = {}));
    var QueryBuilder = (function () {
        function QueryBuilder(baseUrl) {
            this._expands = [];
            this._filters = [];
            this._orderBys = [];
            this._selects = [];
            this._baseUrl = baseUrl;
        }
        QueryBuilder.prototype.expand = function () {
            var expressions = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                expressions[_i] = arguments[_i];
            }
            (_a = this._expands).push.apply(_a, expressions);
            return this;
            var _a;
        };
        QueryBuilder.prototype.filter = function (expression) {
            this._filters.push(expression.toString());
            return this;
        };
        QueryBuilder.prototype.filterString = function (fieldName, operator, value) {
            this.filter(ODataFilterBuilder_1.default().appendString(fieldName, operator, value));
            return this;
        };
        QueryBuilder.prototype.inlineCount = function (mode) {
            this._inlineCount = mode;
            return this;
        };
        QueryBuilder.prototype.orderBy = function () {
            var expressions = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                expressions[_i] = arguments[_i];
            }
            return this;
        };
        QueryBuilder.prototype.select = function () {
            var expressions = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                expressions[_i] = arguments[_i];
            }
            (_a = this._selects).push.apply(_a, expressions);
            return this;
            var _a;
        };
        QueryBuilder.prototype.skip = function (count) {
            this._skip = count;
            return this;
        };
        QueryBuilder.prototype.top = function (count) {
            this._top = count;
            return this;
        };
        QueryBuilder.prototype.toString = function (baseUrl) {
            var parts = [];
            var addPart = function (name, value) {
                parts.push("$" + name + "=" + value);
            };
            if (this._top)
                addPart("top", this._top);
            if (this._skip)
                addPart("skip", this._skip);
            if (this._expands)
                addPart("expand", this._expands.join(","));
            if (this._selects)
                addPart("select", this._selects.join(","));
            return baseUrl || this._baseUrl;
        };
        return QueryBuilder;
    }());
    function queryBuilder(baseUrl) {
        return new QueryBuilder(baseUrl);
    }
    exports.default = queryBuilder;
});
//# sourceMappingURL=ODataQueryBuilder.js.map