type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    body?: unknown;
  };
  
  export async function fetchFromApi<T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${baseUrl}${endpoint}`;
  
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
  
    if (!response.ok) {
      // Better error handling: include status and message
      const error = await response.json();
      throw new Error(
        `Error ${response.status}: ${error.message || 'Unknown error'}`
      );
    }
  
    return response.json();
  }
  