import type { FetchErrorWithMessage, ValidationMessageObject } from '~/types/api';

export const useCustomError = (error: FetchErrorWithMessage) =>
{
    const errorMessage = error.data?.message || '';
    const messagesAreValidationObject = (messages: ValidationMessageObject[] | undefined | string): messages is ValidationMessageObject[] =>
    {
        return Array.isArray(messages);
    };

    if (messagesAreValidationObject(error.data.message))
    {
        const messages: Record<string, string> = {};

        error.data.message.forEach((message) =>
        {
            messages[message.property] = message.message;
        });

        return { message: '', formErrors: error.data.message, formFormattedMessages: messages };
    }

    return { message: errorMessage, formErrors: [], formFormattedMessages: {} };
};
