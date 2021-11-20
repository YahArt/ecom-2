const storage = window.localStorage;
const CURRENT_PRODUCT_ID_KEY = 'current_product_id';
const CURRENT_LOCATION_KEY = 'current_location';
const CURRENT_TIME_KEY = 'current_time';
const CURRENT_DATE_KEY = 'current_date';
const CURRENT_PAYMENT_KEY = 'current_payment';
const CURRENT_COLOR_KEY = 'current_color';
const ORDERS_KEY = 'orders';

function setCurrentProductId(productId) {
  storage.setItem(CURRENT_PRODUCT_ID_KEY, productId);
}

function getCurrentProductId() {
  return storage.getItem(CURRENT_PRODUCT_ID_KEY);
}

function getCurrentLocation() {
  return storage.getItem(CURRENT_LOCATION_KEY);
}

function setCurrentLocation(location) {
  storage.setItem(CURRENT_LOCATION_KEY, location);
}

function getCurrentTime() {
  return storage.getItem(CURRENT_TIME_KEY);
}

function setCurrentTime(time) {
  storage.setItem(CURRENT_TIME_KEY, time);
}

function getCurrentDate() {
  return storage.getItem(CURRENT_DATE_KEY);
}

function setCurrentDate(date) {
  storage.setItem(CURRENT_DATE_KEY, date);
}

function getCurrentPayment() {
  return storage.getItem(CURRENT_PAYMENT_KEY);
}

function setCurrentPayment(payment) {
  storage.setItem(CURRENT_PAYMENT_KEY, payment);
}

function getCurrentColor() {
  return storage.getItem(CURRENT_COLOR_KEY);
}

function setCurrentColor(color) {
  storage.setItem(CURRENT_COLOR_KEY, color);
}

function clearCurrentInformation() {
  storage.setItem(CURRENT_PRODUCT_ID_KEY, '');
  storage.setItem(CURRENT_LOCATION_KEY, '');
  storage.setItem(CURRENT_TIME_KEY, '');
  storage.setItem(CURRENT_DATE_KEY, '');
  storage.setItem(CURRENT_PAYMENT_KEY, '');
  storage.setItem(CURRENT_COLOR_KEY, '');
}

function getOrders() {
  const ordersStringified = storage.getItem(ORDERS_KEY);
  const orders = ordersStringified
    ? JSON.parse(ordersStringified)
    : [];
  return orders;
}

function addOrder() {
  const orders = getOrders();
  const newOrder = {
    productId: getCurrentProductId(),
    location: getCurrentLocation(),
    time: getCurrentTime(),
    date: getCurrentDate(),
    payment: getCurrentPayment(),
    color: getCurrentColor(),
    id: orders.length + 1,
  };
  orders.push(newOrder);

  const ordersStringified = JSON.stringify(orders);
  storage.setItem(ORDERS_KEY, ordersStringified);
}

export {
  setCurrentProductId,
  getCurrentProductId,
  getCurrentLocation,
  setCurrentLocation,
  getCurrentTime,
  setCurrentTime,
  getCurrentDate,
  setCurrentDate,
  getCurrentPayment,
  setCurrentPayment,
  setCurrentColor,
  getCurrentColor,
  clearCurrentInformation,
  getOrders,
  addOrder,
};
