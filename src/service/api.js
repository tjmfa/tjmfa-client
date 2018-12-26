import { stringify } from 'qs';
import request from '../utils/request'

/**
 * 服务-获取原著列表
 * @param {Object} params 请求参数
 */
export async function queryBookList(params) {
  return request('tjmfaFunc', params);
}