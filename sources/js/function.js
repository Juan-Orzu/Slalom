!function(t){
    "use strict";var n=Element.prototype,e=NodeList.prototype,r=String.prototype;function o(t,e){e=e||{bubbles:!1,cancelable:!1,detail: null
        };var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n
    }n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest||(n.closest=function(t){var e=this;do{if(n.matches.call(e,t))return e
        }while(null!==(e=e.parentElement||e.parentNode)&&1===e.nodeType);return null
    }),t.NodeList&&!e.forEach&&(e.forEach=Array.prototype.forEach),
    "function"!=typeof Object.assign&&Object.defineProperty(Object,
    "assign",
    {value:function(t,e){if(null===t||"undefined"===t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var o=arguments[r
                ];if(null!==o&&"undefined"!==o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c
                ]=o[c
                ])
            }return n
        },writable:!0,configurable:!0
    }),r.startsWith||Object.defineProperty(r,
    "startsWith",
    {value:function(t,e){e=0<e?0|e: 0;return this.substring(e,e+t.length)===t
        }
    }),
    "function"!=typeof t.CustomEvent&&(o.prototype=t.Event.prototype,t.CustomEvent=o)
}(this);