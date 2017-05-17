define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueryBuilder = (function () {
        function QueryBuilder(baseUrl) {
            this._expands = {};
            this._filters = [];
            this._baseUrl = baseUrl;
        }
        QueryBuilder.prototype.expand = function (value) {
            if (value)
                this._expands[value] = value;
            return this;
        };
        QueryBuilder.prototype.filter = function (value) {
            this._filters.push(value.toString());
            return this;
        };
        return QueryBuilder;
    }());
    function queryBuilder(baseUrl) {
        return new QueryBuilder(baseUrl);
    }
    exports.default = queryBuilder;
});
//# sourceMappingURL=ODataQueryBuilder.js.map