import request from './request.js'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(data) {
  return request({
    url: '/subcategory',
    data
  })
}

export function getCategoryDetail(data) {
  return request({
    url: '/subcategory/detail',
    data
  })
}