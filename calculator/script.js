
let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let string = "";
buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        let value = e.target.innerText;
        if (value == "C") {
            string = "";
            display.value = "";
        }

        else if (value === "=") {
            try {
                string = eval(string);
                display.value = string;
            } catch {
               display.value = "Error";
               string = "";

            }
        }
        else {
           string += value;
           display.value = string; 
        }
   
    });
   
});
