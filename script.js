import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let options = {
  thresholds: {
    'failed requests': ['rate<0.01'],
  },
  stages: [
    { duration: '60s', target: 1 },
    { duration: '60s', target: 10 },
    { duration: '60s', target: 100 },
    { duration: '60s', target: 1000 }
  ],
  vusMax: 1000
};

export default function() {
  const randomSeller = () => {
    return Math.floor(Math.random() * 10000000);
  }
  const randomEndpoint = () => {
    return `http://localhost:5000/api/seller/${randomSeller()}`;
  };

  let res = http.get(randomEndpoint());
}