package com.googlecloudpoc.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.googlecloudpoc.repository.ExternalItemRepository;
import com.googlecloudpoc.repository.ItemRepository;

@Configuration
public class RepositoryConfiguration {

	@Value("${item.repository.impl}")
	private String repositoryBeanName;

	@Autowired
	private ItemRepository localItemRepository;

	@Autowired
	private ExternalItemRepository externalItemRepository;

	@Bean
	public ItemRepository itemRepository() {
		if ("localItemRepository".equals(repositoryBeanName)) {
			return localItemRepository;
		} 
		return externalItemRepository;
	}
}
