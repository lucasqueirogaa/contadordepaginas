let showPa = document.querySelector(".showPa");
let btnStart = document.querySelector(".btnStart");
let mainDiv = document.querySelector(".main");
let mainPara = document.querySelector(".mainPara");
alertFun = () => {
  alert("Erro");
};
const progressaoAr = function () {
  inicio = parseInt(document.getElementById("inicial").value);
  razao = parseInt(document.getElementById("razao").value);
  final = parseInt(document.getElementById("termo").value);
  pa = "";
  if (razao > 4) {
    alert(
      "Por favor, coloque um número de páginas válido (de 1 a 4 por folha)"
    );
  } else if (
    inicio == 0 ||
    inicio == "" ||
    razao == 0 ||
    razao == "" ||
    final == 0 ||
    final == ""
  ) {
    alert("Por favor, não deixe nenhum espaço vazio!");
  } else {
    for (let count = 1; count <= final; count++) {
      if (razao == 2) {
        pa += inicio + "," + (inicio + 1) + ",";
        inicio += razao * 2;
      } else if (razao == 3) {
        pa += inicio + "," + (inicio + 1) + "," + (inicio + 2) + ",";
        inicio += razao * 2;
      } else if (razao == 4) {
        pa +=
          inicio +
          "," +
          (inicio + 1) +
          "," +
          (inicio + 2) +
          "," +
          (inicio + 3) +
          ",";
        inicio += razao * 2;
      } else if (razao == 1) {
        pa += inicio + ",";
        inicio += razao * 2;
      } else {
      }
      mainDiv.classList.add("hidden");
      mainPara.classList.remove("hidden");
    }
  }

  showPa.innerHTML = pa;
};

btnStart.addEventListener("click", progressaoAr);

let resetarTudo = document.querySelector(".reset");

resetarTudo.addEventListener("click", () => {
  mainDiv.classList.remove("hidden");
  mainPara.classList.add("hidden");
  document.getElementById("inicial").value = "";
  document.getElementById("razao").value = "";
  document.getElementById("termo").value = "";
});
