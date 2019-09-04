import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserProps> {

  regionsMap(): { [key:string] : string } {
    return  {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }

  onRender(): void {
    const show = new UserShow(this.regions.userShow, this.model);
    const form = new UserForm(this.regions.userForm, this.model);
    
    show.render();
    form.render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}