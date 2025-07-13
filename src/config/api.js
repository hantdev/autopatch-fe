export const API_CONFIG = {
  BASE_URL: 'https://seviux19m7.execute-api.us-east-1.amazonaws.com/prod',
  ENDPOINTS: {
    FETCH_OS_INFO: '/fetch-os-info',
    PARSE_CVE: '/parse-cve'
  }
};

export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
}; 