// Заметка: Мне кажется задача решена, не очень корректно

function getDayInfo(date = new Date()) {
  let year = date.getFullYear();
  let month = date.getMonth() ;
  let day = date.getDay();
  let numWeek = date.getDate();

  let months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
   'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
   ];
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
   
  return `${days[day]}, ${numWeek} неделя ${months[month]} ${year} года`;
    
}

console.log(getDayInfo(new Date('11.11.2021')))