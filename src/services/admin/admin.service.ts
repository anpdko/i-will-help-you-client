
const logout = () => {
  localStorage.removeItem('admin');
};

const isAuth = (status: number) => {
  if (status === 401 && localStorage.getItem('admin') !== null) {
    logout();
    alert('Время аутентификации истекло!');
    return true;
  }
  return false;
};

const adminService = {
  logout,
  isAuth,
};

export default adminService;
