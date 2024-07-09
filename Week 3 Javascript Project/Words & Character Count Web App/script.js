var textarea = document.getElementById('textarea');
var charactercount = document.getElementById('character');
var wordcount = document.getElementById('words');
var sentencecount = document.getElementById('sentences');
var paragraphcount = document.getElementById('paragraphs');
var spacecount = document.getElementById('spaces');
var lettercount = document.getElementById('letters');
var digitcount = document.getElementById('digits');
var specialcharactercount = document.getElementById('specialcharacters');
var buttonmode = document.getElementById('changeMode');
var context = document.querySelector('.content-container');



textarea.addEventListener('input' , (e)=>{
    text =  e.target.value;

    charactercount.textContent = text.length;

    var words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    wordcount.textContent = words;

    var sentence = text.trim().split(/[.!?]/g).filter(sen => sen.length > 0).length;
    sentencecount.textContent = sentence;

    var digits = (text.match(/\d/g) || []).length;
    digitcount.textContent = digits;

    var specialCharacters = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
    specialcharactercount.textContent = specialCharacters;

    var letters = (text.match(/[a-zA-Z]/g) || []).length;
    lettercount.textContent = letters;

    var spaces = (text.match(/\s/g) || []).length;
    spacecount.textContent = spaces;

    var para = text.trim().split(/\n/g).filter(para => para.length > 0).length;
    paragraphcount.textContent = para;
});

buttonmode.addEventListener('click' , (e)=>{
  var docbody =  document.querySelector('body');
 var p1 = context.firstElementChild;
 var icon = buttonmode.querySelector('i');
  if(docbody.style.backgroundColor === 'rgb(18, 18, 18)' && docbody.style.color === 'white')
  {
    p1.textContent = 'Your favourite character count , with a lighter mode!';
    icon.classList.remove('fas' , 'fa-moon');
    icon.classList.add('fas' , 'fa-sun');
    icon.style.color = 'rgb(18, 18, 18)';
    docbody.style.backgroundColor = 'white';
    docbody.style.color = 'rgb(18, 18, 18)';
  }
  else{
    p1.textContent = 'Your favourite character count , with a darker mode!';
    icon.classList.remove('fas' , 'fa-sun');
    icon.classList.add('fas' , 'fa-moon');
    icon.style.color = 'white';
    docbody.style.backgroundColor = 'rgb(18, 18, 18)';
    docbody.style.color = 'white'
  }
});