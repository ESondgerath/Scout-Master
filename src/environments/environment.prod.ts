export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'eja-scoutmaster.herokuapp.com':
    APIURL = 'https://eja-scoutmaster-server.herokuapp.com'
    break;
  default:
    APIURL = 'http://localhost:3000';
}