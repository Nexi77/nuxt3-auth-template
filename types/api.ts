export interface Tokens {
    access_token: string;
    refresh_token: string;
};

export interface ValidationMessageObject {
    property: string;
    message: string;
}

export interface FetchErrorWithMessage {
    statusCode: number;
    statusMessage: string;
    data: {
        message?: ValidationMessageObject[] | string;
        error: string;
        statusCode: number;
    }
}
