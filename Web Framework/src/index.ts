import { UserForm } from './views/UserForm';
import { User } from './models/User';

const node = document.getElementById('root');
const user = User.buildUser({ name: 'NAME', age: 20});
const userForm = new UserForm(node, user);

userForm.render();