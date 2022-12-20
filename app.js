


const image_input = document.querySelector("#image-input");

image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

 function displayText() {
      var familiaName = document.getElementById("nombreFamiliar").value;
var name = document.getElementById("nombre").value; 
var message = document.getElementById("mensaje").value;
   document.getElementById("show_text").innerHTML = name + " ha creado una ofrenda para " + familiaName + " la historia que se recuerda de este ser querido es la siguiente: " + message ;
}
	

console.clear();

const typing = document.querySelectorAll('.typewriter');

function type(element) {

function randomOpacity() {
  return (Math.floor(Math.random() * 50) + 50)/100;
}

function randomEms() {
  if (Math.random() > .8) {
  return (Math.floor(Math.random() * 100) - 50)/800;
  }
  else {
    return 0;
  }
}

function wrap(char) {
  return '<span style="opacity:' + randomOpacity() + '; text-shadow:' + randomEms() + 'em ' + randomEms() + 'em currentColor;">' + char + '</span>';
}

const wrappedText = Array.from(element.textContent).map(wrap);

element.innerHTML = wrappedText.join('');
  
}

typing.forEach(type);