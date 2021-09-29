import { Filter } from './Filter';
/**
 * Advanced filter for string fields
 *
 * @package react3l-advanced-filters
 * @see https://github.com/react3l/react3l-advanced-filters
 * @author thanhtunguet <ht@thanhtunguet.info>
 */
export class StringFilter extends Filter {
    constructor(partial) {
        super();
        if (partial) {
            Object.assign(this, partial);
        }
    }
}
