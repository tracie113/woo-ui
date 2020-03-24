import request from '@/utils/request'

export function getTest(params) {
  return request({
    url: '/user/hello',
    method: 'get'
  })
}

export function login(params) {
  return request({
    url: '/user/login',
    method: 'post',
    data: params
  })
}
