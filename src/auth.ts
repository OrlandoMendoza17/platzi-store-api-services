import AuthService from "./services/auth.service";

(async () => {
  try {
    
    const authApi = new AuthService();
  
    const email = "ommv.17@hotmail.com";
    const password = "27313279";
  
    const access_token = await authApi.login({ email, password });
    console.log("access_token:", access_token)  
    
    const user = await authApi.profile(access_token);
    console.log(`${"=".repeat(15)} User have logged in ${"=".repeat(15)}`)
    console.log("user:", user)  
    
  } catch (error: any) {
    console.log(error)
    console.log(error?.message)
  }
})();
