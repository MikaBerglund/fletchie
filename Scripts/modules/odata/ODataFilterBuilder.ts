
export enum ComparisonOperator {
    equals = 0,
    greaterThan = 1,
    greaterThanOrEquals = 2,
    lessThan = 3,
    lessThanOrEquals = 4,
    notEquals = 5,
    contains = 6
}

export interface IFilterBuilder {
    append(expression: string | IFilterBuilder): IFilterBuilder;
    appendString(fieldName: string, operator: ComparisonOperator, value: string): IFilterBuilder
    toString(): string;
}


class FilterBuilder implements IFilterBuilder {

    _expressions: string[] = [];
    append(expression: string | IFilterBuilder): IFilterBuilder {
        if (expression) this._expressions.push(expression.toString());
        return this;
    }

    appendString(fieldName: string, operator: ComparisonOperator, value: string): IFilterBuilder {

        return this;
    }

    toString(): string {


        return "";
    }
}

export default function filterBuilder(): IFilterBuilder {
    return new FilterBuilder();
}