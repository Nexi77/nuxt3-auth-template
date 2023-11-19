import type { FetchError } from 'ofetch';

export interface Tokens {
    access_token: string;
    refresh_token: string;
};

export type FetchErrorWithMessage = FetchError<{message: string}>
