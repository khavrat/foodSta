(() => {
    const refs = {
      openFormB: document.querySelector("[data-form-open]"),
      openFormBt: document.querySelector("[data-form-opened]"),
      openFormBtn: document.querySelector("[data-form-opening]"),

      closeFormBtn: document.querySelector("[data-form-close]"),
      form: document.querySelector("[data-form]"),
      body: document.querySelector("body"),
    };
  
    refs.openFormB.addEventListener("click", toggleForm);
    refs.openFormBt.addEventListener("click", toggleForm);
    refs.openFormBtn.addEventListener("click", toggleForm);

    refs.closeFormBtn.addEventListener("click", toggleForm);
  
    function toggleForm() {
      refs.form.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();