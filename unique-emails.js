/**
 * numOfUniqueEmails
 *
 * @param {Array} emails
 * @returns {Array} uniqueEmails
 */
function numOfUniqueEmails(emails) {
  // create a uniqueEmails set
  const uniqueEmails = new Set();
  // for each email in emails
  for (let email of emails) {
    // create separate parts for the email
    let [localName, domainName] = email.split('@');
    // remove any "." characters from localName
    localName = localName.replace(/\./g, '');``
    // if a "+" character is in email
    if (localName.includes('+')) {
      const plusIdx = localName.indexOf('+');
      // remove all characters after the plus sign
      localName = localName.slice(0, plusIdx);
    }
    // join localName and domainName
    email = `${localName}@${domainName}`
    // add the email to the uniqueEmails set
    uniqueEmails.add(email);
  }

  // convert the uniqueEmails set to an array and return the array
  return [...uniqueEmails]
};

const emails = ["test.email+dkh@nolibs.io","test.e.mail+dan.hunter@nolibs.io","testemail+dave@no.libs.io"]

console.log(numOfUniqueEmails(emails)) // [ 'testemail@nolibs.io', 'testemail@no.libs.io' ] 