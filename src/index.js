function getComponent() {
  return import(/* webpackChunkName: "lodash"*/ "lodash")
    .then(({ default: _ }) => {
      const element = document.createElement("div");
      element.innerHTML = _.join(["hello", "webpack"], " ");
      return element;
    })
    .catch(() => {
      "An error occured while loading the component";
    });
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
