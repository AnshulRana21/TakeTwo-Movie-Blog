/*

Here we will write some simple backend for our authentication process, which will use 'async-await' practices.

We will write this in the form of a class, where user can assess it by an object(from a class), by using the constructurs from it.


*/


import config from "../config/config";
import { Client, Account, ID } from "appwrite";



// here is the class with constructors....

export class AuthService{

    //making client and account....
    client = new Client();
    account;

    //constructor for creating cleint and account when the user want to...
    constructor(){

        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId)

        this.account = new Account(this.client);


    }



    // now all the async method for the authentication (you can also save these, for any appwrite project)....



    //Sign up process....
    async createAccount({email, password, name}) {

        try {
            
            //creating account....
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            //created, u can just simply log in now also
            if (userAccount) {
                return this.login({email, password});
            } else {
               return  userAccount;
            }


        }
        
        catch (error) {
            throw error;
        }
    }



    //Login in process....
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }




    //For home page(wether already loged in or not), if yes, just sent them to their account ....
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }




    //Logout process....
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }



}


// this will be the object that the user will use to create from the class....
const authService = new AuthService();

export default authService;