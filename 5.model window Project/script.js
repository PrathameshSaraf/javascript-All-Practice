const model = document.querySelector('.modal');
const closeModel = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');
const showModel = document.querySelectorAll('.show-modal');
let openM = function () {
  model.classList.remove('hidden');
  overLay.classList.remove('hidden');
};
let closeM = function () {
  model.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < showModel.length; i++) {
  console.log(showModel[i].addEventListener('click', openM));
}

closeModel.addEventListener('click', closeM);
overLay.addEventListener('click', closeM);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && model.classList.contains('hidden')) {
    closeM();
  }
});
