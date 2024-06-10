import utilsUmdConfig from "./utils-umd.config";
import utilsCjsConfig from "./utils-cjs.config";
import utilsEsmConfig from "./utils-es.config";

/**
 * @type {import('rollup').RollupOptions}
 */
export default [...utilsUmdConfig, ...utilsCjsConfig, ...utilsEsmConfig];
