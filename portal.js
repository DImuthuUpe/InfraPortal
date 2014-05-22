var config;
(function () {
    config = function () {
        var log = new Log(),
            
            config = require('/portal.json'),
            process = require('process'),
            localIP = "localhost",
            httpPort = process.getProperty('http.port'),
            httpsPort = "9443";

        
       // log.info(config);
        return config;
    };
})();