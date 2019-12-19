/*******************************************************************************
  hi
--------------------------------------------------------------------------------
  A simple helper for logging notable messages to the console.
*******************************************************************************/

/// flag ///
export const flag = (method, message) => {
  console[method] (`>>> ${message} <<<`);
}

/**************************************/

export default {
  flag,
};
