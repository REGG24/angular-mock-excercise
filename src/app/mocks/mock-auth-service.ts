export class MockAuthService{
    authenticated = true; 

    isAuthenticated(){
        return this.authenticated;
    }
}