export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'ejs-scoutmaster.herokuapp.com':
    APIURL = 'https://ejs-scoutmaster-server.herokuapp.com'
    break;
  default:
    APIURL = 'http://localhost:3000';
}