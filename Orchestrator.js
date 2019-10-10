
"use strict";

// deps

	// natives
	const { join } = require("path");

	// externals
	const { Orchestrator } = require("node-pluginsmanager-plugin");

// module

module.exports = class OrchestratorPluginsManagerPluginTest extends Orchestrator {

	constructor (options) {

		const opt = options || {};

			opt.packageFile = join(__dirname, "package.json");
			opt.descriptorFile = join(__dirname, "Descriptor.json");
			opt.mediatorFile = join(__dirname, "Mediator.js");
			opt.serverFile = join(__dirname, "Server.js");

		super(opt);

	}

	_initWorkSpace (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Orchestrator] - init" + (data ? " with \"" + data + "\" data" : "")
		);

	}

	_releaseWorkSpace (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Orchestrator] - release" + (data ? " with \"" + data + "\" data" : "")
		);

	}

	install (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Orchestrator] - install" + (data ? " with \"" + data + "\" data" : "")
		);

	}

	update (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Orchestrator] - update" + (data ? " with \"" + data + "\" data" : "")
		);

	}

	uninstall (data) {

		(0, console).log(
			" => [PluginsManagerPluginTest|Orchestrator] - uninstall" + (data ? " with \"" + data + "\" data" : "")
		);

	}

};
