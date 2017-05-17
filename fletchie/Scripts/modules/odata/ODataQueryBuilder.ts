import { IFilterBuilder, ComparisonOperator } from "./ODataFilterBuilder";
import filterBuilder from "./ODataFilterBuilder";

export enum InlineCountMode {
    No = 0,
    AllPages = 1
}

export interface IQueryBuilder {
    expand(...expressions: string[]): IQueryBuilder;
    filter(expression: string | IFilterBuilder): IQueryBuilder;
    filterString(fieldName: string, operator: ComparisonOperator, value: string): IQueryBuilder
    inlineCount(mode?: InlineCountMode): IQueryBuilder;
    orderBy(...expressions: string[]): IQueryBuilder;
    select(...expressions: string[]): IQueryBuilder;
    skip(count?: number): IQueryBuilder;
    top(count?: number): IQueryBuilder;
    toString(baseUrl?: string): string;
}

class QueryBuilder implements IQueryBuilder {
    constructor(baseUrl?: string) {
        this._baseUrl = baseUrl;
    }

    _baseUrl: string;

    _expands: string[] = [];
    _filters: string[] = [];
    _inlineCount: InlineCountMode;
    _orderBys: string[] = [];
    _selects: string[] = [];
    _skip: number;
    _top: number;

    expand(...expressions: string[]): IQueryBuilder {
        this._expands.push(...expressions);
        return this;
    } 

    filter(expression: string | IFilterBuilder): IQueryBuilder {
        this._filters.push(expression.toString());
        return this;
    }

    filterString(fieldName: string, operator: ComparisonOperator, value: string): IQueryBuilder {
        this.filter(filterBuilder().appendString(fieldName, operator, value));
        return this;
    }

    inlineCount(mode?: InlineCountMode): IQueryBuilder {
        this._inlineCount = mode;
        return this;
    }

    orderBy(...expressions: string[]): IQueryBuilder {

        return this;
    }

    select(...expressions: string[]): IQueryBuilder {
        this._selects.push(...expressions);
        return this;
    }

    skip(count?: number): IQueryBuilder {
        this._skip = count;
        return this;
    }

    top(count?: number): IQueryBuilder {
        this._top = count;
        return this;
    }

    toString(baseUrl?: string): string {

        var parts: string[] = [];

        var addPart = function (name: string, value: any) {
            parts.push("$" + name + "=" + value);
        };

        if (this._top) addPart("top", this._top);
        if (this._skip) addPart("skip", this._skip);
        if (this._expands) addPart("expand", this._expands.join(","));
        if (this._selects) addPart("select", this._selects.join(","));

        return baseUrl || this._baseUrl;
    }

}

export default function queryBuilder(baseUrl?: string): IQueryBuilder {
    return new QueryBuilder(baseUrl);
}
