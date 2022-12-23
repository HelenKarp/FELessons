let animal = {
    eats: true,
    walk() {
      /* цей метод не буде використаний об’єктом rabbit */
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.walk = function(name) {
   name = prompt("enter your animal");
   alert  (name);
  };
  
  rabbit.walk(); // тут отримаємо 'Кролик! Скік-скік!'