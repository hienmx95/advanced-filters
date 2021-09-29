import { Filter } from './Filter';
/**
 * Advanced filter for number fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export declare class NumberFilter extends Filter {
    equal?: number;
    notEqual?: number;
    greater?: number;
    greaterEqual?: number;
    less?: number;
    lessEqual?: number;
    range?: [number | undefined, number | undefined];
    constructor(partial?: Partial<NumberFilter>);
}
