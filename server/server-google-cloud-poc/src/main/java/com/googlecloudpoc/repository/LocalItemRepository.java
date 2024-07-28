package com.googlecloudpoc.repository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

import org.springframework.stereotype.Repository;

import com.googlecloudpoc.entity.Item;

@Repository
public class LocalItemRepository implements ItemRepository {
	
	private List<Item> items = new ArrayList<>();
		
	public LocalItemRepository() {
		items.add(new Item(1, "Local Item 1"));
		items.add(new Item(2, "Local Item 2"));
		items.add(new Item(3, "Local Item 3"));
		items.add(new Item(4, "Local Item 4"));
		items.add(new Item(5, "Local Item 5"));
		items.add(new Item(6, "Local Item 6"));
		items.add(new Item(7, "Local Item 7"));
		items.add(new Item(8, "Local Item 8"));
		items.add(new Item(9, "Local Item 9"));
		items.add(new Item(10, "Local Item 10"));
	}

	@Override
	public List<Item> findAll() {
		return List.copyOf(items);
	}

	@Override
	public Item save(Item item) {
        PriorityQueue<Item> maxHeap = new PriorityQueue<>(Comparator.comparingInt(Item::getId).reversed());
        maxHeap.addAll(items);
        Item largestItem = maxHeap.peek();
        item.setId(largestItem.getId() + 1);
		items.add(item);
		return item;
	}

	@Override
	public int deleteById(int id) {
		boolean succes = items.removeIf(x -> x.getId() == id);
		return succes ? 1 : 0;
	}

}
