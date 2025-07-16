class Item {
	constructor(start, target, target_points, name, tooltip){
		this.start = start;
		this.target = target;
		this.target_points = target_points;
		this.name = name;
		this.tooltip = tooltip;
	}

	examine(){
		return this.tooltip;
	}

	toString(){
		return this.name;
	}
}

class Book extends Item {
	constructor(title, start, tooltip){
		super(start, 1, 5, title, tooltip);
	}
}

class Player {
	constructor(x, y){
		this.places_visited = new Set();
		this.x = x;
		this.inventory = [];
		this.victory = false;
		this.minutes = 60*4;
		this.can_jaywalk = false;
		this.death_chance = 25;
		this.score = 0;
	}

	store(item){
		if (self.inventory.length < 8){
			this.inventory.append(item);
			return item.tooltip;
		}
		else {
			return "inventory full";
		}
	}
}


class Location {

	constructor(number, full_description, summary){
		this.number = number;
		this.full_description = full_description;
		this.summary = summary;
		this.visited = false;
	}

	deposit(p, item){
		if (item.target == this.number){
			p.score += item.target_points;
			//Remove item from array (below)
			idx = inventory.indexOf(item);
			if (idx > -1){
				inventory.splice(idx, 1);
			}
			return "You got " + item.target_points.toString() + " points";

		}
		else {
			return "Congrats! That did... Nothing.";
		}

	}

}

class World {
	constructor(map, location_data, items_data){
		this.map = map;
		this.location_data = location_data;
		this.items_data = items_data;
	}

	get_location(x,y){
		if (this.map[y][x] == -1){
			return None
		}
		else {
			return self.map[y][x]
		}
	}
}
