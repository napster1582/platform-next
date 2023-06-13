type MakeRequestParams<BodyType> = {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: BodyType;
    headers?: HeadersInit;
};

export const buildRequestOptions = <BodyType = {}>(
    options?: MakeRequestParams<BodyType>,
): RequestInit => {
    return {
        method: options?.method ?? 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options?.body) : undefined,
    } satisfies RequestInit;
};

export const handleResponse = async (
    response: Response,
    { onError, onSuccess }: { onError?: () => void; onSuccess?: () => void },
) => {
    const contentType = response.headers.get('content-type');

    if (!response.ok) {
        if (onError) {
            return onError();
        }

        throw new Error(await response.text());
    }

    if (onSuccess) {
        return onSuccess();
    } else {
        const isJsonResponse = contentType && contentType.includes('application/json');

        return isJsonResponse ? response.json() : response.text();
    }
};
