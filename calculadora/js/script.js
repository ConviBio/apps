var row ='<div class="row-container"><div class="img-container"><img src="imgs/{3}" id="{0}img" alt="{1}"></div><div class="desc">{1}</div><div class="price-desc">$ {2}</div><div class="input-container"><input type="number" id="{0}" placeholder="0"></div></div>'

for(let i = 0, itemsContainer = $('#items-container'), length1 = utensilios.length; i < length1; i++){
	var newRow = row.split("{0}").join(utensilios[i].id)
	newRow = newRow.split("{1}").join(utensilios[i].desc)
	newRow = newRow.split("{2}").join(utensilios[i].precio)
	newRow = newRow.split("{3}").join(utensilios[i].img)
	itemsContainer.append(newRow);
}

var inputs = $(':input');

for(let i = 0, length1 = inputs.length; i < length1-1; i++){
	inputs[i].onkeyup = function(e){
		if (e.which == 13 || e.keyCode == 13){
			inputs[i+1].focus();
		}
	};
}
inputs[inputs.length-1].onkeyup = function(e){
	if (e.which == 13 || e.keyCode == 13){
		inputs[inputs.length-1].blur();
	}
};


$(':input').focusout(function(){
	calculateTotal();
});

function calculateTotal(){
	var sum = 0.0;
	var c = 0;
	$(':input').each(function(){
		var currentVal = this.value;
		sum += parseFloat((currentVal === "" || isNaN(currentVal)) ? 0.0 : currentVal)*utensilios[c].precio;
		c += 1;
	});
	/*
	sum += parseFloat((gt("pl1").value === "" || isNaN(gt("pl1").value)) ? 0.0 : gt("pl1").value)*1.0;
	sum += parseFloat((gt("pl2").value === "" || isNaN(gt("pl2").value)) ? 0.0 : gt("pl2").value)*1.0;
	sum += parseFloat((gt("pl3").value === "" || isNaN(gt("pl3").value)) ? 0.0 : gt("pl3").value)*1.0;
	sum += parseFloat((gt("vs1").value === "" || isNaN(gt("vs1").value)) ? 0.0 : gt("vs1").value)*1.0;
	sum += parseFloat((gt("cch1").value === "" || isNaN(gt("cch1").value)) ? 0.0 : gt("cch1").value)*0.5;
	sum += parseFloat((gt("ten1").value === "" || isNaN(gt("ten1").value)) ? 0.0 : gt("ten1").value)*0.5;
	sum += parseFloat((gt("cuc1").value === "" || isNaN(gt("cuc1").value)) ? 0.0 : gt("cuc1").value)*0.5;
	sum += parseFloat((gt("jar1").value === "" || isNaN(gt("jar1").value)) ? 0.0 : gt("jar1").value)*6.0;*/
	$("#total")[0].innerHTML = "Total: $ "+ sum;
}





// Get the modal
var modal = $("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = $("#img01");
var captionText = $("#caption");

function displayModal(img){
	modal[0].style.display = "block";
	modalImg[0].src = img.src;
	captionText[0].innerHTML = img.alt;
}

$('.img-container img').click(function(){
	displayModal(this);
});

// Get the <span> element that closes the modal
var span = $("#close");

// When the user clicks on <span> (x), close the modal
span.click(function() {
  modal[0].style.display = "none";
});