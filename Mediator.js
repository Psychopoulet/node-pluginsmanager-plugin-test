
"use strict";

// deps

	const { Mediator } = require("node-pluginsmanager-plugin");

// module

module.exports = class MediatorPluginsManagerPluginTest extends Mediator {

	_initWorkSpace (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Mediator] - init" + (data ? " with \"" + data + "\" data" : "")
		);

		return Promise.resolve();

	}

	_releaseWorkSpace (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Mediator] - release" + (data ? " with \"" + data + "\" data" : "")
		);

		return Promise.resolve();

	}

	test () {
		return Promise.resolve();
	}

};
