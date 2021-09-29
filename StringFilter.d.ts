import { Filter } from './Filter';
/**
 * Advanced filter for string fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export declare class StringFilter extends Filter {
    startWith?: string;
    notStartWith?: string;
    endWith?: string;
    notEndWith?: string;
    equal?: string;
    notEqual?: string;
    contain?: string;
    notContain?: string;
    constructor(partial?: Partial<StringFilter>);
}
