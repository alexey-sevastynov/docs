export const getStrNumbsUpTo10 = (numberPrice1: string): string => {
  if (numberPrice1.length === 1) {
    switch (numberPrice1) {
      case "1":
        return "Одна";
      case "2":
        return "Дві";
      case "3":
        return "Три";
      case "4":
        return "Чотири";
      case "5":
        return "П'ять";
      case "6":
        return "Шість";
      case "7":
        return "Сім";
      case "8":
        return "Вісім";
      case "9":
        return "Дев'ять";
      default:
        return "";
    }
  }
  return "";
};

export const getStrNumbsUpTo20 = (numberPrice1: string): string => {
  if (numberPrice1.length === 2) {
    switch (numberPrice1) {
      case "10":
        return "Десять";
      case "11":
        return "Одинадцять";
      case "12":
        return "Дванадцять";
      case "13":
        return "Тринадцять";
      case "14":
        return "Чотирнадцять";
      case "15":
        return "П'ятнадцять";
      case "16":
        return "Шістнадцять";
      case "17":
        return "Сімнадцять";
      case "18":
        return "Вісімнадцять";
      case "19":
        return "Дев'ятнадцять";
      default:
        return "";
    }
  }
  return "";
};

export const getStrNumbsUpTo100 = (numberPrice1: string): string => {
  if (numberPrice1.length === 1) {
    switch (numberPrice1) {
      case "1":
        return "Десять";
      case "2":
        return "Двадцять";
      case "3":
        return "Тридцять";
      case "4":
        return "Сорок";
      case "5":
        return "П'ятдесят";
      case "6":
        return "Шістдесят";
      case "7":
        return "Сімдесят";
      case "8":
        return "Вісімдесят";
      case "9":
        return "Дев'яносто";
      default:
        return "";
    }
  }
  return "";
};

export const getStrNumbsUpTo1000 = (numberPrice1: string): string => {
  if (numberPrice1.length === 1) {
    switch (numberPrice1) {
      case "1":
        return "Сто";
      case "2":
        return "Двісті";
      case "3":
        return "Триста";
      case "4":
        return "Чотириста";
      case "5":
        return "П'ятсот";
      case "6":
        return "Шістсот";
      case "7":
        return "Сімсот";
      case "8":
        return "Вісімсот";
      case "9":
        return "Дев'ятсот";
      default:
        return "";
    }
  }
  return "";
};

export const getStrNumbsUpTo10000 = (numberPrice1: string): string => {
  if (numberPrice1.length === 1) {
    switch (numberPrice1) {
      case "1":
        return "Одна тисяча";
      case "2":
        return "Дві тисячі";
      case "3":
        return "Три тисячі";
      case "4":
        return "Чотири тисячі";
      case "5":
        return "П'ять тисяч";
      case "6":
        return "Шість тисяч";
      case "7":
        return "Сім тисяч";
      case "8":
        return "Вісім тисяч";
      case "9":
        return "Дев'ять тисяч";
      default:
        return "";
    }
  }
  return "";
};
