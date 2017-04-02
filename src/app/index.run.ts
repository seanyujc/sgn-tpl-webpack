import * as ngb from 'ng-bases';
const run = function(serverConfig:ngb.IServerConfigProvider){
    console.log(serverConfig.protocol)
}
run.$inject =["serverConfig"]
export default run;
