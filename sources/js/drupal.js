Drupal.debounce=function(func,wait,immediate){var timeout;var result;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
var context=this;var later=function later(){timeout=null;if(!immediate){result=func.apply(context,args);}};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);}
return result;};};