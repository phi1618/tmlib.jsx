
import "js/web.jsx";

import "../app/element.jsx" into tm;
import "../graphics/canvas.jsx";

import "canvaselement.jsx";
import "sprite.jsx";
import "label.jsx";

/**
 * group class
 */
class Renderer {
    /**
     * constructor
     */
    function constructor() {
        super();
    }

    function render(root: tm.Element, canvas: Canvas): void {
        this._render(root, canvas);
    }

    function _render(element: tm.Element, canvas: Canvas): void {

        if (element instanceof Sprite) {
            var sprite = element as Sprite;
            canvas.setTransform(1, 0, 0, 1, sprite.position.x, sprite.position.y);

            if (sprite.loaded == true) {
                // ctx.drawImage(sprite.image, sprite.position.x, sprite.position.y, sprite.width, sprite.height);
                canvas.drawImage(sprite.image);
            }
            else {
                canvas.fillRect(0, 0, sprite.width, sprite.height);
            }
        }
        else if(element instanceof Label) {
            var label = element as Label;
            canvas.setTransform(1, 0, 0, 1, label.position.x, label.position.y);

            canvas.fillText(label.text, 0, 0);
        }
        else {

        }

        // draw children
        if (element.children.length > 0) {
            element.children.forEach((elm) -> {
                this._render(elm, canvas);
            });
        }
    }
}
