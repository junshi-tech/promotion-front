var Utiles = {
  /**
   * 获取链接参数
   */
  getParams: function() {
    var query = location.search.substr(1);
    query = query.split('&');
    var params = {};
    for (let i = 0; i < query.length; i++) {
      let q = query[i].split('=');
      if (q.length === 2) {
        params[q[0]] = q[1];
      }
    }
    return params;
  },

  /**
   * 异步请求
   * @param url
   * @param headers
   * @return {IterableIterator<*>}
   * @private
   */
  _get: function* (url, headers = {}) {
    return yield fetch(url, headers);
  },

  /**
   * 请求链接
   * @param url
   * @param callback
   * @param headers
   */
  query: function (url, callback, headers = {}) {
    let g = this._gen(url, headers);
    let result = g.next();

    result.value.then(function(data){
      data.json().then(callback, error => { throw error; });
    }).then(function(data){
      g.next(data);
    });
  }
};
export default Utiles;
