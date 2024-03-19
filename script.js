'use strict'

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.creator = function (selector, height, width, bg, fontSize) {
        if (selector[0] === '.') {
            const newDiv = document.createElement('div')
            newDiv.classList.add(selector.slice(1))
            newDiv.textContent = 'any text'
            document.body.append(newDiv)
            newDiv.style.cssText = `
            height: ${height};
            width: ${width};
            background: ${bg};
            font-size: ${fontSize};
            `
        } else if (selector[0] === '#') {
            const newPar = document.createElement('p')
            newPar.setAttribute('id', selector.slice(1))
            newPar.textContent = 'any text'
            document.body.append(newPar)
            newPar.style.cssText = `
            height: ${height};
            width: ${width};
            background: ${bg};
            font-size: ${fontSize};
            `
        }
    }
}

const newElem = new DomElement
const newElem1 = new DomElement

newElem.creator('#best', '30px', '100px', 'border-box red', '16px')
newElem1.creator('.block', '30px', '100px', 'border-box red', '16px')