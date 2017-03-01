import {Injectable} from '@angular/core';
import {User} from '../models/user';

const usersPromise:Promise<User[]> = Promise.resolve([
{
    id:1,
    name:'Chris',
    username:'sevilyaha',
    avatar:'http://www.planwallpaper.com/static/images/3d-butterfly-wallpaper-for-desktop-unique-nature-hd-wallpapers.jpg'
},
{
    id:2,
    name:'Nick',
    username:'whatnicktweets',
    avatar:'http://www.planwallpaper.com/static/images/3D-HD-Wallpaper-03-Dekstop.jpg'
},
{
    id:2,
    name:'Holly',
    username:'hollylawly',
    avatar:'http://www.planwallpaper.com/static/images/3d-nature-800x600.jpg'
}

]);

@Injectable()

export class UserService{

    //get all UserService
    getUsers(){
        return usersPromise;
    }

    //find a specific user
    getUser(username){
        return usersPromise.then(users => users.find(user=> user.username ===username));
    // let user = usersPromise.then(users =>{
    // return users.find(user=> {
    //     return user.username === username;
    // });
    // })
    // return user;
    }

}