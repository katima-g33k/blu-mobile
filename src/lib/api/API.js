const call = async (url, method, body) => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Authorization': 'apikey',
      Authorization: 'Basic SmVzc3k6YTAwNDY4MTdhOTAyNzQ4YmE5NDg=',
    },
    body: body && JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const HTTP = {
  delete: url => call(url, 'DELETE'),
  get: url => call(url, 'GET'),
  post: (url, body) => call(url, 'POST', body),
};

class API {
  constructor(url) {
    this.apiUrl = url;
  }

  item = {
    get: id => HTTP.get(`${this.apiUrl}/item/${id}`),
  }

  member = {
    login: (email, password) => HTTP.post(`${this.apiUrl}/member/login`, { email, password }),
    get: no => HTTP.get(`${this.apiUrl}/member/${no}`),
  }
}

export default new API('http://192.168.1.16/blu-api/src/server/index.php');
