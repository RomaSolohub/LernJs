// it's link for my site 
// https://romasolohub.github.io/LernJs/
let hour = prompt(`Сколько сейчас часов?`,'')
let messege = (0 < hour < 8) ? 'Магази н закрыт':
(8 < hour < 13) ? 'Магазин открыт':
(13 < hour < 15) ? 'Обед' : 
(15 < hour < 18) ? 'Магазин открыт' : 
(18 < hour < 24) ? 'Магази н закрыт':
(24 < hour < 50) ? 'tt';