import { get, post, put, del } from '/src/services/http-service';

export async function search(params) {
  return await post('/api/properties/search', params);
}

export async function count(params, options) {
  return await post('/api/properties/count', params, options);
}

export async function getById(id, options) {
  return await get(`/api/properties/detail?id=${id}`, {}, options);
}

export async function update(params) {
  return await put('/api/properties/update', params);
}

export async function save(params) {
  return await post('/api/properties/create', params);
}

export async function remove(id, options) {
  return await del(`/api/properties/delete?id=${id}`, {}, options);
}
