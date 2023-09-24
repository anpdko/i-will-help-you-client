const checkLabelsNearby = (elems: NodeListOf<Element>, style: any) => {
  setTimeout(() => {
    for (let i = 0; i < elems.length - 1; i++) {
      const inputElem = elems[i].querySelector('input');
      const inputNextElem = elems[i + 1].querySelector('input');
      if (inputElem && inputNextElem) {
        if (inputElem.checked && inputNextElem.checked) {
          elems[i].classList.add(style.right);
        } else {
          elems[i].classList.remove(style.right);
        }
      }
    }
    for (let i = 1; i < elems.length; i++) {
      const inputElem = elems[i].querySelector('input');
      const inputPrevElem = elems[i - 1].querySelector('input');
      if (inputElem && inputPrevElem) {
        if (inputElem.checked && inputPrevElem.checked) {
          elems[i].classList.add(style.left);
        } else {
          elems[i].classList.remove(style.left);
        }
      }
    }
  }, 20);
};

export default checkLabelsNearby;
