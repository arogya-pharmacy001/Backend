package com.dao;

 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 

import com.bean.Product;

 

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> { //First Parameter Entity Class and Second Parameter Primary Key.
    
}