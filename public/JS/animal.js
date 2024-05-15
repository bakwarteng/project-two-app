const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')

    modalTitle.textContent = `Adoption form:`
  })
};


document.querySelector('#submit-btn').addEventListener('click', event => {
  event.preventDefault();

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    
  }
  const recipientEmail = document.querySelector('#recipient-name').value
  appendAlert(`Thank you for your submission. Happy Tails will reach out to you at ${recipientEmail}!`, 'success');
});