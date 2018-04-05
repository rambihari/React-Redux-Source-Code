import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const childs = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House',
    dob: '12/04/1992',
    gender: 'Male',
    age: '12'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen',
    dob: '12/04/1992',
    gender: 'Male',
    age: '12'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin',
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
           child.id = child.firstName.toLowerCase() + '-' + child.lastName.toLowerCase();
           childs.push(child);
        resolve(child);
    });
  }

  static deletechild(childId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfchildToDelete = childs.findIndex(child => {
          child.id == childId;
        });
        childs.splice(indexOfchildToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default childApi;
