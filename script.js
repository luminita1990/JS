let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]
//1. Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID 
let task_1 = goods.filter((elem) => elem.id % 2 === 0);
console.log(task_1); 

//2.Отфильтруйте продукты с количеством менее 5 единиц
let task_2 = goods.filter((elem) => elem.count < 5);
console.log(task_2); // [{id: 4, title: 'Холодильник', price: 200, count: 2}, {id: 6, title: 'Телефон', price: 1900, count: 12}, {id: 8, title: 'Мангал', price: 250, count: 7}]

//3.Найдите значение элемента массива (продукта), цена которого будет кратна 5
let task_3 = goods.find((item) => item.price % 5 === 0);
console.log(task_3); // {id: 4, title: 'Холодильник', price: 200, count: 2}

//4.Найдите индекс элемента, count которого будет больше 11
let task_4 = goods.findIndex((item) => item.count > 11);
console.log(task_4); // 6

//5.Посчитайте количество элементов, count которых является нечетным числом
let task_5 = goods.filter((item) => item.count % 2 !== 0).length;
console.log(task_5); // 2

//6.Посчитайте количество элементов, имя которых начинается на “Т”
let task_6 = goods.filter((item) => item.title.startsWith('T')).length;
console.log(task_6); // 3

//7.Проверьте, есть ли хотя бы один продукт с ценой выше 500.
let task_7 = goods.some((item) => item.price > 500);
console.log(task_7);

//8.Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)
const task_8 = goods.map((item) => item.price * 0.65);
console.log(task_8); 

//9.Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)
const task_9 = goods.map((item) => ({ ...item, count: 0 }));
console.log(task_9);