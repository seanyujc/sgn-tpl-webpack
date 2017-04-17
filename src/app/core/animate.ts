export default function(app: angular.IModule) {

  app.animation('.slide', ['$timeout', function($timeout: ng.ITimeoutService) {
    const times = .5;
    const animate: angular.animate.IAnimateCallbackObject = {
      enter: (element: JQuery, doneFunction: Function, options: angular.animate.IAnimationOptions) => {
        if (!element.parent().hasClass('back')) {
          element.css({
            animation: `fadeInLeft ${times}s`,
          });
        } else {
          element.css({
            animation: `fadeInRight ${times}s`,
          });
        }
      },
      leave: (element: JQuery, doneFunction: Function, options: angular.animate.IAnimationOptions) => {
        if (!element.parent().hasClass('back')) {
          element.css({
            animation: `fadeOutRight ${times}s`,
          });
        } else {
          element.css({
            animation: `fadeOutLeft ${times}s`,
          });
        }
        $timeout(times * 1000).then(() => {
          element.remove();
        });
      },
    };
    return animate;
  }]);
}
