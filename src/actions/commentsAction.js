import axios from 'axios';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function getComments(id) {

const request = axios.get('http://localhost:3000/userBizs/id');
console.log(request);
  return {
    type: FETCH_COMMENTS,
    payload: request
    };
}