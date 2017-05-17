import { IFilterBuilder } from "./ODataFilterBuilder";
export interface IQueryBuilder {
    expand(value: string): IQueryBuilder;
    filter(value: string | IFilterBuilder): IQueryBuilder;
}
export default function queryBuilder(baseUrl?: string): IQueryBuilder;
