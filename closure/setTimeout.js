function processObjectsDelayed(items, delay) {
    for (let i = 0; i < items.length; i++) {
      setTimeout(function() {
        items[i].process();
      }, delay * i);
    }
  }
  const items = [
    { name: "Alpha", process: function() { console.log(`Processing: ${this.name}`); } },
    { name: "Beta", process: function() { console.log(`Task for ${this.name} done.`); } }
  ];
  processObjectsDelayed(items, 1000);  