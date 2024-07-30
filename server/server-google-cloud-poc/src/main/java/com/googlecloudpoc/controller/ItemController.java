package com.googlecloudpoc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.googlecloudpoc.dto.ItemDto;
import com.googlecloudpoc.service.ItemService;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins = "${client.instance.url}")
public class ItemController {
	
	private final ItemService itemService;
	
	@Autowired
	public ItemController(ItemService itemService) {
		this.itemService = itemService;
	}

	@GetMapping("/all")
	public ResponseEntity<List<ItemDto>> getAllItems() {
		return ResponseEntity.ok(itemService.getAllItems());
	}
	
	@PostMapping("/add")
	public ResponseEntity<ItemDto> addItem(@RequestBody ItemDto itemRequestDto) {
		return ResponseEntity.ok(itemService.addItem(itemRequestDto));
	}
	
	@DeleteMapping("/delete")
	public void deleteItem(@RequestParam Integer id) {
		itemService.deleteItem(id);
	}
	
}
