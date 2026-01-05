const convertButton = document.querySelector(".convert-button");
const selectCurrency = document.querySelector(".currency-select");
const selectCurrencyToConvert = document.querySelector(".currency-to-convert");
const currencyConvertedName = document.getElementById("currency-name");
const nameCurrencyToConvert = document.querySelector(
  "#name-currency-to-convert"
);
const valueToConvert = document.querySelector("#value-to-convert");

/* Inicialização das variáveis que receberão o valor atualizado das moedas:*/

let dolarToday = 0;
let euroToday = 0;
let libraToday = 0;

/* função para pegar o valor da libra sempre atualizado:*/

async function getLibra() {
  const url = "https://api.exchangerate-api.com/v4/latest/BRL";

  const response = await fetch(url);
  const data = await response.json();

  libraToday = data.rates.GBP; // taxa BRL → GBP
}
/* função para pegar o valor do dolar sempre atualizado:*/

async function getDolar() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  const data = await response.json();
  dolarToday = Number(data.USDBRL.bid);
  /*   return Number(data.USDBRL.bid); */
}

/* função para pegar o valor do euro sempre atualizado:*/

async function getEuro() {
  const response = await fetch(
    "https://economia.awesomeapi.com.br/json/last/EUR-BRL"
  );
  const data = await response.json();
  euroToday = Number(data.EURBRL.bid);
}

/* Chamando as funções para pegar esses valores:*/

getLibra();
getDolar();
getEuro();

/* Declarando variáveis de controle de valor inicial: */

const valorToConvert = 0.0;
let controlValue = 0.0;
let controlCurrencyToConvert = "r";
let controlCurrencyConverted = "d";

/* Função para trocar nome e foto da moeda a ser convertida: */

function changeCurrencyToConvertName() {
  const inputCurrencyValue = document.querySelector(".input-value");
  const imgCurrencyToConvert = document.querySelector(
    ".img-currency-to-convert"
  );
  if (selectCurrencyToConvert.value == "real") {
    nameCurrencyToConvert.innerHTML = "Real";
    imgCurrencyToConvert.src = "./assets/brasil.png";
    controlCurrencyToConvert = "r";
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(controlValue);
  }
  if (selectCurrencyToConvert.value == "dolar") {
    nameCurrencyToConvert.innerHTML = "Dolar Americano";
    imgCurrencyToConvert.src = "./assets/estados-unidos.png";
    controlCurrencyToConvert = "d";
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(controlValue);
  }
  if (selectCurrencyToConvert.value == "euro") {
    nameCurrencyToConvert.innerHTML = "Euro";
    imgCurrencyToConvert.src = "./assets/Euro.png";
    controlCurrencyToConvert = "e";
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(controlValue);
  }
  if (selectCurrencyToConvert.value == "libra") {
    nameCurrencyToConvert.innerHTML = "Libra";
    imgCurrencyToConvert.src = "./assets/libra.png";
    controlCurrencyToConvert = "l";
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
    }).format(controlValue);
  }
  convertValue();
}

/* Função para trocar nome e foto da moeda convertida: */

function changeCurrencyName() {
  const imageCurrency = document.querySelector(".img-currency");

  if (selectCurrency.value == "real") {
    currencyConvertedName.innerHTML = "Real";
    imageCurrency.src = "./assets/brasil.png";
    controlCurrencyConverted = "r";
  }

  if (selectCurrency.value == "dolar") {
    currencyConvertedName.innerHTML = "Dolar Americano";
    imageCurrency.src = "./assets/estados-unidos.png";
    controlCurrencyConverted = "d";
  }

  if (selectCurrency.value == "euro") {
    currencyConvertedName.innerHTML = "Euro";
    imageCurrency.src = "./assets/Euro.png";
    controlCurrencyConverted = "e";
  }
  if (selectCurrency.value == "libra") {
    currencyConvertedName.innerHTML = "Libra";
    imageCurrency.src = "./assets/libra.png";
    controlCurrencyConverted = "l";
  }
  convertValue();
}

/* Função que converte o valor da moeda: */

function convertValue() {
  const inputCurrencyValue = document.querySelector(".input-value").value;
  const valueConverted = document.querySelector("#value-converted");

  /* 
  conferindo se a moeda a ser convetida é o real: */
  if (controlCurrencyToConvert == controlCurrencyConverted) {
    alert("As moedas selecionadas para serem convertidas são iguais!");
  }

  if (controlCurrencyToConvert == "r") {
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);

    /* 
    Condicionais para definir qual será a conversão do real: */

    if (controlCurrencyConverted == "r") {
      const convertedCurrency = inputCurrencyValue;
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "d") {
      const convertedCurrency = inputCurrencyValue / dolarToday;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "l") {
      const convertedCurrency = inputCurrencyValue * libraToday;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "e") {
      const convertedCurrency = inputCurrencyValue / euroToday;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(convertedCurrency);
    }
  }

  /* 
  Conferindo se a moeda a ser convetida é o Dolar: */

  if (controlCurrencyToConvert == "d") {
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);

    /* 
    Condicionais para definir qual será a conversão do Dolar: */

    if (controlCurrencyConverted == "d") {
      const convertedCurrency = inputCurrencyValue;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "r") {
      const convertedCurrency = inputCurrencyValue * dolarToday;
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "l") {
      const convertedCurrency = inputCurrencyValue * 0.79;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "e") {
      const convertedCurrency = inputCurrencyValue * 0.85;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(convertedCurrency);
    }
  }

  /* 
  conferindo se a moeda a ser convetida é o euro: */

  if (controlCurrencyToConvert == "e") {
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);

    if (controlCurrencyConverted == "e") {
      const convertedCurrency = inputCurrencyValue;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "r") {
      const convertedCurrency = inputCurrencyValue * euroToday;
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "d") {
      const convertedCurrency = inputCurrencyValue * 1.17;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "l") {
      const convertedCurrency = inputCurrencyValue * 0.87;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(convertedCurrency);
    }
  }

  /* 
  conferindo se a moeda a ser convetida é a Libra: */

  if (controlCurrencyToConvert == "l") {
    valueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);

    if (controlCurrencyConverted == "l") {
      const convertedCurrency = inputCurrencyValue;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "r") {
      const convertedCurrency = inputCurrencyValue / libraToday;
      valueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "d") {
      const convertedCurrency = inputCurrencyValue * 1.35;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(convertedCurrency);
    }
    if (controlCurrencyConverted == "e") {
      const convertedCurrency = inputCurrencyValue * 1.16;
      valueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(convertedCurrency);
    }
  }
}
selectCurrency.addEventListener("change", changeCurrencyName);
convertButton.addEventListener("click", convertValue);
selectCurrencyToConvert.addEventListener("change", changeCurrencyToConvertName);
