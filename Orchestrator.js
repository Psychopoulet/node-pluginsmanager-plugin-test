
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
		opt.mediatorFile = join(__dirname, "Mediator.js");
		opt.serverFile = join(__dirname, "Server.js");

		super(opt);

	}

	// load

	loadDataFromPackageFile () {

		return super.loadDataFromPackageFile().then(() => {

			(0, console).log(" => [PluginsManagerPluginTest|Orchestrator] - loadDataFromPackageFile");

			return Promise.resolve();

		});

	}

	init (data) {

		return super.init(data).then(() => {

			(0, console).log(" => [PluginsManagerPluginTest|Orchestrator] - init" + (data ? " with \"" + data + "\" data" : ""));

			return Promise.resolve();

		});

	}

	release (data) {

		return super.release().then(() => {

			(0, console).log(" => [PluginsManagerPluginTest|Orchestrator] - release" + (data ? " with \"" + data + "\" data" : ""));

			return Promise.resolve();

		});

	}

	// write

	install (data) {

		return super.install().then(() => {

			(0, console).log(" => [PluginsManagerPluginTest|Orchestrator] - install" + (data ? " with \"" + data + "\" data" : ""));

			return Promise.resolve();

		});

	}

	update (data) {

		return super.update().then(() => {

			(0, console).log(" => [PluginsManagerPluginTest|Orchestrator] - update PluginsManagerPluginTest" + (data ? " with \"" + data + "\" data" : ""));

			return Promise.resolve();

		});

	}

	uninstall (data) {

		return super.uninstall().then(() => {

			(0, console).log(" => [PluginsManagerPluginTest|Orchestrator] - install PluginsManagerPluginTest" + (data ? " with \"" + data + "\" data" : ""));

			return Promise.resolve();

		});

	}

};
