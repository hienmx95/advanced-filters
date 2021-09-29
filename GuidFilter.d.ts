import { Filter } from './Filter';
/**
 * Advanced filter for GUID key fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export declare class GuidFilter extends Filter {
    equal?: string;
    notEqual?: string;
    in?: string[];
    notIn?: string[];
    constructor(partial?: Partial<GuidFilter>);
}
