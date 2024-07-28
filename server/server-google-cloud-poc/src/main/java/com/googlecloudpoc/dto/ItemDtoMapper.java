package com.googlecloudpoc.dto;

import com.googlecloudpoc.entity.Item;

public class ItemDtoMapper {
	
	public static Item toItem(ItemDto dto) {
		return new Item(dto.id(), dto.description());
	}
	
	public static ItemDto toItemDto(Item item) {
		return new ItemDto(item.getId(), item.getDescription());
	}

}
