window.addEventListener('load', () => {
    const model = new ListModel(['Баранина - 300 кал. | 16,2 б. | 15 ж. | 0 у.', 'Говядина - 200 кал. | 19 б. | 12,5 ж. | 0 у.', 'Индейка - 198 кал. | 21,3 б. | 12,1 ж. | 0,8 у.', 'Курица - 199 кал. | 20,7 б. | 8,5 ж. | 0,4 у.','Свинина - 397 кал. | 16,1 б. | 27,9 ж. | 0 у.','Яйца - 50 кал. | 12,5 б. | 12 ж. | 0,6 у.','Телятина - 201 кал. | 19,4 б. | 1,1 ж. | 0 у.','Сосиски - 265 кал. | 10,5 б. | 23,9 ж. | 1,7 у.','Овсянка - 384 кал. | 11,8 б. | 5,6 ж. | 65,5 у.','Ананас - 57 кал. | 0,1 б. | 0 ж. | 11,7 у.', ]),
        view = new ListView(model, {
            'list' : document.getElementById('list'),
            'addButton' : document.getElementById('plusBtn'),
            'delButton' : document.getElementById('minusBtn'),
            // 'changeButton' : document.getElementById('changeBtn')
        }),
        controller = new ListController(model, view);

    view.show();
});



