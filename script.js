let modal = document.getElementById('modal');
let modalImage = document.getElementById('modal-image');
let closeButton = document.querySelector('.close');

function expandPicture(e) {
  modal.style.display = 'flex';
  modalImage.src = e.src;
}

function closeModal() {
  modal.style.display = 'none';
}

function checkboxValues() {
  let roast1 = document.getElementById('dark');
  let roast2 = document.getElementById('mediumRoast');
  let roast3 = document.getElementById('light');
  let flavour1 = document.getElementById('chocolate');
  let flavour2 = document.getElementById('citrus');
  let flavour3 = document.getElementById('fruity');
  let effect1 = document.getElementById('wake');
  let effect2 = document.getElementById('keep');
  let effect3 = document.getElementById('chill');

  if (
    roast1.checked == true &&
    (flavour1.checked == true ||
      flavour2.checked == true ||
      flavour3.checked == true) &&
    effect1.checked == true
  ) {
    alert(
      'We recommend our Brazilian blend 80% robusta double espresso called DARK RIO'
    );
  } else if (
    roast1.checked == true &&
    (flavour1.checked == true ||
      flavour2.checked == true ||
      flavour3.checked == true) &&
    effect2.checked == true
  ) {
    alert(
      'We recommend our Kenyan blend 65% robusta latte called BUSHMANS MARATHON'
    );
  } else if (
    roast2.checked == true &&
    (flavour1.checked == true ||
      flavour2.checked == true ||
      flavour3.checked == true) &&
    effect1.checked == true
  ) {
    alert(
      'We recommend our Guatemalan blend 50% arabica single espresso called ALARM BELL'
    );
  } else if (
    roast2.checked == true &&
    (flavour1.checked == true ||
      flavour2.checked == true ||
      flavour3.checked == true) &&
    effect2.checked == true
  ) {
    alert(
      'We recommend our Ethiopian blend 60% robusta flath white called DIESEL POWER'
    );
  } else if (
    roast3.checked == true &&
    (flavour1.checked == true ||
      flavour2.checked == true ||
      flavour3.checked == true) &&
    effect1.checked == true
  ) {
    alert(
      'We recommend our Colombian blend 65% robusta latte called LIGHT AT THE END OF TUNEL'
    );
  } else if (
    roast3.checked == true &&
    (flavour1.checked == true ||
      flavour2.checked == true ||
      flavour3.checked == true) &&
    effect3.checked == true
  ) {
    alert(
      'We recommend our Brazilian blend 100% arabica cappuccino called COPACABANA SUNRISE'
    );
  } else {
    alert(
      'We recommend our Honduras blend 50% arabica cappuccino called BREAKING BEANS '
    );
  }
}

function sendEmail(e) {
  if (document.emailForm.name.value === '') {
    e.preventDefault();
    alert('Name is a mandatory field');
    return false;
  }
  if (document.emailForm.mail.value === '') {
    e.preventDefault();
    alert('Email is a mandatory field');
    return false;
  }
  if (document.emailForm.comment.value === '') {
    e.preventDefault();
    alert('Comment is a mandatory field');
    return false;
  }
  return true;
}

function sendComment() {
  document.getElementById('demo').innerHTML +=
    document.getElementById('fname').value;
  document.getElementById('fname').value = '';
  document.getElementById('demo2').innerHTML +=
    document.getElementById('rcomment').value;
  document.getElementById('rcomment').value = '';
}

function sponsors(e) {
  e.style.display = 'none';
  let sponsors = ['JavaCoffe', 'Jubilarna', 'NCI'];
  for (i = 0; i < sponsors.length; i++) {
    document.getElementById('sponsorsPH').innerHTML += sponsors[i] + ', ';
  }
}
