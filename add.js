const openModalBtn = document.getElementById('openModal');
openModalBtn.addEventListener('click', ()=> {
    const modal = document.createElement('div'); 
    modal.classList.add('modal');
    modal.innerText = 'Настоящим Я выражаю свое свободное, однозначное и информированное согласие на обработку предоставленных мною персональных данных , зарегистрированному по адресу: (далее по тексту – Оператор), в соответствии с указанными ниже сведениями: 1. Оператор может совершать следующие действия с моими персональными данными: сбор, систематизация, хранение, изменение, использование, обезличивание, блокирование, распространение, предоставление, удаление персональных данных.2. Согласие выдано мною на обработку следующих персональных данн 2. Согласие выдано мною на обработку следующих персональных данных:7. Предоставляя свое согласие на обработку персональных данных, я подтверждаю, что мне были разъяснены мои права как субъекта персональных данных и механизм их реализации'
    const cards = document.querySelector('.form-chek-container'); 
    cards.appendChild(modal);
    const btnClose = document.createElement('button'); 
    btnClose.innerText = 'X';
    btnClose.classList.add('modal-btn-close');
    btnClose.style.color = 'white';
    btnClose.addEventListener('click', ()=> {
    cards.removeChild(modal);
})

modal.appendChild(btnClose);
});