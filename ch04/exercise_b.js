// Refactor to remove all arguments by partially applying the functions.

// filterQs :: [String] -> [String]
/*
 * Original implementation
 * const filterQs = xs => filter(x => x.match(/q/i), xs);
 */

const filterQs = filter(match(/q/i));
