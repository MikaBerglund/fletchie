import { IFilterBuilder, ComparisonOperator } from "./ODataFilterBuilder";
export declare enum InlineCountMode {
    No = 0,
    AllPages = 1,
}
export interface IQueryBuilder {
    expand(...expressions: string[]): IQueryBuilder;
    filter(expression: string | IFilterBuilder): IQueryBuilder;
    filterString(fieldName: string, operator: ComparisonOperator, value: string): IQueryBuilder;
    inlineCount(mode?: InlineCountMode): IQueryBuilder;
    orderBy(...expressions: string[]): IQueryBuilder;
    select(...expressions: string[]): IQueryBuilder;
    skip(count?: number): IQueryBuilder;
    top(count?: number): IQueryBuilder;
    toString(baseUrl?: string): string;
}
export default function queryBuilder(baseUrl?: string): IQueryBuilder;
