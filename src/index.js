import _ from "lodash";
import "./style.css";
import Img from "./myphoto.jpg";
function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "Webpack"], "");
  element.classList.add("hello");
  const myImage = new Image();
  myImage.src = Img;
  element.appendChild(myImage);
  return element;
}
document.body.appendChild(component());
