const ORDERS_KEY = "smartfood_orders";

// obtener todos
export const getOrders = () => {
  return JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
};

// pedidos de un usuario
export const getUserOrders = (email) => {
  const orders = getOrders();
  return orders[email] || [];
};

// agregar pedido
export const addOrder = (email, product) => {
  const orders = getOrders();

  if (!orders[email]) {
    orders[email] = [];
  }

  orders[email].push(product);

  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
};