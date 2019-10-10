
"use strict";

// deps

	const { Server } = require("node-pluginsmanager-plugin");

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

};
