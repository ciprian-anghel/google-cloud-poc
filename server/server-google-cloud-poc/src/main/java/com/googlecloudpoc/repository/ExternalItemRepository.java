package com.googlecloudpoc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.googlecloudpoc.entity.Item;

public interface ExternalItemRepository extends JpaRepository<Item, Integer>, ItemRepository {

}
