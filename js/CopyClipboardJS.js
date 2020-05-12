class CopyClipboardJS{
    /**
     * Creates an instance of CopyClipboardJS.
     * @param {HTMLElement[]]} btns - The buttons.
     * @memberof CopyClipboardJS
     */
    constructor(btns){
        this.addEvent(btns);
    }

    /**
     * Add the event to the buttons.
     * @param {HTMLElement[]]} btns - The buttons.
     * @memberof CopyClipboardJS
     */
    addEvent(btns){
        for(const btn of btns){
            btn.addEventListener('click', function(e){
                e.preventDefault();
                CopyClipboardJS.copy(this);
            });
        }
    }

    /**
     * Copy to the clipboard some text.
     * @static
     * @param {HTMLElement} btn - The button.
     * @memberof CopyClipboardJS
     */
    static copy(btn){
        let copied = document.querySelector('.copy-clipboard-support .copy-clipboard-aux'),
            range = document.createRange(),
            selection = window.getSelection();

        copied.innerHTML = btn.children[0].innerHTML;
        selection.removeAllRanges();
        range.selectNodeContents(copied);
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();

        this.copied(btn.children[1]);
    }

    /**
     * Show the copied message.
     * @static
     * @param {HTMLElement} spanSelected - The selected span.
     * @memberof CopyClipboardJS
     */
    static copied(spanSelected){
        let spans = document.querySelectorAll('.copy-clipboard-btn .copy-clipboard-tooltip');
        for(const span of spans){
            span.innerHTML = "Copiar";
            span.parentNode.classList.remove('copied');
        }
        spanSelected.parentNode.classList.add('copied');
        spanSelected.innerHTML = 'Copiado :)';
    }
}