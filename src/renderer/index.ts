import Workspace from './workspace';
import { DEVMODE } from '../utils/environment';
import { ViewType } from './view/index';
// import * as path from 'path';

const opts = {
  filePath: 'src/xi/plugins/xi_plugin/cache.py',
  coreOptions: {
    // TODO: XI_RPC_LOG ?
    env: Object.assign({ RUST_BACKTRACE: 1 }, process.env),
    // configDir: path.resolve(__dirname, '..', '..', 'config'),
  },
  viewOptions: {
    type:          ViewType.Canvas,
    gutterPadding: [40, 0],
    scrollPastEnd: true
  }
};

const workspace = new Workspace(document.body, opts);

if (DEVMODE) {
  // Attach core and workspace to window for easy debugging.
  (<any>window).Core = require('./core').default;
  (<any>window).workspace = workspace;
  // Show current view type in title for clarity.
  document.title += ` -- ViewType: ${opts.viewOptions.type}`;
}
