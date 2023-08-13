document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");

  document.querySelector("#sign-up").addEventListener("click", () => {
    console.log("connectez-vous");

    document.querySelector("#modal").classList.remove("hidden");
  });

  document.querySelector("#modal").addEventListener("click", (event) => {
    document.querySelector("#modal").classList.add("hidden");
  });

  document.querySelector("#form-modal").addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.querySelector("#close").addEventListener("click", () => {
    console.log("fermer");

    document.querySelector("#modal").classList.add("hidden");
  });

  document.querySelector("#button-video").addEventListener("click", () => {
    console.log("click video");

    document.querySelector("iframe").classList.toggle("hide-video");

    const button = document.querySelector("#button-video");
    console.log(button.textContent);

    if (button.textContent === "Montrer la video de présentation") {
      button.textContent = "Cacher la vidéo de présentation";
    } else {
      button.textContent = "Montrer la video de présentation";
    }
  });

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
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
    } catch (error) {
      console.log(error);
    }
  });
});
