import { Filter } from './Filter';
/**
 * Advanced filter for ID key fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export declare class IdFilter extends Filter {
    equal?: number;
    notEqual?: number;
    in?: number[];
    notIn?: number[];
    constructor(partial?: Partial<IdFilter>);
}
