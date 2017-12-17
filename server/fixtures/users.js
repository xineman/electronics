const User = require('../models/S_User');


async function usersFixture() {
  const usersMock = [
    {
      name: 'Yurii Hupalo',
      username: 'xineman',
      password: 'air228',
      email: 'uragupalo@gmail.com',
      phone: '+380668109707',
      address: 'Poltava, 9 Travnya, 23',
    },
    {
      name: 'John Smith',
      username: 'john',
      password: 'air228',
      email: 'uragupalo@gmail.com',
      phone: '+38048446',
      address: 'NYC, 1070 line, 658',
    },
    {
      name: 'Konstantin',
      username: 'kostya',
      password: 'air228',
      email: 'uragupalo@mail.ru',
      phone: '+380668109707',
      address: 'Poltava, 9 Travnya, 23',
    },
  ];
  const promises = [];
  for (const user of usersMock) {
    promises.push(User.create(user));
  }
  return Promise.all(promises)
    .then(() => 'user fixtures created');
}

module.exports = usersFixture;
