import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1,
  duration: '20s',
  insecureSkipTLSVerify: true,
  noConnectionReuse:false
};

export default () => {
    http.get('http://localhost:9000');
    sleep(2);
  }
