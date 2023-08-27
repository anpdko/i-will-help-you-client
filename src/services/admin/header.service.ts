
export default function authHeader() {
   const userString = localStorage.getItem('admin');
   
   if (userString) {
      const user = JSON.parse(userString);
      if (user && user.token) {
         return { Authorization: 'Bearer ' + user.token };
      }
   }
   
   return {};
}