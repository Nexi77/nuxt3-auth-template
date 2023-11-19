import type { FetchContext } from 'ofetch';
import type { ApiModel } from '~/types/composables';

export const useApi = () =>
{
    const { public: { apiUrl } } = useRuntimeConfig();
    const headers = ref<Record<string, string>>({});

    const catchErrors = async ({ request, response }: FetchContext): Promise<void> =>
    {
        if (response && response?.status >= 500)
        {
            let headers = {};

            response.headers.forEach((value: string, key: string) =>
            {
                headers = { ...headers, ...{ [key]: value } };
            });

            const body = response._data.constructor.name === 'Blob' ? await response._data.text() : response._data;

            console.error(response.statusText, {
                url: request,
                status: response.status,
                headers,
                response: body
            });
        }

        if (response && response.status === 404)
        {
            throw createError({ statusCode: 404, statusMessage: 'Page not found' });
        }
    };

    const fetch = async <T>(url: string, options: any): Promise<T> =>
    {
        try
        {
            if (!apiUrl)
                throw new Error(`ApiHelper: Cannot fetch url "${url}" because baseUrl is empty.`);

            const { data, error } = await useFetch(url, { baseURL: apiUrl, ...options, headers: headers.value });

            if (error.value !== null)
            {
                throw error.value;
            }

            return data.value as T;
        }
        catch (ex)
        {
            catchErrors(ex as FetchContext);

            throw ex;
        }
    };

    const api = ref<ApiModel>({
        async get<T>(url: string, params: Record<string, any> = {}): Promise<T>
        {
            return await fetch<T>(url, { params });
        },
        async post<T>(url: string, body: Record<string, any>): Promise<T>
        {
            return await fetch<T>(url, { method: 'POST', body });
        },
        async put<T>(url: string, body: Record<string, any> = {}): Promise<T>
        {
            return await fetch<T>(url, { method: 'PUT', body });
        },
        async delete<T>(url: string, params: Record<string, any>): Promise<T>
        {
            return await fetch<T>(url, { method: 'DELETE', params });
        },
        setHeader(newHeaders: Record<string, string>): void
        {
            headers.value = { ...headers.value, ...newHeaders };
        },
        deleteHeader(headerName: string): void
        {
            delete headers.value[headerName];
        }
    });

    return api.value;
};
