type MakeRequestParams<BodyType> = {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    body?: BodyType;
    headers?: HeadersInit;
};

export function buildRequestOptions<BodyType = unknown>(
    options?: MakeRequestParams<BodyType>,
): RequestInit {
    return {
        method: options?.method ?? 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options?.body) : undefined,
    } satisfies RequestInit;
}
