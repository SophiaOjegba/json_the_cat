const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');


describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      console.log("This is description:", desc)
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('aege', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.";

      // compare returned description
      console.log("This is description:", desc)
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});