const form = document.getElementById("form_sentence");

if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const sentence = formData.get("sentence");

    window.Toastify.showToast({
        text: "This is a toast",
        duration: 3000,
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            textAllign: "center",
            background: "pink", 
            color: "white",
            padding: "5px",
            marginTop: "2px"
            
        },
      });

//     try {
//       const response = await window.axios.openAI(sentence);

//       document.getElementById("sentence_corrected").innerHTML = JSON.stringify(response.choices[0].text).replace(/\\n/g, '');
//     } catch (error) {
//       console.error("Error:", error);
//       // Handle or display the error message appropriately
//     }
//   };
}
