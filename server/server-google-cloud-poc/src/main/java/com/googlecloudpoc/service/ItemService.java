package com.googlecloudpoc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.googlecloudpoc.dto.ItemDto;
import com.googlecloudpoc.dto.ItemDtoMapper;
import com.googlecloudpoc.entity.Item;
import com.googlecloudpoc.repository.ItemRepository;

@Service
public class ItemService {

	private final ItemRepository itemRepository;

	@Autowired
	public ItemService(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	public List<ItemDto> getAllItems() {		
		return itemRepository.findAll()
				.stream()
				.map(item -> ItemDtoMapper.toItemDto(item))
				.toList();		
	}

	public ItemDto addItem(ItemDto itemDto) {
		Item savedItem = itemRepository.save(
				ItemDtoMapper.toItem(itemDto)
		);
		return ItemDtoMapper.toItemDto(savedItem);
	}
	
	public void deleteItem(int id) {
		itemRepository.deleteById(id);
	}

}
