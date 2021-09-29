import { Moment } from 'moment';
import { Filter } from './Filter';
/**
 * Advanced filter for date fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export declare class DateFilter extends Filter {
    equal?: Moment;
    notEqual?: Moment;
    greater?: Moment;
    greaterEqual?: Moment;
    less?: Moment;
    lessEqual?: Moment;
    range?: [Moment | null, Moment | null];
    constructor(partial?: Partial<DateFilter>);
}
