const baseUrl = process.env.NODE_ENV === "production" 
? 'https://crokta.com' 
: 'http://localhost:3000';

export default baseUrl;