
"use strict";

// deps

	const { Server } = require("node-pluginsmanager-plugin");

// module

module.exports = class ServerPluginsManagerPluginTest extends Server {

	init (data) {

		return super.init(data).then(() => {

			(0, console).log(
				" => [PluginsManagerPluginTest|Server] - init" + (data ? " with \"" + data + "\" data" : "")
			);

			return Promise.resolve();

		});

	}

	release (data) {

		return super.release().then(() => {

			(0, console).log(
				" => [PluginsManagerPluginTest|Server] - release" + (data ? " with \"" + data + "\" data" : "")
			);

			return Promise.resolve();

		});

	}

};
