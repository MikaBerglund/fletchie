import { IFilterBuilder } from "./ODataFilterBuilder";

export interface IQueryBuilder {
    expand(value: string): IQueryBuilder;
    filter(value: string | IFilterBuilder): IQueryBuilder;
}

class QueryBuilder implements IQueryBuilder {
    constructor(baseUrl?: string) {
        this._baseUrl = baseUrl;
    }

    _baseUrl: string;

    _expands = {};
    _filters: string[] = [];

    expand(value: string): IQueryBuilder {
        if(value) this._expands[value] = value;
        return this;
    } 

    filter(value: string | IFilterBuilder): IQueryBuilder {
        this._filters.push(value.toString());

        return this;
    }
}

export default function queryBuilder(baseUrl?: string): IQueryBuilder {
    return new QueryBuilder(baseUrl);
}
