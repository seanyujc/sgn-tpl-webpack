import ngb = require("ng-bases");

const apiConfig = function(apiConfigProvider: ngb.IApiConfigProvider){
    apiConfigProvider.hosts ={
        "apiUser": {dir: '/user/app'}
    }
    apiConfigProvider.get = {
        "fetchUserInfo": "apiUser:/user/info", //?openId
    }
}
apiConfig.$inject = ['apiConfigProvider']

export default apiConfig;