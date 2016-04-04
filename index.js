const data = {
    "todo1": {
        title: "Todo 1",
        value: "Make it happen"
    }
    "todo2": {
        title: "Todo 2",
        value: "Make it happen"
    }

    let map = Immutable.Map(data);
    console.log(map.get(todo1).title)
]
}
