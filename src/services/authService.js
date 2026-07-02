const USERS_KEY = "smartfood_users";
const CURRENT_USER_KEY = "smartfood_current_user";

// Registrar usuario
export const registerUser = (user) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const exists = users.find((u) => u.correo === user.correo);

  if (exists) {
    return {
      success: false,
      message: "Este correo ya está registrado."
    };
  }

  users.push(user);

  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return {
    success: true
  };
};

// Iniciar sesión
export const loginUser = (correo, password) => {
  const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];

  const user = users.find(
    (u) =>
      u.correo === correo &&
      u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Correo o contraseña incorrectos."
    };
  }

  localStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(user)
  );

  return {
    success: true,
    user
  };
};

// Obtener usuario actual
export const getCurrentUser = () => {
  return JSON.parse(
    localStorage.getItem(CURRENT_USER_KEY)
  );
};

// Cerrar sesión
export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};