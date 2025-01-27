class ListView extends Events {
    constructor(model, elements) {
        super();
        this._model = model;
        this._elements = elements;

        // attach model listeners
        model.on('itemAdded', () => this.rebuildList())
            .on('itemRemoved', () => this.rebuildList())
            .on('itemChanged',()=> this.rebuildList());

        // attach listeners to HTML controls
        elements.list.addEventListener('change',
            e => this.emit('listModified', e.target.selectedIndex));
        elements.addButton.addEventListener('click',
            () => this.emit('addButtonClicked'));
        elements.delButton.addEventListener('click',
            () => this.emit('delButtonClicked'));
        // elements.changeButton.addEventListener('click',
        //     () => this.emit('changeButtonClicked'));
    }

    show() {
        this.rebuildList();
    }
    rebuildList() {
        const list = this._elements.list;
        list.options.length = 0;
        this._model.getItems().forEach(
            item => list.options.add(new Option(item)));
        this._model.selectedIndex = -1;
    }
}