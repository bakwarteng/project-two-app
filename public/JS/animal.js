// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// };

const loggedIn = document.body.dataset.loggedIn === 'true';

const exampleModal = document.getElementById('exampleModal');
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    if (!isLoggedIn) {
      alert('You must be logged in to send a message.');
      $('#exampleModal').modal('hide'); // Using Bootstrap's jQuery method to hide the modal
      return; // Prevents the modal from processing further
    }

    // Continue with existing setup if the user is logged in
    const button = event.relatedTarget;
    const recipient = button.getAttribute('data-bs-whatever');

    const modalTitle = exampleModal.querySelector('.modal-title');
    const modalBodyInput = exampleModal.querySelector('.modal-body input');

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });
}