export default class ShopItem {
  constructor(data) {
    // закладываются обязательные поля класса
    const fields = [
      'brand',
      'title',
      'description',
      'descriptionFull',
      'price',
      'currency',
    ];

    fields.forEach((field) => {
      // идёт проверка каждого поля на соответствие входящему объекту по полям
      if (!data.hasOwnProperty(field))
        throw Error(`Не корректно переданный объект, поле: ${field}`);
      // перезаписывается свойства this из аналогичных свойств входящего объекта
      this[field] = data[field];
    });
  }
}
