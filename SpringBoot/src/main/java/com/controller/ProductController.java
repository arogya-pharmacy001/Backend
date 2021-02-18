package com.controller;

 

import java.time.LocalDate;
import java.util.List;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

 

import com.bean.Product;
import com.service.ProductService;

 

// http://localhost:8090/product/info
@RestController
@RequestMapping(value = "product")
public class ProductController {

 

        //@RequestMapping(value = "product", method = RequestMethod.GET)
        @GetMapping(value = "info")
    /*    @PostMapping(value = "info")
        @PutMapping(value = "info")
        @DeleteMapping(value = "info")    */
        public String simpleMessage() {
            return "Welcome to Spring Rest Product Controller";
        } 
        
        @Autowired
        private ProductService productService;
        
        @GetMapping(value = "getProduct", produces = MediaType.APPLICATION_JSON_VALUE)
        public List < Product > getAllProduct() {
            return productService.getAllProduct();
        }
        
        @GetMapping(value = "getProductData", produces = MediaType.APPLICATION_JSON_VALUE)
        public List < Product > getAllProductDetailsFromSpringData() {
            return productService.getAllProductFromSpringData();
        }
        
        @PostMapping(value = "storeProduct", consumes = MediaType.APPLICATION_JSON_VALUE)
        public String storeProductInfo(@RequestBody Product pro) {
            return productService.storeProductService(pro);
        }
        
        @PostMapping(value = "storeProductData", consumes = MediaType.APPLICATION_JSON_VALUE)
        public String storeProductSpringData(@RequestBody Product pro) {
            return productService.storeProductSpringData(pro);
        }
        
        @DeleteMapping(value="deleteProduct/{proId}",produces = MediaType.TEXT_PLAIN_VALUE)
        public String deleteProductInfo(@PathVariable("proId") int id) {
            return productService.deleteProductInfo(id);
        } 
        
        @DeleteMapping(value="deleteProductData/{proId}",produces = MediaType.TEXT_PLAIN_VALUE)
        public String deleteProductSpringData(@PathVariable("proId") int id) {
            return productService.deleteProductSpringData(id);
        } 
        
        @PutMapping(value="updateProduct", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
        public String updateProductInfo(@RequestBody Product pro) {
            return productService.updateProductInfo(pro);
        }
        
        @PutMapping(value="updateProductData", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
        public String updateProductSpringData(@RequestBody Product pro) {
            return productService.updateProductSpringData(pro);
        }
}