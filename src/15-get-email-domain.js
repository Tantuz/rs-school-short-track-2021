/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const mutableEmail = email;
  const newEmail = mutableEmail.split('@');
  const domainName = newEmail[newEmail.length - 1];
  return domainName;
}

module.exports = getEmailDomain;
