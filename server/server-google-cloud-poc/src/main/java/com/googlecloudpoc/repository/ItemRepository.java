package com.googlecloudpoc.repository;

import java.util.List;

import com.googlecloudpoc.entity.Item;

public interface ItemRepository {

	List<Item> findAll();
	
	Item save(Item item);
	
	int deleteById(int id);
	
}
