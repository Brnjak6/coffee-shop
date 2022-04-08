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
