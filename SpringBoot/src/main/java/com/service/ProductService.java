package com.service;

 

import java.util.List;
import java.util.Optional;

 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

 

import com.bean.Product;
import com.dao.ProductDao;
import com.dao.ProductRepository;

 

@Service
public class ProductService {

 

        @Autowired
        ProductDao productDao;
        
        @Autowired
        ProductRepository productRepository;
        
    /*    public Product createProduct(Product product) {
            return productdao.save(product);
        } */
        
         public List < Product > getAllProduct() {
                return productDao.getAllProductDetails();
            }
         
         public List<Product> getAllProductFromSpringData() {
             return productRepository.findAll();
         }
         
         public String storeProductService(Product pro) {
                if(productDao.storeProduct(pro)>0) {
                    return "Record Stored Successfully";
                } else {
                    return "Didn't Store";
                }
            }
         
         public String storeProductSpringData(Product pp) {
            Optional<Product> op = productRepository.findById(pp.getPid());
            if(op.isPresent()) {
                return "Record Already Present";
            } else {
                Product p = productRepository.save(pp);
                if(p!=null) {
                    return "Record Stored SuccessFully";
                } else {
                    return "Record Didn't Store";
                }
            }
         }
         
         public String deleteProductInfo(int pid) {
                if(productDao.deleteProductInfo(pid) > 0) {
                    return "Record Deleted SuccessFully";
                } else {
                    return "Record Didn't Deleted";
                }
            }
         
         public String deleteProductSpringData(int pid) {
             if(productRepository.existsById(pid)) {
                 productRepository.deleteById(pid);
                 return "Record Deleted SuccessFully";
             } else {
                 return "Record Not Present";
             }
         }
            
            public String updateProductInfo(Product pp) {
                if(productDao.updateProductInfo(pp) > 0) {
                    return "Record updated successfully";
                }else {
                    return "Record Not Updated";
                }
            }
            
            public String updateProductSpringData(Product pp) {
                     Product p = productRepository.getOne(pp.getPid());
                     if(p!=null) {
                         p.setPrice(pp.getPrice());
                         productRepository.saveAndFlush(p);    
                         return "Record Updated Successfully";
                 } else {
                     return "Record Not Updated";
                 }
             }
}