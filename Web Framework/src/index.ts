import { User } from './models/User';

const newUser = User.buildUser({ id: 2});

newUser.fetch();