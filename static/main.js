window.onload = function() {
    document.getElementById('i1').addEventListener('input', function(){
        if(document.getElementById('i1').value.lenght == 10)
            document.body.style.backgroundColor = 'red';
    });
};

import Select from "./m2.js"

const selectElements = document.querySelectorAll("[data-custom]")

selectElements.forEach(selectElement => {
  new Select(selectElement)
});