import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse:false,
    stages: [
        {duration: '5m', target: 100}, 
        {duration: '10m', target: 100},
        {duration: '5m', target: 0}, 
    ]

};

export default () => {
    http.get('http://localhost:9000');
    sleep(2);
  }
