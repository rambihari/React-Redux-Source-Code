import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let childs = [
  {
    id: 'Michelle-Obama',
    firstName: 'Michelle',
    lastName: 'Obama',
    dob: '09/28/1974',
    gender: 'Female',
    age: '42'
  },
  {
    id: 'Alex-Moxgod',
    firstName: 'Alex',
    lastName: 'Moxgod',
    dob: '08/12/1982',
    gender: 'Male',
    age: '31'
  },
  {
    id: 'rambihari-raman',
    firstName: 'Rambihari',
    lastName: 'raman',
    dob: '12/04/1992',
    gender: 'Male',
    age: '12'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (child) => {
  return child.firstName.toLowerCase() + '-' + child.lastName.toLowerCase();
};

class childApi {

  static getAllchilds() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], childs));
      }, delay);
    });
  }

  static savechild(child) {
	child = Object.assign({}, child); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minchildNameLength = 3;
        if (child.firstName.length < minchildNameLength) {
          reject(`First Name must be at least ${minchildNameLength} characters.`);
        }

        if (child.lastName.length < minchildNameLength) {
          reject(`Last Name must be at least ${minchildNameLength} characters.`);
        }

        if (child.id) {
          const existingchildIndex = childs.findIndex(a => a.id == child.id);
          childs.splice(existingchildIndex, 1, child);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new childs in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          child.id = generateId(child);
          childs.push(child);
        }

        resolve(child);
      }, delay);
    });
  }


  static deletechild(children) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let newChild = childs.filter(child => child.id !== children.id);
        childs = newChild;
        resolve(children);
      }, delay);
    });
  }
}

export default childApi;
