import type { PageLoad } from './$types';

export const load: PageLoad = async ({url}) => {
    return {
        currentPath: url.pathname
    }
};