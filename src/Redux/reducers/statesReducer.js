import secureLocalStorage from "react-secure-storage";

const id = secureLocalStorage.getItem("_id");
const uName = secureLocalStorage.getItem("uName");
const image = secureLocalStorage.getItem("image");
const uType = secureLocalStorage.getItem("uType");
const name = secureLocalStorage.getItem("name");
const resultDate = secureLocalStorage.getItem("date");
const accessToken = secureLocalStorage.getItem("accessToken");
const forgotToken = secureLocalStorage.getItem("forgotToken");

const initialState = {
  id: id ? id : null,
  uType: uType ? uType : null,
  uName: uName ? uName : null,
  image: image ? image : null,
  name: name ? name : null,
  resultDate: resultDate ? resultDate : null,
  accessToken: accessToken ? accessToken : null,
  forgotToken: forgotToken ? forgotToken : null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "login") {
    secureLocalStorage.setItem("accessToken", action.payload.accessToken);
    secureLocalStorage.setItem("_id", action.payload.id);
    secureLocalStorage.setItem("uType", action.payload.uType);
    secureLocalStorage.setItem("uName", action.payload.uName);
    secureLocalStorage.setItem("image", action.payload.image);
    secureLocalStorage.setItem("name", action.payload.name);
    
    return {
      ...state,
      accessToken: action.payload.accessToken,
      id: action.payload.id,
      uType: action.payload.uType,
      uName: action.payload.uName,
      image: action.payload.image,
      name: action.payload.name,
    };
  } else if (action.type === "updateprofile") {
    secureLocalStorage.setItem("_id", action.payload.id);
    secureLocalStorage.setItem("uType", action.payload.uType);
    secureLocalStorage.setItem("uName", action.payload.uName);
    secureLocalStorage.setItem("image", action.payload.image);
    secureLocalStorage.setItem("name", action.payload.name);
    return {
      ...state,
      id: action.payload.id,
      uType: action.payload.uType,
      uName: action.payload.uName,
      image: action.payload.image,
      name: action.payload.name,
    };
  } else if (action.type === "updatename") {
    secureLocalStorage.setItem("name", action.payload.name);
    return {
      ...state,
      name: action.payload.name,
    };
  } else if (action.type === "updateimage") {
    secureLocalStorage.setItem("image", action.payload.image);
    return {
      ...state,
      image: action.payload.image,
    };
  } else if (action.type === "logout") {
    secureLocalStorage.clear();
    return {
      ...state,
      accessToken: null,
      id: null,
      uType: null,
      uName: null,
      image: null,
      name: null,
    };
    
  } else if (action.type === "forgot") {
    secureLocalStorage.setItem("forgotToken", action.payload.forgotToken);
    return {
      // ...state,
      forgotToken: action.payload.forgotToken,
    };
    
  } else if (action.type === "removeForgot") {
    secureLocalStorage.removeItem("forgotToken");
    return {
      // ...state,
      forgotToken: null,
    };
    
  } else {
    return state;
  }
};
export default reducer;
