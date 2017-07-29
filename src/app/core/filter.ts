// tslint:disable:only-arrow-functions
// tslint:disable:space-before-function-paren

export default (app: ng.IModule) => {
  app
    // 显示倒计时 参数时间戳
    .filter("timepiece", function () {
      return function (endTime: number, format: string, now = new Date().getTime(), pad = false) {
        let _t = endTime - now, _dd = "00", _hh = "00", _mm = "00", _ss = "00", _sss = "000", _m, obj = {};
        if (_t < 0) { return "00:00:00"; }
        if (_t > 0) {
          _m = _t / (24 * 3600 * 1000);
          _dd = Math.floor(_m).toString();
          _m = _t % (24 * 3600 * 1000) / (3600 * 1000);
          _hh = Math.floor(_m).toString();
          _m = _t % (3600 * 1000) / (60000);
          _mm = Math.floor(_m).toString();
          _m = _t % (60000) / 1000;
          _ss = Math.floor(_m).toString();
          _sss = (_t % 1000).toString();
          if (pad) {
            _dd = _dd.length === 1 ? 0 + _dd : _dd;
            _hh = _hh.length === 1 ? 0 + _hh : _hh;
            _mm = _mm.length === 1 ? 0 + _mm : _mm;
            _ss = _ss.length === 1 ? 0 + _ss : _ss;
            _sss = _sss.length === 1 ? 0 + _sss : _sss;
          }
        }
        obj["dd"] = _dd, obj["hh"] = _hh, obj["mm"] = _mm, obj["ss"] = _ss, obj["sss"] = _sss;
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const v = obj[key];
            const reg = new RegExp(key);
            format = format.replace(reg, v);
          }
        }
        return format;
      };
    })
    .filter("validPercent", function () {
      return function (percent: number) {
        if (percent > 100) {
          return 100;
        } else {
          return percent;
        }
      };
    });
};
