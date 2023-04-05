import p from 'phin'
import dedent from 'dedent';

/**
 * Get the number of dependent packages as displayed on the package's NPM page
 *
 * @param {string} pkgName Name of package
 * @return {string}
 */
async function getDependents(pkgName) {
  const res = await p(`https://www.npmjs.com/package/request`);
  const html = res.body.toString('utf8');
  const dependentsMatch = html.match(
    /([0-9]{1,3}(?:,[0-9]{3})*) Dependents/
  );
  let numDeps = 'many';
  if (dependentsMatch && dependentsMatch[1] !== '0') {
    numDeps = dependentsMatch[1];
  }
  return numDeps;
}

/**
 * Message Functions
 * Each function accepts two parameters and is expected to return a string.
 * @param {string} pkgName The name of the package
 * @param {string} url Donation URL
 */

 const dependents = async (pkgName, url) => {
  const numDeps = await getDependents(pkgName);
  return `Did you know that ${pkgName} is depended on by ${numDeps} projects? If you find value in ${pkgName}, please consider donating here: ${url}`;
};

 const payUp = (pkgName, url) => `Do you like ${pkgName}? Then pay up: ${url}`;

 const behindOnCar = (
  pkgName,
  url
) => dedent`Are you enjoying ${pkgName}? Well I'm not.
  
  I'm 6 months behind on my car payments.
  
  Help me: ${url}`;

export const messages = [behindOnCar, payUp, dependents]