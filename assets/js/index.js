document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("content loaded");

    document.querySelector("#sign-up").addEventListener("click", () => {
      console.log("connectez-vous");

      document.querySelector("#modal").classList.remove("hidden");
    });

    document.querySelector("#close").addEventListener("click", () => {
      console.log("fermer");

      document.querySelector("#modal").classList.add("hidden");
    });

    document.querySelector("form").addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };

      console.log(data);

      const response = await axios.post(
        "https://site--tripadvisor-backend--fwddjdqr85yq.code.run/form",
        data
      );
      console.log(response);
      // alert("votre message a bien été envoyé");
      document.querySelector("#modal").classList.add("hidden");
    });
  } catch (error) {
    console.log(error);
  }
});
