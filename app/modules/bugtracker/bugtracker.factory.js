/**
 * API DOCUMENTATION
 * https://github.com/typicode/json-server
 *
 * data - local file - bugs.json
 * API endpoint - http://localhost:3000/bugs
 * NOTE - must be running json-server to reach endpoint
 *
 */
function BugsService($http) {

  /**
   * create new
   * POST    /bugs
   *
   * @param payload {object}
   * @returns {Promise}
   */
  function create(payload) {
    // DONE - use POST to create new bug
    return $http({
      url: 'http://localhost:3000/bugs',
      method: 'POST',
      data: payload
    })
    .then(response => response.data)
  }

  /**
   * delete single by id
   * DELETE    /bugs/:id
   *
   * @param id {Number}
   * @returns {Promise}
   */
  function del(id) {
    // DONE - use DELETE to remove a bug
    return $http({
      url: `http://localhost:3000/bugs/${id}`,
      method: 'DELETE'
    })
  }

  /**
   * get full list
   * GET    /bugs
   *
   * @returns {Promise}
   */
  function get() {
    return $http({
      url: 'http://localhost:3000/bugs',
      method: 'GET',
      dataType: 'json',
    }).then((response) => {
      return response.data;
    });
  }

  /**
   *
   * @param payload {object}
   * @returns {Promise}
   */
  function update(payload) {
    // TODO - update single bug
  }

  return {
    create: create,
    delete: del,
    get: get,
    update: update
  }
}

export default BugsService;
