
class ApiClient {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }

    async request(endpoint, method='GET' ,body=null, headers = {}){
        const token = useAuthStore.getState().token;

        const config = {
            method,
            headers : {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
                ...headers,
            },
        };
    
        if(body) config.body = JSON.stringify(body)

        const response = await fetch(`${this.baseUrl}${endpoint}`, config)
        const contentType = response.headers.get('content-type');
        const data = contentType?.includes('application/json') ? await response.json() : await response.text();
    
        if (!response.ok) {
          throw new Error(data?.message || `Error ${response.status}`);
        }
    
        return data;
        
    
    }


  get(endpoint, headers = {}) { return this.request(endpoint, 'GET', null, headers); }
  post(endpoint, body, headers = {}) { return this.request(endpoint, 'POST', body, headers); }
  put(endpoint, body, headers = {}) { return this.request(endpoint, 'PUT', body, headers); }
  patch(endpoint, body, headers = {}) { return this.request(endpoint, 'PATCH', body, headers); }
  delete(endpoint, headers = {}) { return this.request(endpoint, 'DELETE', null, headers); }

}
export default ApiClient;
