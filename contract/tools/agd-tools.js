import { unsafeMakeBundleCache } from '@agoric/swingset-vat/tools/bundleTool.js';
import { makeE2ETools } from './e2e-tools.js';

/**
 * @deprecated dead code?
 */
export const makeAgdTools = async (log, { execFile, execFileSync }) => {
  const bundleCache = await unsafeMakeBundleCache('bundles');
  const tools = await makeE2ETools(log, bundleCache, {
    execFileSync,
    execFile,
    fetch,
    setTimeout,
  });
  return tools;
};
