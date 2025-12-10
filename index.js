// index.js
'use strict';

// Export for Node.js
module.exports = (function() {
    'use strict';
    
    // Your complete TBBA.js code here
    // Copy ALL the code from your TBBA.js file exactly as it is
    
    // But modify the very end to export for Node.js
    return {
        version: TBBA.VERSION,
        author: TBBA.AUTHOR,
        copyright: TBBA.COPYRIGHT,
        license: TBBA.LICENSE,
        config: TBBA,
        // Add any other exports you want
        utils: Utils,
        API: API
    };
})();