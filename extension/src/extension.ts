import { ExtensionContext } from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  console.log("--- ValuaScript Extension Activation ---");

  const args = ["--lsp"];

  const command = "vsc";

  let serverOptions: ServerOptions = {
    run: {
      command,
      args,
      options: { shell: true },
    },
    debug: {
      command,
      args,
      options: { shell: true },
    },
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "valuascript" }],
  };

  client = new LanguageClient(
    "valuascriptLanguageServer",
    "ValuaScript Language Server",
    serverOptions,
    clientOptions
  );

  console.log(
    `Starting language server with command: ${command} ${args.join(" ")}`
  );
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
