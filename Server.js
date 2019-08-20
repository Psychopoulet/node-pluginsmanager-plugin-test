
"use strict";

// deps

	const { Server } = require("node-pluginsmanager-plugin");

// consts

	const REQUEST_PATHNAME = "/node-pluginsmanager-plugin-test/api/test";
	const RESPONSE_CODE = 200;
	const RESPONSE_CONTENT = "Hello World";

// module

module.exports = class ServerPluginsManagerPluginTest extends Server {

	_initWorkSpace (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Server] - init" + (data ? " with \"" + data + "\" data" : "")
		);

		return Promise.resolve();

	}

	_releaseWorkSpace (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Server] - release" + (data ? " with \"" + data + "\" data" : "")
		);

		return Promise.resolve();

	}

	appMiddleware (req, res, next) {

		const { pathname } = parse(req.url);

		if (REQUEST_PATHNAME === pathname && "get" === req.method.toLowerCase()) {

			res.writeHead(RESPONSE_CODE, {
				"Content-Type": "text/plain; charset=utf-8"
			});

			res.end(RESPONSE_CONTENT);

			return null;

		}
		else {
			return next();
		}

	}

	httpMiddleware (req, res) {

		const { pathname } = parse(req.url);

		if (REQUEST_PATHNAME === pathname && "get" === req.method.toLowerCase()) {

			res.writeHead(RESPONSE_CODE, {
				"Content-Type": "text/plain; charset=utf-8"
			});

			res.end(RESPONSE_CONTENT);

			return true;

		}

		return false;

	}

};
